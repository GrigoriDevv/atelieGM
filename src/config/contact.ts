export const WHATSAPP_NUMBER = '5575998016495'
export const WHATSAPP_DISPLAY = '+55 (75) 99801-6495'

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const WHATSAPP_URL = buildWhatsAppUrl(
  'Olá! Vim pelo site do Ateliê GM e gostaria de um orçamento.',
)

export const MESSAGES = {
  default: 'Olá! Vim pelo site do Ateliê GM e gostaria de um orçamento.',
  criancas: 'Olá! Gostaria de um orçamento para peças bordadas para bebê.',
  cama: 'Olá! Tenho interesse em enxoval de cama bordado.',
  mesa: 'Olá! Gostaria de saber sobre peças de mesa bordadas.',
  banho: 'Olá! Tenho interesse em enxoval de banho bordado.',
} as const



export type MessageKey = keyof typeof MESSAGES
