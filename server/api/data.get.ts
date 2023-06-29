import { createPool } from '@vercel/postgres';

const postgresUrl = useRuntimeConfig().POSTGRES_URL;

const pool = createPool({
  connectionString: postgresUrl,
});

export default defineEventHandler(async (event) => {
  const users = await pool.sql`SELECT * FROM users;`;
  return {
    users: users.rows,
  };
});
