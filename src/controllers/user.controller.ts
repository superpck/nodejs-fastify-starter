import type { FastifyReply, FastifyRequest } from 'fastify';

type JwtUser = {
  sub?: string;
};

export async function getUsersController(request: FastifyRequest) {
  const users = await request.server.db('users')
    .select('id', 'email', 'name', 'created_at', 'updated_at')
    .orderBy('id', 'asc');

  return {
    items: users,
  };
}

export async function getMyProfileController(request: FastifyRequest, reply: FastifyReply) {
  const { sub } = request.user as JwtUser;

  if (!sub) {
    return reply.status(401).send({ message: 'Unauthorized' });
  }

  const user = await request.server.db('users')
    .select('id', 'email', 'name', 'created_at', 'updated_at')
    .where({ email: sub })
    .first();

  if (!user) {
    return reply.status(404).send({ message: 'User not found' });
  }

  return {
    user,
  };
}
