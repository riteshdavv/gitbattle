import { CredentialsProvider } from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import { signIn } from "next-auth/react";
import { pages } from "next/dist/build/templates/app-page";

export const NEXT_AUTH = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID || "",
            clientSecret: process.env.GITHUB_SECRET || "",
            authorization: { params: { scope: "read:user user:email" } }
        })
    ],
    callbacks: {
        async jwt({ token, account }: any) {
            if (account) {
              token.accessToken = account.access_token; // Store access token
              token.githubUsername = account.providerAccountId; // Store GitHub username
            }
            return token;
        },
        async session({ session, token }: any) {
            session.accessToken = token.accessToken; // Add access token to session
            session.githubUsername = token.githubUsername; // Add username to session
            return session;
        },
        pages: {
            signIn: "/signin", // Sign-in page
            signOut: "/signout", // Sign-out page
            error: "/error", // Error page
            verifyRequest: "/verify-request", // Verification request page
            newUser: "/user", // New users are redirected here by default
        },
        secret: process.env.NEXTAUTH_SECRET
    }
}