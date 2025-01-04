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
    
}