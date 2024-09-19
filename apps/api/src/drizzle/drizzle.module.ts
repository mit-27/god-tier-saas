import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Pool } from 'pg';
import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres';
export const DRIZZLE = Symbol('drizzle-connection');
import * as schema from './schema';

@Global()
@Module({
    providers: [
        {
            provide: DRIZZLE,
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => {
                const databasURL = configService.get<string>('DATABASE_URL');
                const pool = new Pool({
                    connectionString: databasURL,
                });
                return drizzle(pool, { schema }) as NodePgDatabase<typeof schema>;
            },
        },
    ],
    exports: [DRIZZLE],
})
export class DrizzleModule { }