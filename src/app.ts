import Fastify from 'fastify';
import envPlugin from './plugins/env.js';
import jwtPlugin from './plugins/jwt.js';
import dbPlugin from './plugins/db.js';
import routes from './routes/index.js';

export async function buildApp() {
  const app = Fastify({ logger: true });

  await app.register(envPlugin);
  await app.register(jwtPlugin);
  await app.register(dbPlugin);
  await app.register(routes);

  app.setErrorHandler((error: any, request, reply) => {
    request.log.error(error);

    if (error.validation) {
      return reply.status(400).send({
        message: 'Validation error',
        details: error.validation,
      });
    }

    const statusCode = error.statusCode || 500;
    return reply.status(statusCode).send({
      message: error.message || 'Internal Server Error',
    });
  });

  return app;
}
