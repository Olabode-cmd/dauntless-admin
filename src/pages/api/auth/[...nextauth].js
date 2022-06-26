import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { Server } from "../lib/service";




/**
 * Takes a token, and returns a new token with updated
 * `accessToken` and `accessTokenExpires`. If an error occurs,
 * returns the old token and an error property
 */
 async function refreshAccessToken(token) {
  //  console.log(token)
  try {
    const response = await Server.get('/', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${token?.accessToken}`
      },
    })
    if (response.status !== 200) {
      throw Error
    }

   return {
      ...token,
    }
  } 
  catch (error){
    return {
      ...token,
      error: 'RefreshAccessTokenError'
    }
  }
}


export default NextAuth({
  pages: {
    error: "/auth/login",
    signin: "/auth/login",
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
        
        if (result.status === 200) {
          return {
            user,
            token,
            tokenExpires,
          };
        }
        return result;
      },
    })
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      console.log(user)
      if (user) {
        const expire = new Date(user.tokenExpires)
        const expireIn = Date.now() + expire * 1000
        token = {
          accessToken: user.token,
          expiresIn : expireIn,
          user: {
            id: user.user.id,
            name: user.user.name,
            email: user.user.email,
            role: user.user.role_id,
          }
        };
      }

      
      // Return previous token if the access token has not expired yet
      if (Date.now() < token.expiresIn) {
        return refreshAccessToken(token)
      }
     
      return token
    },
    session: async ({ session, token }) => {
      session.user = token.user
      session.accessToken = token.accessToken
      session.error = token.error
      // console.log("i the session works", session)
      return session
    },
  }
});


