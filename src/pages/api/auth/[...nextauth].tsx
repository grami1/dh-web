import NextAuth, { NextAuthOptions, Session } from "next-auth";
import CognitoProvider from "next-auth/providers/cognito";

export const authOptions: NextAuthOptions = {
  providers: [
    CognitoProvider({
      clientId: process.env.COGNITO_CLIENT_ID,
      clientSecret: process.env.COGNITO_CLIENT_SECRET,
      issuer: process.env.COGNITO_ISSUER,
    }),
  ],
  callbacks: {
    jwt: async function ({ token, account, user }) {
      if (account && user) {
        return {
          idToken: account?.id_token,
          user,
        };
      }
      return token;
      // TODO handle token expiration
    },
    session: async function ({ session, token }) {
      if (!session.user || !token.idToken) {
        console.error("User or idToken not found");
        return session;
      }
      session.user = token.user as Session["user"];
      session.idToken = token.idToken as string;
      return session;
    },
  },
};

export default NextAuth(authOptions);
