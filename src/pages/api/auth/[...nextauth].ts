import NextAuth, { type NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github"

export const authOptions: NextAuthOptions = {
  // Include user.id on session
  callbacks: {
    async session({ session, token, user }) {
      return session;
    },

    async redirect() {
      return Promise.resolve('/');
    },
  },

  // Configure one or more authentication providers
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    })
  ],
  secret: process.env.NEXTAUTH_SECRET
};

export default NextAuth(authOptions);
