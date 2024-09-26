import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { cookies } from "next/headers";
import axios from "axios";


export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Google],
    callbacks: {
        async jwt({ token, account }) {
            if (account?.access_token) {
                token.accessToken = account.id_token
            }
            return token
        },
        async session({ session, token }) {
            return {
                ...session,
                accessToken: token?.accessToken
            }
        },
        async signIn({ account, user, profile }) {
            // try {
            const token = account?.id_token;

            if (!token) {
                console.error('No access token available');
                return false;
            }

            cookies().set("access_token", token);

            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/login`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (response.status !== 201) {
                console.error('Failed to login');
                return false;
            }





            // cookies().set("access_token", token);

            console.log(`Attempting to login at: ${process.env.NEXT_PUBLIC_SERVER_URL}/auth/login`);
            console.log('User:', user);
            console.log('Profile:', profile);
            console.log('Access Token:', token);

            return true;
        },
    },
    events: {
        signOut: async () => {
            cookies().set("access_token", "");
        }
    }
})