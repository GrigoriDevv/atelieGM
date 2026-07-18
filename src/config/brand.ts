import { buildWhatsAppUrl, MESSAGES, type MessageKey } from './contact'

export const BRAND = {
  name: 'Ateliê GM',
  tagline: 'Bordados artesanais feitos com carinho',
  description:
    'Peças exclusivas para crianças e enxoval de cama, mesa e banho — cada ponto feito à mão, com dedicação e amor pelo artesanato.',
} as const

export const BUSINESS_HOURS = 'Segunda a sexta, das 9h às 18h'

export const SOCIAL = {
  instagram: '',
} as const

export type CategoryId = 'criancas' | 'cama' | 'mesa' | 'banho'

export interface Category {
  id: CategoryId
  title: string
  description: string
  messageKey: MessageKey
}

export const CATEGORIES: Category[] = [
  {
    id: 'criancas',
    title: 'Crianças',
    description: 'Fraldários, mantas, bodies e peças personalizadas com bordados delicados.',
    messageKey: 'criancas',
  },
  {
    id: 'cama',
    title: 'Cama',
    description: 'Lençóis, fronhas, colchas e jogos de cama com acabamento artesanal.',
    messageKey: 'cama',
  },
  {
    id: 'mesa',
    title: 'Mesa',
    description: 'Toalhas, jogos americanos e guardanapos bordados para momentos especiais.',
    messageKey: 'mesa',
  },
  {
    id: 'banho',
    title: 'Banho',
    description: 'Toalhas, roupões e tapetes com bordados exclusivos e duráveis.',
    messageKey: 'banho',
  },
]

export function getCategoryWhatsAppUrl(id: CategoryId): string {
  return buildWhatsAppUrl(MESSAGES[id])
}

export interface ProcessStep {
  step: number
  title: string
  description: string
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Escolha ou envie referência',
    description: 'Navegue pelas categorias ou envie uma foto do que deseja bordar.',
  },
  {
    step: 2,
    title: 'Orçamento via WhatsApp',
    description: 'Conversamos sobre detalhes, tecidos e personalização — sem compromisso.',
  },
  {
    step: 3,
    title: 'Produção artesanal',
    description: 'Cada peça é bordada à mão com atenção aos mínimos detalhes.',
  },
  {
    step: 4,
    title: 'Entrega',
    description: 'Sua peça exclusiva pronta para emocionar quem você ama.',
  },
]

export interface Highlight {
  title: string
  description: string
}

export const ABOUT_HIGHLIGHTS: Highlight[] = [
  {
    title: 'Feito à mão',
    description: 'Cada ponto é bordado manualmente, garantindo um acabamento único e impecável.',
  },
  {
    title: 'Peças exclusivas',
    description: 'Personalizamos nomes, monogramas e desenhos conforme o seu desejo.',
  },
  {
    title: 'Materiais de qualidade',
    description: 'Trabalhamos com linhas e tecidos selecionados para durabilidade e beleza.',
  },
]

export interface GalleryItem {
  id: string
  alt: string
  category: CategoryId
  image?: string
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    alt: 'Kit berço personalizado Maria Fernanda com bordado de borboletas',
    category: 'criancas',
    image: '/images/kit-berco-maria-fernanda.png',
  },
  {
    id: '2',
    alt: 'Almofada decorativa bordada Maria Fernanda com flores e gaiola',
    category: 'criancas',
    image: '/images/almofada-decorativa.png',
  },
  {
    id: '3',
    alt: 'Manta em tecido piquê 100% algodão personalizada Liz',
    category: 'criancas',
    image: '/images/manta-pique-algodao.png',
  },
  {
    id: '4',
    alt: 'Enxoval safari Paulo Francisco com bordados de animais',
    category: 'criancas',
    image: '/images/kit-safari-paulo-francisco.png',
  },
  {
    id: '5',
    alt: 'Kit de toalhas de banho e rosto Sirlene com bordado floral e renda',
    category: 'banho',
    image: '/images/kit-toalhas-banho-rosto.png',
  },
  {
    id: '6',
    alt: 'Jogo de lençol com virol e fronha bordados Maria Fernanda',
    category: 'cama',
    image: '/images/jogo-lencol-virol-fronha.png',
  },
]

export interface NavLink {
  href: string
  label: string
}

export const NAV_LINKS: NavLink[] = [
  { href: '#catalogo', label: 'Peças' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#contato', label: 'Contato' },
]
