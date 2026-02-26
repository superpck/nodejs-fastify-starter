import fastifyJwt from '@fastify/jwt';
import fp from 'fastify-plugin';
import type { FastifyPluginAsync } from 'fastify';

const jwtPlugin: FastifyPluginAsync = async (app) => {
  await app.register(fastifyJwt, {
    secret: app.config.JWT_SECRET,
  });

  app.decorate('auth', async function auth(request) {
    await request.jwtVerify();
  });
};

export default fp(jwtPlugin, { name: 'jwt-plugin' });
