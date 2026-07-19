# GM Arteira — Landing Page

Landing page estática para a **GM Arteira**, ateliê de bordados exclusivos para crianças e enxoval de cama, mesa e banho. Desenvolvida em React + Vite, sem backend — o atendimento é feito via WhatsApp Business.

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS + shadcn/ui
- React Router
- Lucide icons

## Desenvolvimento local

```bash
npm install
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173).

## Build para produção

```bash
npm run build
npm run preview
```

Os arquivos estáticos ficam em `dist/` — prontos para deploy na Vercel, Netlify ou GitHub Pages.

## Configuração

### WhatsApp

Edite [`src/config/contact.ts`](src/config/contact.ts):

```typescript
export const WHATSAPP_NUMBER = '5575999999999' // formato internacional, sem + ou espaços
export const WHATSAPP_DISPLAY = '+55 (75) 99999-9999'
```

As mensagens pré-preenchidas por categoria também ficam neste arquivo (`MESSAGES`).

### Marca e conteúdo

Edite [`src/config/brand.ts`](src/config/brand.ts) para alterar:

- Nome, tagline e descrição
- Categorias e textos
- Horário de atendimento
- Instagram (campo `SOCIAL.instagram`)

### Catálogo e página de detalhes

Edite [`src/config/catalog.ts`](src/config/catalog.ts) para adicionar, remover ou alterar opções. Cada item possui:

- `name` — nome da peça (aparece na mensagem do WhatsApp)
- `description` — resumo no catálogo
- `longDescription` — texto completo na página de detalhes
- `features` — lista de destaques na página de detalhes
- `category` — `criancas`, `cama`, `mesa` ou `banho`
- `hint` — badge opcional (ex: "Personalizável", "Sob encomenda")

Ao clicar em um produto no catálogo, o visitante vai para `/produto/:id`, escolhe a linha de qualidade e pede orçamento no WhatsApp.

| Linha | Descrição |
|---|---|
| Linha Bebê | Apenas produtos infantis — tecidos macios e bordados delicados |
| Dia a dia | Qualidade essencial, preço mais acessível |
| Super Luxo | Tecidos premium e acabamento superior |

As linhas e textos ficam em `QUALITY_TIERS` no mesmo arquivo.

### Fotos

Substitua os placeholders da galeria e do hero:

1. Adicione imagens em `public/images/`
2. Atualize [`src/sections/Gallery.tsx`](src/sections/Gallery.tsx) e [`src/sections/Hero.tsx`](src/sections/Hero.tsx) para usar `<img src="/images/sua-foto.jpg" alt="..." />`

## Automação no WhatsApp Business

O site direciona visitantes para o WhatsApp com mensagens contextualizadas. A automação real é configurada no app **WhatsApp Business**:

1. **Mensagem de boas-vindas** — resposta automática ao primeiro contato
2. **Respostas rápidas** — atalhos para orçamento, prazo e pagamento
3. **Mensagem de ausência** — fora do horário definido em `brand.ts`

## Estrutura do projeto

```
src/
├── components/
│   ├── ui/           # shadcn (Button, Card, Badge, Tabs, Sheet…)
│   ├── layout.tsx    # Section + Container
│   └── …             # Navbar, Footer, etc.
├── config/           # WhatsApp, copy, catálogo
├── pages/            # Home e detalhes do produto
├── sections/         # Hero, Categorias, Galeria…
├── hooks/
└── index.css         # Tokens Tailwind / tema GM Arteira
```

## Deploy

### Vercel / Netlify

Conecte o repositório e use:

- **Build command:** `npm run build`
- **Output directory:** `dist`

### GitHub Pages

Adicione `base: '/nome-do-repo/'` em `vite.config.ts` se necessário.
