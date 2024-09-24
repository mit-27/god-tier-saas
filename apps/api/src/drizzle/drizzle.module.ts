import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
// import { Pool } from 'pg';
// import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres';

export const DRIZZLE = Symbol('drizzle-connection');
import { db } from '@template/shared/dist/src/db'

@Global()
@Module({
    providers: [
        {
            provide: DRIZZLE,
            useValue: db
        },
    ],
    exports: [DRIZZLE],
})
export class DrizzleModule { }