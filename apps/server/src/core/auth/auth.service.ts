import { Inject, Injectable } from '@nestjs/common';
import { OAuth2Client, TokenPayload } from 'google-auth-library';
// import { User, user } from '@/drizzle/schema'
import { DRIZZLE } from '@/core/drizzle/drizzle.module';
import { DrizzleDB, user, NewUser } from '@template/shared';
import { eq } from 'drizzle-orm';

@Injectable()
export class AuthService {

    constructor(@Inject(DRIZZLE) private readonly db: DrizzleDB) { }



    async verifyToken(bearToken: string) {

        try {
            const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
            const ticket = await client.verifyIdToken({
                idToken: bearToken,
                audience: process.env.GOOGLE_CLIENT_ID,
            });
            const payload = ticket.getPayload()!;
            const currentTimestamp = Math.floor(new Date().getTime() / 1000);
            if (payload.exp < currentTimestamp) {
                throw new Error();
            }

            if (payload.aud !== process.env.GOOGLE_CLIENT_ID) {
                throw new Error();
            }

            return {
                id: payload.sub,
                email: payload.email!,
                name: payload.name,
                image: payload.picture,
                emailverified: payload.email_verified,
            }


        }
        catch (error) {
            throw new Error('Invalid token');
        }


    }

    async login(loggedInUser: NewUser) {

        // check if user exists
        try {
            const userExists = await this.db.select().from(user).where(eq(user.id, loggedInUser.id));
            if (userExists.length > 0) {
                console.log('User already exists');
                return userExists[0];
            }

            // insert user
            const newUser = await this.db.insert(user).values(loggedInUser).returning();
            return newUser[0];
        } catch (error) {
            console.log('Error:', error);
            throw new Error('Error logging in user');
        }

    }
}
