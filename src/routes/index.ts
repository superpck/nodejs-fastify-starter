import type { FastifyPluginAsync } from 'fastify';
import healthRoutes from './health.js';
import authRoutes from './auth.js';
import userRoutes from './user.js';

const routes: FastifyPluginAsync = async (app) => {
  await app.register(healthRoutes, { prefix: '/' });
  await app.register(authRoutes, { prefix: '/api' });

  await app.register(async (protectedApp) => {
    protectedApp.addHook('preHandler', protectedApp.auth);
    await protectedApp.register(userRoutes, { prefix: '/api' });
  });
};

export default routes;
