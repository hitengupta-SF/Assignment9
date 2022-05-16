import pkg from 'pg';
const { Pool } = pkg;

export const pool = new Pool({
  user: 'hitengupta',
  host: 'localhost',
  database: 'hitengupta',
  password: 'Source@123',
  port: 3000,
});
