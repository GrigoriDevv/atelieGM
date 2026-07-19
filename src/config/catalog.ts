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
    name: 'Jogo de lençol',
    description: 'Jogo de lençol bordado — monograma, nome ou desenho à escolha.',
    longDescription:
      'Jogo de lençol bordado à mão com monograma, nome ou desenho. Acabamento delicado, sob encomenda, nas linhas Dia a dia e Super Luxo.',
    features: [
      'Bordado personalizado com nome ou monograma',
      'Acabamento artesanal',
      'Linhas Dia a dia e Super Luxo',
    ],
    category: 'cama',
    hint: 'Personalizável',
    image: '/images/hero-cama-maria-fernanda.png',
    images: [
      '/images/hero-cama-maria-fernanda.png',
      '/images/jogo-lencol-virol-fronha.png',
    ],
  },
  {
    id: 'cama-fronhas',
    name: 'Fronhas',
    description: 'Fronhas bordadas, coordenadas com o jogo de lençol ou avulsas.',
    longDescription:
      'Fronhas bordadas à mão com monograma, nome ou desenho. Podem acompanhar o jogo de lençol ou ser encomendadas avulsas, com o mesmo cuidado artesanal.',
    features: [
      'Bordado personalizado',
      'Avulsas ou coordenadas com o jogo de lençol',
      'Acabamento artesanal',
    ],
    category: 'cama',
    hint: 'Personalizável',
    image: '/images/hero-cama-maria-fernanda.png',
    images: [
      '/images/hero-cama-maria-fernanda.png',
      '/images/jogo-lencol-virol-fronha.png',
    ],
  },
  {
    id: 'cama-almofada',
    name: 'Almofada decorativa',
    description: 'Almofada decorativa com bordado personalizado e acabamento em babado.',
    longDescription:
      'Almofada decorativa bordada à mão, com nome, monograma ou desenhos delicados. Perfeita para complementar a cama ou o quarto, com acabamento artesanal.',
    features: [
      'Bordado personalizado com nome ou desenho',
      'Acabamento decorativo em babado',
      'Ideal para cama, quarto e presentes',
    ],
    category: 'cama',
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
    id: 'banho-toalha-banho',
    name: 'Toalha de banho',
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
      '/images/kit-toalhas-banho-rosto.png',
    ],
  },
  {
    id: 'banho-toalha-rosto',
    name: 'Toalha de rosto',
    description: 'Toalha de rosto bordada, coordenada ou avulsa, com acabamento artesanal.',
    longDescription:
      'Toalha de rosto bordada à mão com nome ou monograma e acabamento em renda. Ideal avulsa ou em conjunto com a toalha de banho.',
    features: [
      'Bordado personalizado',
      'Acabamento em renda',
      'Avulsa ou coordenada com a toalha de banho',
    ],
    category: 'banho',
    hint: 'Personalizável',
    image: '/images/kit-toalhas-banho-rosto.png',
    images: [
      '/images/kit-toalhas-banho-rosto.png',
      '/images/toalha-banho-layane.png',
      '/images/toalha-banho-filipe.png',
    ],
  },
  {
    id: 'banho-toalhinha-social',
    name: 'Toalhinha social',
    description: 'Toalhinha social bordada — um mimo delicado para o lavabo ou o enxoval.',
    longDescription:
      'Toalhinha social com bordado personalizado e acabamento artesanal. Peça pequena e elegante para o lavabo, presentes ou o enxoval de banho.',
    features: [
      'Bordado personalizado',
      'Tamanho social / lavabo',
      'Acabamento artesanal',
    ],
    category: 'banho',
    hint: 'Personalizável',
    image: '/images/kit-toalhas-banho-rosto.png',
    images: [
      '/images/kit-toalhas-banho-rosto.png',
      '/images/toalha-batismo-luiza.png',
      '/images/toalha-banho-layane.png',
    ],
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
    'Olá! Vim pelo catálogo da GM Arteira e tenho interesse na seguinte opção:',
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
