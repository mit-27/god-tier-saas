import { InferSelectModel, InferInsertModel } from 'drizzle-orm';
import { post, user } from './schema';
import * as schema from './schema';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';

// import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';

export type DrizzleDB = NodePgDatabase<typeof schema>;

export type User = InferSelectModel<typeof user>;
export type NewUser = InferInsertModel<typeof user>;

export type Post = InferSelectModel<typeof post>;
export type NewPost = InferInsertModel<typeof post>;