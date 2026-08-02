# 🚀 Payload CMS — headless CMS on Next.js, deploy on Railway

[Payload](https://payloadcms.com) — open-source headless CMS e fullstack framework sobre Next.js 16: backend TypeScript completo + admin panel + APIs GraphQL/REST, com Postgres gerenciado. Deploy no Railway em ~5min, migrations automáticas.

[![Deploy on Railway](https://railway.com/button.svg)](https://railway.com/deploy/payload-cms-postgres)

> **Nota:** publicado no marketplace — [railway.com/deploy/payload-cms-postgres](https://railway.com/deploy/payload-cms-postgres)

## Stack

- **Payload CMS 3.84** — framework headless CMS sobre Next.js
- **Next.js 16.2** — App Router, `output: standalone`
- **Postgres** — banco gerenciado do Railway via `@payloadcms/db-postgres` (Drizzle)
- **React 19** — admin panel incluso

## O que vem configurado

- ✅ **Template oficial `with-postgres`** do repo `payloadcms/payload` (tag estável v3.87) — não é scaffold inventado
- ✅ **Collections prontas** — `Users` (auth) e `Media` (uploads) já configuradas
- ✅ **Migrations automáticas** — `payload migrate` roda no boot (preDeployCommand, idempotente)
- ✅ **Standalone build** — `output: standalone` + `HOSTNAME=0.0.0.0` (padrão Railway comprovado)
- ✅ **Healthcheck** em `/api/health` (rota dedicada — o Payload não expõe healthcheck nativo)
- ✅ **Editor Lexical** + GraphQL API ativados

## Variáveis de ambiente

| Nome | Obrigatória | Descrição |
|------|-------------|-----------|
| `DATABASE_URL` | ✅ Sim | URL de conexão Postgres (preenchida pelo wizard) |
| `PAYLOAD_SECRET` | ✅ Sim | Secret de auth/criptografia (32+ chars, gerado no wizard) |
| `PORT` | ✅ Sim | `3000` (default) — o Railway roteia tráfego por essa env var |

## Como funciona

1. Railpack detecta Next.js 16 e builda com `output: standalone`
2. `preDeployCommand` roda `npm run db:migrate` (Payload/Drizzle — idempotente)
3. O app sobe com `HOSTNAME=0.0.0.0 node .next/standalone/server.js`
4. Admin em `/admin`, API REST em `/api/*`, GraphQL em `/api/graphql`

## Como fazer deploy

1. Clique no botão **Deploy on Railway**
2. O wizard provisiona Postgres + app com as variáveis pré-preenchidas
3. Aguarde o build (~3-5min) — migrations rodam automaticamente
4. Acesse `https://<seu-app>.up.railway.app/admin` e crie o primeiro usuário

### Setup local

```bash
pnpm install
cp .env.example .env   # ajuste DATABASE_URL e PAYLOAD_SECRET
pnpm dev               # → http://localhost:3000/admin
```

## Custo estimado no Railway

| Serviço | Tier | Custo/mês |
|---|---|---|
| Payload (Next.js) | Hobby (crédito $5 inclusos) | $0 com trial |
| Postgres (mini) | Hobby | $0 com trial |
| **Total** | | **$0** até bater limites do trial |

## Estrutura

```
src/
├── app/
│   ├── (frontend)/        ← landing page do template
│   ├── (payload)/         ← admin, API REST, GraphQL
│   └── api/health/        ← healthcheck do Railway
├── collections/           ← Users + Media (edições vão aqui)
├── migrations/            ← migrations do Drizzle (geradas pelo payload)
└── payload.config.ts      ← config principal (db, editor, collections)
```

## Atualizando o Payload

1. Bump das versões `payload`/`@payloadcms/*` no `package.json`
2. `pnpm install && pnpm generate:types && pnpm generate:importmap`
3. Re-deploy — migrations rodam no boot

## Links úteis

- [Documentação](https://payloadcms.com/docs) · [GitHub](https://github.com/payloadcms/payload) · [Discord](https://discord.com/invite/payload)

## Licença

MIT (Payload CMS)
