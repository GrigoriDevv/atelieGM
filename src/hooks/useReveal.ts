import { useEffect } from 'react'

export default function useReveal(): void {
  useEffect(() => {
    const root = document.documentElement
    const prefersReduced =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced || !('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'))
      return
    }

    root.dataset.motion = 'ready'

    let intersectionObserver: IntersectionObserver | null = null

    const observeRevealElements = () => {
      const pending = document.querySelectorAll('.reveal:not(.is-visible)')
      if (pending.length === 0) return

      if (!intersectionObserver) {
        intersectionObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('is-visible')
                intersectionObserver?.unobserve(entry.target)
              }
            })
          },
          { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
        )
      }

      pending.forEach((el) => intersectionObserver!.observe(el))
    }

    observeRevealElements()

    const mutationObserver = new MutationObserver(observeRevealElements)
    mutationObserver.observe(document.body, { childList: true, subtree: true })

    return () => {
      delete root.dataset.motion
      intersectionObserver?.disconnect()
      mutationObserver.disconnect()
    }
  }, [])
}
