// import { drizzle } from 'drizzle-orm/postgres-js';
// import postgres from 'postgres';
import { drizzle, NodePgDatabase } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as dotenv from 'dotenv';
import * as schema from './schema';

dotenv.config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

export const db = drizzle(pool, { schema }) as NodePgDatabase<typeof schema>;




