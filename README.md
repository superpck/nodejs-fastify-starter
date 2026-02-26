# Node Fastify TypeScript Starter (JWT + Knex + MySQL/PostgreSQL)

Starter project for Node.js + Fastify + JWT + Knex + TypeScript, with support for both MySQL and PostgreSQL.

## Features

- Fastify + TypeScript (ESM)
- JWT Authentication (`@fastify/jwt`)
- Database Query Builder (`knex`)
- Supports both MySQL (`mysql2`) and PostgreSQL (`pg`)
- Environment configuration via `.env`

## 1) Setup

```bash
cp .env.example .env
npm install
```

## 2) Run

```bash
npm run dev
```

To run without watch mode:

```bash
npm run start
```

## 3) API

Public routes:

- `GET /`
- `GET /health`
- `POST /api/auth/login`

Protected routes (require `Authorization: Bearer <token>`):

- `GET /api/auth/me`
- `GET /api/users`
- `GET /api/users/me`

## Login Example

```json
{
  "email": "demo@example.com",
  "password": "123456"
}
```

> You can change the demo user/password in `.env`.

## Notes

- Auth is centralized in route registration scope at `src/routes/index.ts`.
- `user` routes are protected via shared `preHandler` hook.
- Knex migrations/seeds are removed; create and manage your schema manually.
- The API expects a `users` table with at least: `id`, `email`, `name`, `created_at`, `updated_at`.

## Project Docs

- Changelog: `CHANGELOG.md`
- License: `LICENSE`

## Credit

- Built with support from **GitHub Copilot**
