import { Global, Module } from '@nestjs/common';
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