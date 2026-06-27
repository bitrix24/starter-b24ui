# Nuxt Starter Template

[![Bitrix24 UI](https://img.shields.io/badge/Made%20with-Bitrix24%20UI-2fc6f6?logo=bitrix24&labelColor=020420)](https://bitrix24.github.io/b24ui/)

Use this template to get started with [Bitrix24 UI](https://bitrix24.github.io/b24ui/) quickly.

- [Live demo](https://bitrix24.github.io/starter-b24ui/)
- [@bitrix24/b24ui](https://bitrix24.github.io/b24ui/docs/getting-started/installation/nuxt/)
- [@bitrix24/b24icons](https://bitrix24.github.io/b24icons/)
- [@bitrix24/b24jssdk](https://bitrix24.github.io/b24jssdk/)

> The starter template for Vue is on https://github.com/bitrix24/starter-b24ui-vue.

## Quick Start

```bash [Terminal]
git clone https://github.com/bitrix24/starter-b24ui.git <project-name>
cd <project-name>
pnpm install
pnpm run dev
```

## Setup

Make sure to install the dependencies:

```bash
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
pnpm dev
```

## Code Quality

Lint the codebase:

```bash
pnpm lint
```

Run type checking:

```bash
pnpm typecheck
```

Run the tests (powered by [Vitest](https://vitest.dev/) and [`@nuxt/test-utils`](https://nuxt.com/docs/getting-started/testing)):

```bash
pnpm test
```

## Environment Variables

Copy `.env.example` to `.env` and adjust the values as needed:

```bash
cp .env.example .env
```

| Variable | Description |
| --- | --- |
| `NUXT_ALLOWED_HOSTS` | Comma-separated list of extra hosts allowed by the Vite dev server. Useful when exposing the dev server through tunnels like ngrok. |

## Production

Build the application for production:

```bash
pnpm build
```

Locally preview production build:

```bash
pnpm preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
