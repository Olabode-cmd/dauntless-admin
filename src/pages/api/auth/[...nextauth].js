import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { Server } from "../lib/service";

export default NextAuth({
  pages: {
    error: "/auth/login",
    signIn: "/auth/login",
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      authorize: async ({ email, password }) => {
        const result = await Server.post(
          "/login",
          {
            email,
            password,
          },
          {
            headers: {
              accept: "*/*",
              "Content-Type": "application/json",
            },
          }
        );
        const user = result.data.user;
        const token = result.data.message.token;
        const tokenExpires = result.data.message.expires_at;
        // console.log(user)
        if (result.status === 200) {
          return {
            user,
            token,
            tokenExpires,
          };
        }
        // console.log(result)
        return null;
      },
    })
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        // console.log(user);
        token = {
          accessToken: user.token,
          expiresIn: user.tokenExpires,
          user: {
            id: user.user.id,
            name: user.user.name,
            email: user.user.email,
            role: user.user.role_id,
          }
        };
      }
      // console.log(token)
      return {...token};
    },
    session: async ({ session, token }) => {
      const result = await Server.get("/", {
        headers: {
          accept: "*/*",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.accessToken}`,
        },
      });
      if (token || result.status === 200) {
       session.user = token.user;
       session.accessToken = token.accessToken;
       return session
     }
      return null
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  jwt: {
    secret: 'test',
    expiresIn: "1d",
    encryption: true
  }
});


// export default NextAuth({