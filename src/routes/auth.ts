import type { FastifyPluginAsync } from 'fastify';

type LoginBody = {
  email: string;
  password: string;
};

const authRoutes: FastifyPluginAsync = async (app) => {
  app.post<{ Body: LoginBody }>('/auth/login', {
    schema: {
      body: {
        type: 'object',
        required: ['email', 'password'],
        properties: {
          email: { type: 'string', format: 'email' },
          password: { type: 'string', minLength: 1 },
        },
      },
    },
  }, async (request, reply) => {
    const { email, password } = request.body;

    const isValidUser =
      email === app.config.AUTH_DEMO_EMAIL &&
      password === app.config.AUTH_DEMO_PASSWORD;

    if (!isValidUser) {
      return reply.status(401).send({ message: 'Invalid credentials' });
    }

    const token = await reply.jwtSign({
      sub: email,
      role: 'user',
    });

    return {
      accessToken: token,
      tokenType: 'Bearer',
    };
  });

  app.get('/auth/me', {
    preHandler: [app.auth],
  }, async (request) => {
    return {
      user: request.user,
    };
  });
};

export default authRoutes;
