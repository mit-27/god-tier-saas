import { Module, Global } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { DrizzleModule } from './drizzle/drizzle.module';

@Global()
@Module({
    imports: [
        AuthModule,
        DrizzleModule
    ],
    controllers: [],
    providers: [AuthService],
    exports: [DrizzleModule, AuthModule, AuthService],
})
export class CoreSharedModule { }