import { buildWhatsAppUrl } from './contact'
import type { CategoryId } from './brand'

export type QualityTierId = 'bebe' | 'dia-a-dia' | 'super-luxo'

export interface QualityTier {
  id: QualityTierId
  label: string
  description: string
  /** Se definido, a linha só aparece para estas categorias */
  categories?: CategoryId[]
}

export const QUALITY_TIERS: QualityTier[] = [
  {
    id: 'bebe',
    label: 'Linha Bebê',
    description:
      'Tecidos macios e hipoalergênicos, bordados delicados e acabamento seguro — pensados especialmente para o conforto dos pequenos.',
    categories: ['criancas'],
  },
  {
    id: 'dia-a-dia',
    label: 'Dia a dia',
    description:
      'Qualidade essencial com preço mais acessível. Materiais selecionados e bordado artesanal para o uso cotidiano.',
  },
  {
    id: 'super-luxo',
    label: 'Super Luxo',
    description:
      'Qualidade superior com tecidos premium, fios especiais e acabamento impecável. Para quem busca exclusividade máxima.',
  },
]

export interface CatalogItem {
  id: string
  name: string
  description: string
  longDescription: string
  features: string[]
  category: CategoryId
  hint?: string
  /** Public path under /images */
  image?: string
  /** Fotos extras — quando presente, a página do produto exibe um carrossel */
  images?: string[]
}

export const CATALOG_ITEMS: CatalogItem[] = [
  {
    id: 'criancas-fraldas',
    name: 'Fraldas, cueiros e toalhas fralda',
    description:
      'Fraldas de ombro e de boca, cueiros e toalhas fralda — bordados com nome e acabamento delicado.',
    longDescription:
      'Peças práticas do enxoval bordadas à mão: fraldas de ombro e de boca, cueiros e toalhas fralda. Personalizamos com o nome do bebê, desenhos infantis e acabamento em renda ou babado. Também sob encomenda: toalha capuz, toalhinha, almofada de amamentação, trocador, ninho redutor, capa para caderneta de vacinação e lençol.',
    features: [
      'Fraldas de ombro e de boca',
      'Cueiros e toalhas fralda',
      'Bordado personalizado com o nome do bebê',
      'Também sob encomenda: toalha capuz, toalhinha, almofada de amamentação, trocador, ninho redutor, capa para caderneta e lençol',
    ],
    category: 'criancas',
    hint: 'Personalizável',
    image: '/images/kit-fraldas-ombro-1.png',
    images: [
      '/images/kit-fraldas-ombro-1.png',
      '/images/kit-fraldas-ombro-2.png',
      '/images/kit-fraldas-ombro-3.png',
      '/images/kit-fraldas-boca-safari.png',
      '/images/kit-safari-paulo-francisco.png',
      '/images/kit-ursinho-joao-lucas.png',
    ],
  },
  {
    id: 'criancas-mantas',
    name: 'Mantas',
    description: 'Mantas em piquê 100% algodão com bordado do nome ou monograma do bebê.',
    longDescription:
      'Mantas macias em tecido piquê 100% algodão, bordadas com o nome ou monograma do bebê. Ideais para o berço, o passeio ou o presente de maternidade.',
    features: [
      'Tecido piquê 100% algodão',
      'Bordado com nome ou monograma',
      'Perfeitas para presentear',
    ],
    category: 'criancas',
    hint: 'Personalizável',
    image: '/images/manta-pique-algodao.png',
    images: ['/images/manta-pique-algodao.png', '/images/manta-liz.png'],
  },
  {
    id: 'criancas-kit-leito-maternidade',
    name: 'Kit leito maternidade',
    description: 'Conjunto bordado para o leito da maternidade: lençol, fronha e almofada personalizados.',
    longDescription:
      'Kit para o leito da maternidade com lençol, fronha e almofada bordados à mão com o nome do bebê. Peças coordenadas com acabamento em renda, para receber o recém-nascido com todo o carinho já nos primeiros dias.',
    features: [
      'Lençol, fronha e almofada coordenados',
      'Bordado personalizado com o nome do bebê',
      'Acabamento delicado em renda',
    ],
    category: 'criancas',
    hint: 'Personalizável',
    image: '/images/kit-leito-maternidade-1.png',
    images: [
      '/images/kit-leito-maternidade-1.png',
      '/images/kit-leito-maternidade-2.png',
    ],
  },
  {
    id: 'criancas-kit-berco',
    name: 'Kit berço',
    description: 'Conjunto coordenado para o berço, com peças bordadas no mesmo tema.',
    longDescription:
      'Kit completo para o berço, com peças coordenadas e bordadas no mesmo tema. Uma composição elegante e prática para o quarto do bebê.',
    features: [
      'Peças coordenadas sob encomenda',
      'Visual personalizado com nomes e temas',
      'Acabamento artesanal',
    ],
    category: 'criancas',
    hint: 'Sob encomenda',
    image: '/images/kit-berco-maria-fernanda.png',
    images: [
      '/images/kit-berco-maria-fernanda.png',
      '/images/kit-berco-maria-helena-1.png',
      '/images/kit-berco-maria-helena-2.png',
      '/images/kit-berco-maria-helena-3.png',
      '/images/kit-berco-mavie.png',
    ],
  },
  {
    id: 'criancas-almofada',
    name: 'Almofada decorativa',
    description: 'Almofada decorativa com bordado personalizado e acabamento em babado.',
    longDescription:
      'Almofada decorativa bordada à mão, com nome e desenhos delicados. Perfeita para complementar o quarto do bebê ou presentear com um toque artesanal.',
    features: [
      'Bordado personalizado com nome ou desenho',
      'Acabamento decorativo em babado',
      'Ideal para quarto infantil e presentes',
    ],
    category: 'criancas',
    hint: 'Personalizável',
    image: '/images/almofada-decorativa.png',
    images: [
      '/images/almofada-decorativa.png',
      '/images/almofada-maria-fernanda.png',
      '/images/almofada-ave-maria.png',
      '/images/almofada-monograma-tc.png',
      '/images/almofada-monograma-gr.png',
    ],
  },
  {
    id: 'cama-jogo-lencol',
    name: 'Jogo de lençol c/ virol e fronha',
    description: 'Lençol com virol e fronha bordados — monograma, nome ou desenho à escolha.',
    longDescription:
      'Jogo com lençol de virol e fronha, bordados à mão com monograma, nome ou desenho. Acabamento delicado, ideal para berço ou cama com personalização sob medida.',
    features: [
      'Lençol com virol e fronha coordenados',
      'Bordado personalizado com nome ou monograma',
      'Linhas Dia a dia e Super Luxo',
    ],
    category: 'cama',
    hint: 'Personalizável',
    image: '/images/jogo-lencol-virol-fronha.png',
  },
  {
    id: 'banho-toalha',
    name: 'Toalha de banho personalizada',
    description: 'Toalha de banho com nome ou monograma bordado e acabamento em renda.',
    longDescription:
      'Toalha de banho macia com nome ou monograma bordado à mão e acabamento delicado em renda. Uma peça prática, elegante e personalizada para o dia a dia ou para presentear.',
    features: [
      'Nome ou monograma personalizado',
      'Toque macio',
      'Acabamento delicado em renda',
    ],
    category: 'banho',
    hint: 'Personalizável',
    image: '/images/toalha-banho-layane.png',
    images: [
      '/images/toalha-banho-layane.png',
      '/images/toalha-banho-filipe.png',
    ],
  },
  {
    id: 'banho-toalha-batismo',
    name: 'Toalha para batismo',
    description: 'Toalha personalizada para batismo com nome, data e bordado religioso.',
    longDescription:
      'Toalha para batismo bordada à mão com o nome, a data da celebração e símbolos religiosos. O acabamento em renda, flores e laços transforma a peça em uma recordação especial desse momento de fé.',
    features: [
      'Nome e data do batismo personalizados',
      'Bordado religioso com flores e símbolos',
      'Acabamento delicado em renda e laço',
    ],
    category: 'banho',
    hint: 'Personalizável',
    image: '/images/toalha-batismo-luiza.png',
  },
  {
    id: 'banho-kit',
    name: 'Kit toalhas de banho e rosto',
    description: 'Toalhas de banho e rosto com bordados coordenados e acabamento em renda.',
    longDescription:
      'Kit de toalhas de banho e rosto bordadas à mão, com nome ou monograma e acabamento delicado em renda. Bordados coordenados no mesmo tema para um conjunto elegante.',
    features: [
      'Toalhas de banho e rosto coordenadas',
      'Bordado personalizado com nome ou monograma',
      'Acabamento em renda',
    ],
    category: 'banho',
    hint: 'Conjunto',
    image: '/images/kit-toalhas-banho-rosto.png',
  },
]

export type CatalogFilter = CategoryId | 'todos'

export function getCatalogItemById(id: string): CatalogItem | undefined {
  return CATALOG_ITEMS.find((item) => item.id === id)
}

export function getRelatedCatalogItems(item: CatalogItem, limit = 3): CatalogItem[] {
  return CATALOG_ITEMS.filter(
    (candidate) => candidate.category === item.category && candidate.id !== item.id,
  ).slice(0, limit)
}

export function getQualityTiersForCategory(category: CategoryId): QualityTier[] {
  return QUALITY_TIERS.filter(
    (tier) => !tier.categories || tier.categories.includes(category),
  )
}

export function buildCatalogWhatsAppUrl(
  item: CatalogItem,
  categoryLabel: string,
  tier: QualityTier,
): string {
  const message = [
    'Olá! Vim pelo catálogo do Ateliê GM e tenho interesse na seguinte opção:',
    '',
    `*${item.name}*`,
    `Categoria: ${categoryLabel}`,
    `Linha: *${tier.label}*`,
    '',
    'Gostaria de receber um orçamento.',
  ].join('\n')

  return buildWhatsAppUrl(message)
}

export function getProductPath(id: string): string {
  return `/produto/${id}`
}
