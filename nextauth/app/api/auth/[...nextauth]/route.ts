import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

console.log(process.env.NEXTAUTH_SECRET)

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "email",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "ayush@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const username = credentials?.username;
        const password = credentials?.password;

        console.log(username)
        console.log(password)

        // db request to check if this username and password is correct or not

        const user = {
          name: "Ayush",
          id: "2",
          username: "ayushkumar@gmail.com",
        };
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET
});

export { handler as GET, handler as POST };
