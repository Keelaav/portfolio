import "server-only";
import * as admin from "firebase-admin";

if (!admin.apps.length) {
    if (process.env.FIREBASE_PRIVATE_KEY) {
        admin.initializeApp({
            credential: admin.credential.cert({
                projectId: process.env.FIREBASE_PROJECT_ID,
                clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
                privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
            }),
        });
    } else {
        // Fallback/Mock initialization to prevent build errors when envs are missing
        admin.initializeApp({
            projectId: "demo-project-id",
        });
    }
}

export const adminAuth = admin.auth();
export const adminDb = admin.firestore();
