import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { author_by_github_id } from "./sanity/lib/queries";
import { writeClient } from "./sanity/lib/write-client";
import { client } from "./sanity/lib/client";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
  secret: process.env.SECRET,
  callbacks: {
    async signIn({ user, account, profile }) {
      const existingUser = await client.fetch(author_by_github_id, {
        id: profile?.id,
      });

      if (!existingUser) {
        await writeClient.create({
          _type: "author",
          id: profile?.id,
          name: user?.name,
          username: profile?.login,
          email: user?.email,
          image: user?.image,
          bio: profile?.bio || ``,
        });
      }

      return true;
    },

    async jwt({ token, account, profile }) {
      if (account && profile) {
        const user = await client.fetch(author_by_github_id, {
          id: profile?.id,
        });

        token.id = user?._id;
      }

      return token;
    },

    async session({ session, token }) {
      Object.assign(session, { id: token.id });
      return session;
    },
  },
});
