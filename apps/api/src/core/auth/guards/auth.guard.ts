import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {

        const request = context.switchToHttp().getRequest();
        const authorization = request.headers.authorization;

        if (!authorization) {
            throw new UnauthorizedException();
        }

        const [scheme, token] = authorization.split(' ');

        if (scheme !== 'Bearer') {
            throw new UnauthorizedException();
        }

        if (token !== "Mit") {
            throw new UnauthorizedException();
        }

        return true;
    }
}