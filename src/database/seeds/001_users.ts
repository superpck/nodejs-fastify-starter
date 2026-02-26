import type { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('users').del();
  await knex('users').insert([
    {
      email: 'demo@example.com',
      name: 'Demo User',
    },
  ]);
}
