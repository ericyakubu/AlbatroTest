import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface Session {
    // user :{
    // is just a type of what the backend returns, like name: string, accessToken: string, email:string and so on
    // }
    user: {
      name: string;
    };
  }
}
