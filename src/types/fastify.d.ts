import type { FastifyReply, FastifyRequest } from 'fastify';
import type { Knex } from 'knex';

declare module 'fastify' {
  interface FastifyInstance {
    config: {
      PORT: number;
      HOST: string;
      JWT_SECRET: string;
      DB_CLIENT: 'mysql2' | 'pg';
      DB_HOST: string;
      DB_PORT: number;
      DB_USER: string;
      DB_PASSWORD: string;
      DB_NAME: string;
      AUTH_DEMO_EMAIL: string;
      AUTH_DEMO_PASSWORD: string;
    };
    db: Knex;
    auth: (request: FastifyRequest, reply: FastifyReply) => Promise<void>;
  }
}
