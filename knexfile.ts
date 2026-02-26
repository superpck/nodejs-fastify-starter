import 'dotenv/config';
import type { Knex } from 'knex';

const baseConfig = {
  migrations: {
    directory: './src/database/migrations',
    tableName: 'knex_migrations',
  },
  seeds: {
    directory: './src/database/seeds',
  },
};

const mysqlConfig: Knex.Config = {
  client: 'mysql2',
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || 3306),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
};

const pgConfig: Knex.Config = {
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || 5432),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
};

const client = process.env.DB_CLIENT || 'mysql2';

const config: Record<string, Knex.Config> = {
  development: {
    ...baseConfig,
    ...(client === 'pg' ? pgConfig : mysqlConfig),
  },
};

export default config;
