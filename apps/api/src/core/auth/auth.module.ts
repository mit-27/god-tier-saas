import { Global, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/auth.guard';


@Global()
@Module({
    imports: [],
    controllers: [AuthController],
    providers: [AuthService, AuthGuard],
    exports: [AuthGuard, AuthService]
})
export class AuthModule { }

