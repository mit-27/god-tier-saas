import { Module, Global, Post } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { DrizzleModule } from './drizzle/drizzle.module';
import { PostHogService } from './posthog/posthog.service';

@Global()
@Module({
    imports: [
        AuthModule,
        DrizzleModule,
    ],
    controllers: [],
    providers: [AuthService, PostHogService],
    exports: [DrizzleModule, AuthModule, AuthService, PostHogService],
})
export class CoreSharedModule { }