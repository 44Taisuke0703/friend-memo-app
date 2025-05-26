import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../prisma";
export const nextAuthOptions: NextAuthOptions = {
    debug: false,
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "Email" },
                password: { label: "Password", type: "password", placeholder: "Password" }
            },
            async authorize(credentials, req) {
                const email = credentials?.email?.toString();
                const password = credentials?.password?.toString();

                if (!email || !password) {
                    throw new Error('Email and password are required');
                }

                // Here you would typically validate the credentials against your database
                // For example:
                // const user = await findUserByEmailAndPassword(email, password);
                // if (!user) {
                //     throw new Error('Invalid email or password');
                // }

                // Return a user object with at least id and email
                return { id: email, email }; // id must be a string
            }
        })],
    adapter: PrismaAdapter(prisma),
    callbacks: {
        session: async ({ session, user }) => {
            // Add user id to session
            return {
                ...session,
                user: {
                    ...session.user,
                    id: user.id, // Ensure user.id is a string
                },
            }
        }
    }
}