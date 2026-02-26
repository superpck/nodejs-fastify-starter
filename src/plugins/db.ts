import knex from 'knex';
import fp from 'fastify-plugin';
import type { FastifyPluginAsync } from 'fastify';

const dbPlugin: FastifyPluginAsync = async (app) => {
  const db = knex({
    client: app.config.DB_CLIENT,
    connection: {
      host: app.config.DB_HOST,
      port: app.config.DB_PORT,
      user: app.config.DB_USER,
      password: app.config.DB_PASSWORD,
      database: app.config.DB_NAME,
    },
    pool: { min: 0, max: 10 },
  });

  app.decorate('db', db);

  app.addHook('onClose', async () => {
    await db.destroy();
  });
};

export default fp(dbPlugin, { name: 'db-plugin' });
