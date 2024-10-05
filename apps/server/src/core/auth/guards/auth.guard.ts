import { Injectable, CanActivate, ExecutionContext, UnauthorizedException, } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private readonly authService: AuthService) { }


    async canActivate(
        context: ExecutionContext,
    ): Promise<boolean> {

        console.log('AuthGuard is running');

        const request = context.switchToHttp().getRequest();
        const authorization = request.headers.authorization;

        if (!authorization) {
            throw new UnauthorizedException();
        }
        console.log('Authorization:', authorization);

        const [scheme, token] = authorization.split(' ');

        if (scheme !== 'Bearer') {
            throw new UnauthorizedException();
        }

        try {
            const user = await this.authService.verifyToken(token);
            request.user = user;
            // request.user = {
            //     id: "1",
            //     email: "test@test.com",
            //     name: "Test User",
            // }

            return true;

        }
        catch (error) {
            throw new UnauthorizedException();
        }

    }
}