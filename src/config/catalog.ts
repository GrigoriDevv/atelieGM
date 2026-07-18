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
    id: 'criancas-fraldario',
    name: 'Fraldário bordado',
    description: 'Fraldário com bordado personalizado — nomes, ursinhos ou desenhos delicados.',
    longDescription:
      'O fraldário bordado é a peça prática do dia a dia do bebê, com acabamento artesanal e personalização sob medida. Ideal para organizar fraldas e itens essenciais com charme e cuidado.',
    features: [
      'Bordado personalizado com nome ou desenho',
      'Acabamento artesanal reforçado',
      'Disponível nas linhas Bebê, Dia a dia e Super Luxo',
    ],
    category: 'criancas',
    hint: 'Personalizável',
    image: '/images/kit-safari-paulo-francisco.png',
  },
  {
    id: 'criancas-manta',
    name: 'Manta em tecido piquê 100% algodão',
    description: 'Manta em piquê 100% algodão com bordado do nome ou monograma do bebê.',
    longDescription:
      'Manta em tecido piquê 100% algodão, macia e aconchegante, bordada com o nome ou monograma do bebê. Ideal para o berço, o passeio ou o presente de maternidade.',
    features: [
      'Tecido piquê 100% algodão',
      'Bordado com nome ou monograma',
      'Perfeita para presentear',
    ],
    category: 'criancas',
    hint: 'Personalizável',
    image: '/images/manta-pique-algodao.png',
  },
  {
    id: 'criancas-body',
    name: 'Body personalizado',
    description: 'Body com bordado exclusivo — ideal para maternidade e presentes.',
    longDescription:
      'Body com bordado exclusivo, feito para marcar momentos especiais. Personalize com nome, data ou um desenho delicado.',
    features: [
      'Bordado exclusivo sob encomenda',
      'Ideal para maternidade e batizado',
      'Acabamento cuidadoso na pele do bebê',
    ],
    category: 'criancas',
  },
  {
    id: 'criancas-kit-berco',
    name: 'Kit berço completo',
    description: 'Conjunto coordenado: lençol, fronha, manta e babador bordados.',
    longDescription:
      'Kit completo para o berço, com peças coordenadas e bordadas no mesmo tema. Uma composição elegante e prática para o quarto do bebê.',
    features: [
      'Lençol, fronha, manta e babador',
      'Visual coordenado sob encomenda',
      'Personalização de nomes e temas',
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
    id: 'criancas-babador',
    name: 'Babador bordado',
    description: 'Babador com acabamento artesanal e bordado personalizado.',
    longDescription:
      'Babador artesanal com bordado personalizado — útil no dia a dia e com um toque especial de carinho.',
    features: [
      'Bordado personalizado',
      'Acabamento artesanal',
      'Uso prático no dia a dia',
    ],
    category: 'criancas',
    image: '/images/kit-ursinho-joao-lucas.png',
  },
  {
    id: 'criancas-kit-fraldas-ombro',
    name: 'Kit Fraldas Ombro Luxo',
    description: 'Kit de fraldas de ombro com bordado floral, nome do bebê e acabamento em renda.',
    longDescription:
      'Kit de fraldas de ombro na linha luxo, bordadas à mão com jardim de flores, borboletas e o nome do bebê. Acabamento delicado em renda e barrados coordenados — práticas no dia a dia e lindas para presentear.',
    features: [
      'Bordado floral com o nome do bebê',
      'Acabamento em renda e barrados coordenados',
      'Kit com múltiplas fraldas de ombro',
    ],
    category: 'criancas',
    hint: 'Personalizável',
    image: '/images/kit-fraldas-ombro-1.png',
    images: [
      '/images/kit-fraldas-ombro-1.png',
      '/images/kit-fraldas-ombro-2.png',
      '/images/kit-fraldas-ombro-3.png',
    ],
  },
  {
    id: 'criancas-kit-fraldas-boca',
    name: 'Kit fraldas de boca',
    description: 'Kit de fraldas de boca personalizadas com nome e bordados infantis.',
    longDescription:
      'Kit de fraldas de boca bordadas à mão com o nome do bebê e desenhos infantis coordenados. Peças práticas para o dia a dia, com acabamento delicado em renda e babado.',
    features: [
      'Bordado personalizado com o nome do bebê',
      'Desenhos infantis coordenados',
      'Acabamento em renda e babado',
    ],
    category: 'criancas',
    hint: 'Personalizável',
    image: '/images/kit-fraldas-boca-safari.png',
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
    id: 'cama-colcha',
    name: 'Colcha com monograma',
    description: 'Colcha leve com bordado central em monograma ou inicial.',
    longDescription:
      'Colcha leve com bordado central em monograma ou inicial, trazendo sofisticação e identidade ao quarto.',
    features: [
      'Bordado central em destaque',
      'Acabamento artesanal',
      'Personalização de monograma',
    ],
    category: 'cama',
  },
  {
    id: 'cama-fronha',
    name: 'Fronha avulsa bordada',
    description: 'Fronha individual com bordado delicado — perfeita para presentear.',
    longDescription:
      'Fronha avulsa com bordado delicado. Peça versátil para complementar o jogo de cama ou presentear com elegância.',
    features: [
      'Peça avulsa',
      'Bordado delicado',
      'Ótima opção de presente',
    ],
    category: 'cama',
  },
  {
    id: 'cama-edredom',
    name: 'Edredom personalizado',
    description: 'Edredom com bordado exclusivo para quarto de casal ou solteiro.',
    longDescription:
      'Edredom personalizado sob encomenda, com bordado exclusivo e acabamento sob medida para casal ou solteiro.',
    features: [
      'Sob encomenda',
      'Tamanhos casal ou solteiro',
      'Bordado exclusivo',
    ],
    category: 'cama',
    hint: 'Sob encomenda',
  },
  {
    id: 'mesa-toalha',
    name: 'Toalha de mesa bordada',
    description: 'Toalha de mesa com bordado nas pontas ou centro — vários tamanhos.',
    longDescription:
      'Toalha de mesa bordada para ocasiões especiais ou uso diário, com opções de bordado nas pontas ou no centro.',
    features: [
      'Vários tamanhos',
      'Bordado nas pontas ou centro',
      'Acabamento artesanal',
    ],
    category: 'mesa',
  },
  {
    id: 'mesa-jogo-americano',
    name: 'Jogo americano (6 peças)',
    description: 'Conjunto de 6 jogos americanos com bordado coordenado.',
    longDescription:
      'Conjunto de 6 jogos americanos com bordado coordenado, ideal para mesa posta com estilo e harmonia.',
    features: [
      'Kit com 6 peças',
      'Bordado coordenado',
      'Ideal para mesa posta',
    ],
    category: 'mesa',
    hint: 'Conjunto',
  },
  {
    id: 'mesa-guardanapo',
    name: 'Guardanapos bordados',
    description: 'Guardanapos de tecido com bordado artesanal — kit ou avulso.',
    longDescription:
      'Guardanapos de tecido com bordado artesanal. Disponíveis em kit ou avulso, para complementar a mesa.',
    features: [
      'Kit ou avulso',
      'Bordado artesanal',
      'Combina com toalhas e jogos americanos',
    ],
    category: 'mesa',
  },
  {
    id: 'mesa-centro',
    name: 'Centro de mesa',
    description: 'Peça decorativa bordada para valorizar sua mesa posta.',
    longDescription:
      'Centro de mesa bordado para valorizar a composição da mesa posta com um detalhe artesanal exclusivo.',
    features: [
      'Peça decorativa',
      'Bordado exclusivo',
      'Acabamento artesanal',
    ],
    category: 'mesa',
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
    id: 'banho-roupao',
    name: 'Roupão infantil bordado',
    description: 'Roupão macio para crianças com bordado personalizado.',
    longDescription:
      'Roupão infantil macio com bordado personalizado. Conforto após o banho com um toque especial de carinho.',
    features: [
      'Bordado personalizado',
      'Toque macio',
      'Ideal para crianças',
    ],
    category: 'banho',
    hint: 'Personalizável',
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
  {
    id: 'banho-tapete',
    name: 'Tapete bordado',
    description: 'Tapete para banheiro com bordado exclusivo e acabamento reforçado.',
    longDescription:
      'Tapete de banheiro com bordado exclusivo e acabamento reforçado, para complementar o ambiente com identidade.',
    features: [
      'Bordado exclusivo',
      'Acabamento reforçado',
      'Complemento para o kit banho',
    ],
    category: 'banho',
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
