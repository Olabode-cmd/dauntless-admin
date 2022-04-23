import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Server from "../lib/service";

const options = {
  pages: {
    error: "/auth/login",
    signIn: "/auth/login",
  },
  jwt: {
    signingKey: process.env.JWT_SIGNING_PRIVATE_KEY,
  },
  session: {
    jwt: true,
  },
  cookies: {
    sessionToken: {
      name: `next-auth.session-token`,
      options: { httpOnly: false },
    },
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
        // console.log(result);
        const user = result.data.user;
        const token = result.data.message.token;
        const tokenExpires = result.data.message.expires_at;
        return {
          user,
          token,
          tokenExpires,
        };
      },
    })
  ],
  callbacks: {
    signIn: async function signIn(user, account) {
      if (account.id === "credentials" && user.token) {
        const result = await Server.get("/", {
          headers: {
            accept: "*/*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        });
        console.log(result)
        // if (result) {
        //   user.role = result.data.message.role_id;
        // }
        return true;
      }
      return false;
    },
    jwt: async function jwt(token, user) {
      if (user) {
        token = {
          accessToken: user.token,
          user: {
            id: user.id,
            email: user.email,
            role: user.role,
          },
        };
      }
      return token;
    },
    session: async function session (session, token) {
      const result = await Server.get("/", {
        headers: {
          accept: "*/*",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.accessToken}`,
        },
      });
      if (result.status === 200) {
      session.accessToken = token.accessToken;
      session.user = token.user;
      session.role = token.user.role;
      return session;
      }
    },
  },
};
const Auth = (req, res) => NextAuth(req, res, options);

export default Auth;