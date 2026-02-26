import type { FastifyPluginAsync } from 'fastify';
import {
  getMyProfileController,
  getUsersController,
} from '../controllers/user.controller.js';

const userRoutes: FastifyPluginAsync = async (app) => {
  app.get('/users', getUsersController);

  app.get('/users/me', getMyProfileController);
};

export default userRoutes;
