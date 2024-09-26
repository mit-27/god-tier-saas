import { JWT } from "next-auth/jwt";
import { DefaultSession } from "next-auth";

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
  }
}

declare module "next-auth" {
  interface Session {
    accessToken?: string & DefaultSession["user"];
  }
}