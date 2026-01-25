# WebApp Template

A pre-configured template using Next.js, HeroUI (Tailwind CSS), NextAuth v5, and Firebase.

## Features

- **Framework**: Next.js 15 (App Router)
- **UI Library**: [HeroUI](https://heroui.com) (formerly NextUI) + Tailwind CSS
- **Authentication**: [NextAuth.js v5](https://authjs.dev) with Firebase Adapter
- **Backend/DB**: Firebase (Firestore)
- **Language**: TypeScript

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Setup
Copy `.env.example` to `.env.local` and fill in your values.
```bash
cp .env.example .env.local
```

**Firebase Configuration:**
1. Create a project in the [Firebase Console](https://console.firebase.google.com/).
2. **Client SDK**: Go to Project Settings > General > Your apps > Web, and copy the config values to `NEXT_PUBLIC_FIREBASE_*` variables.
3. **Admin SDK**: Go to Project Settings > Service accounts > Generate new private key.
   - Open the downloaded JSON.
   - Copy `project_id`, `client_email`, and `private_key` to `FIREBASE_*` variables.
   - *Note*: Ensure the private key is properly quoted.

**NextAuth Secret:**
Generate a secure secret:
```bash
npx auth secret
```
Copy the output to `AUTH_SECRET` in `.env.local`.

### 3. Run Development Server
```bash
npm run dev
```

## Folder Structure

All code is located in the `src` directory:

- `src/app`: App Router pages and API routes.
- `src/components`: UI components.
  - `providers.tsx`: Client-side provider wrappers (HeroUI, etc.).
- `src/lib`: Core library configurations.
  - `auth.ts`: NextAuth v5 configuration.
  - `firebase.ts`: Firebase Client SDK initialization.
  - `admin.ts`: Firebase Admin SDK initialization.
- `src/hooks`: Custom React hooks.
- `src/types`: Global type definitions.
