import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { author_by_github_id } from "./sanity/lib/queries";
import { writeClient } from "./sanity/lib/write-client";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
  callbacks: {
    async signIn({ user : { name, email, image }, profile : { id, login, bio} }) {
      const existingUser = await client.fetch(author_by_github_id, { id : id} )

      if (!existingUser) {
        await writeClient.create({
          _type: "author",
          id : id,
          name: name,
          username: login,
          email: email,
          image : image,
          bio : bio || ``
        })
      }

      return true;

    },

    async jwt({ token, account, profile }) {
      if (account && profile) {
        const user = await client.fetch(author_by_github_id, {id : profile?.id });

        token.id = user._id;
      }

      return token;
    },

    async session({session, token}) {
      Object.assign(session, {id : token.id });
      return session;
    }
  }
});
