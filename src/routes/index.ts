import type { FastifyPluginAsync } from 'fastify';
import healthRoutes from './health.js';
import authRoutes from './auth.js';

const routes: FastifyPluginAsync = async (app) => {
  await app.register(healthRoutes, { prefix: '/' });
  await app.register(authRoutes, { prefix: '/api' });
};

export default routes;
