# Aro Dev — Site Institucional

Site oficial da **Aro Dev**, estúdio de desenvolvimento web focado em criar
sites que convertem visitantes em clientes: landing pages, sites
institucionais, e-commerce, automação e integrações com IA.

🔗 Produção: [arodev.com.br](https://arodev.com.br)

## Stack

- **[Next.js 16](https://nextjs.org)** (App Router + Turbopack)
- **React 19**
- **Tailwind CSS 4**
- **TypeScript**
- **[Resend](https://resend.com)** para envio de e-mails (formulário de contato / captura de leads)
- Deploy contínuo na **Vercel**, a partir do branch `main`

## Estrutura

```
app/
  page.tsx              → composição da home (ordem das seções)
  api/contact/          → endpoint do formulário de contato
  api/lead/              → endpoint de captura de leads
components/
  sections/              → uma seção da landing page por arquivo
    hero.tsx
    processo.tsx
    servicos.tsx
    diferenciais.tsx
    porque-investir.tsx
    projetos.tsx
    tecnologias.tsx
    garantia.tsx
    depoimentos.tsx
    faq.tsx
    cta-final.tsx
    footer.tsx
  ambient-background.tsx, marquee.tsx, fade-in.tsx, ...  → efeitos e blocos reutilizáveis
hooks/                   → hooks compartilhados (ex.: use-count-up)
lib/                      → utilitários (ex.: formatação de telefone)
```

Cada seção da home é um componente independente em `components/sections/`,
importado e ordenado em `app/page.tsx`. Para reordenar, adicionar ou remover
uma seção da página, é só editar a lista de imports/JSX nesse arquivo — os
componentes em si não precisam mudar.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # build de produção
npm run lint    # checagem de lint
```

## Deploy

O deploy é automático via Vercel a cada push no branch `main`. Detalhes que
importam para não travar o deploy:

- O repositório é **privado**, plano Hobby na Vercel. Commits cujo autor
  (nome/e-mail) não pertence à conta com acesso ao projeto ficam presos como
  **"Blocked"**, sem aviso visível no site.
- Sempre confira, depois de um push, se o novo deploy realmente chegou a
  Production (aba *Deployments* na Vercel) — um `git push` bem-sucedido não
  garante que o site foi atualizado.

## Sobre a Aro Dev

Planos atuais: Landing Page, Site Institucional, E-commerce e
Manutenção/Suporte mensal (Growth Digital). Preços e prazos ficam na seção
de Serviços (`components/sections/servicos.tsx`) e no FAQ
(`components/sections/faq.tsx`) — são a fonte da verdade, não este README.
