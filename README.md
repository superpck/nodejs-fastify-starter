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

## 3) Migration / Seed

```bash
npm run migrate
npm run rollback
npm run seed
```

## 4) API

- `GET /`
- `GET /health`
- `POST /api/auth/login`
- `GET /api/auth/me` (requires `Authorization: Bearer <token>`)

## Login Example

```json
{
  "email": "demo@example.com",
  "password": "123456"
}
```

> You can change the demo user/password in `.env`.

## Credit

- Built with support from **GitHub Copilot**
