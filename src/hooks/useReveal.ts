import { useEffect } from 'react'

export default function useReveal(): void {
  useEffect(() => {
    let intersectionObserver: IntersectionObserver | null = null

    const observeRevealElements = () => {
      const pending = document.querySelectorAll('.reveal:not(.is-visible)')
      if (pending.length === 0) return

      if (!('IntersectionObserver' in window)) {
        pending.forEach((el) => el.classList.add('is-visible'))
        return
      }

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
          { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
        )
      }

      pending.forEach((el) => intersectionObserver!.observe(el))
    }

    observeRevealElements()

    const mutationObserver = new MutationObserver(observeRevealElements)
    mutationObserver.observe(document.body, { childList: true, subtree: true })

    return () => {
      intersectionObserver?.disconnect()
      mutationObserver.disconnect()
    }
  }, [])
}
