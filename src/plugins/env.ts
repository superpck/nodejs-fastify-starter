import fastifyEnv from '@fastify/env';
import fp from 'fastify-plugin';
import type { FastifyPluginAsync } from 'fastify';

const schema = {
  type: 'object',
  required: [
    'PORT',
    'HOST',
    'JWT_SECRET',
    'DB_CLIENT',
    'DB_HOST',
    'DB_PORT',
    'DB_USER',
    'DB_NAME',
    'AUTH_DEMO_EMAIL',
    'AUTH_DEMO_PASSWORD',
  ],
  properties: {
    PORT: { type: 'number', default: 3000 },
    HOST: { type: 'string', default: '0.0.0.0' },
    JWT_SECRET: { type: 'string' },
    DB_CLIENT: { type: 'string', enum: ['mysql2', 'pg'], default: 'mysql2' },
    DB_HOST: { type: 'string' },
    DB_PORT: { type: 'number' },
    DB_USER: { type: 'string' },
    DB_PASSWORD: { type: 'string', default: '' },
    DB_NAME: { type: 'string' },
    AUTH_DEMO_EMAIL: { type: 'string' },
    AUTH_DEMO_PASSWORD: { type: 'string' },
  },
} as const;

const options = {
  confKey: 'config',
  schema,
  dotenv: true,
};

const envPlugin: FastifyPluginAsync = async (app) => {
  await app.register(fastifyEnv, options);
};

export default fp(envPlugin, { name: 'env-plugin' });
