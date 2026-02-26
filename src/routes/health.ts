import dayjs from 'dayjs';
import type { FastifyPluginAsync } from 'fastify';

const healthRoutes: FastifyPluginAsync = async (app) => {
  app.get('/', async () => {
    return {
      status: 200,
      date: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    };
  });

  app.get('/health', { preHandler: [app.auth] }, async () => {
    await app.db.raw('select 1 as ok');

    return {
      status: 200,
      dbClient: app.config.DB_CLIENT,
      date: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    };
  });
};

export default healthRoutes;
