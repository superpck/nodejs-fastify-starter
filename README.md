# Node Fastify TypeScript Starter (JWT + Knex + MySQL/PostgreSQL)

Starter project สำหรับ Node.js + Fastify + JWT + Knex + TypeScript และรองรับทั้ง MySQL/PostgreSQL

## 1) Setup

```bash
cp .env.example .env
npm install
```

## 2) Run

```bash
npm run dev
```

## 3) Migration / Seed

```bash
npm run migrate
npm run seed
```

## 4) API

- `GET /api/health`
- `POST /api/auth/login`
- `GET /api/auth/me` (ต้องส่ง `Authorization: Bearer <token>`)

## ตัวอย่าง Login

```json
{
  "email": "demo@example.com",
  "password": "123456"
}
```

> ค่า user/password demo ปรับได้ในไฟล์ `.env`
