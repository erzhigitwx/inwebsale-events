import type { AuthOptions } from "next-auth";
import Google from "next-auth/providers/google";

export const authConfig: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    Google({ clientId: process.env.CLIENT_ID!, clientSecret: process.env.CLIENT_SECURE! })
  ],
  callbacks: {
    session({ session }) {
      return session;
    },
  },
};