import NextAuth from "next-auth"
import { FirestoreAdapter } from "@auth/firebase-adapter"
import Google from "next-auth/providers/google"
import { adminDb } from "@/lib/admin"
import { authConfig } from "@/auth.config"

export const { handlers, signIn, signOut, auth } = NextAuth({
    ...authConfig,
    providers: [
        Google,
    ],
    adapter: FirestoreAdapter(adminDb),
    session: { strategy: "jwt" },
})
