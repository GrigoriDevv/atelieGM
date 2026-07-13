# Quickstart: Product Detail Component

## Manual verification

1. `npm run dev` → open `/#catalogo` → click any product.
2. Confirm: media area, name, descriptions, features, quality radiogroup with default selection.
3. Change quality line → “Pedir orçamento — {linha}” updates; WhatsApp URL text includes piece + line.
4. Tab through quality options and CTA — focus visible.
5. Open `/produto/nao-existe` → not-found copy + Voltar ao catálogo → `/#catalogo`.
6. On a category with multiple items, related cards appear; open one → correct detail; tier resets for new category.
7. Breadcrumb Início / Catálogo / Nome works; “← Voltar ao catálogo” returns to catalog.

## Build check

```bash
npm run build
```
