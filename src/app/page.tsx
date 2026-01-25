import { Button, Link } from "@heroui/react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to <span className="text-primary">MyApp</span>
        </h1>

        <p className="mt-3 text-2xl text-default-600">
          Get started by editing{' '}
          <code className="p-3 font-mono text-lg bg-default-100 rounded-xl">
            src/app/page.tsx
          </code>
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full gap-4">
          <Button
            as={Link}
            href="https://nextjs.org/docs"
            color="primary"
            showAnchorIcon
            variant="shadow"
          >
            Documentation
          </Button>
          <Button
            as={Link}
            href="https://heroui.com"
            color="secondary"
            variant="flat"
            showAnchorIcon
          >
            HeroUI
          </Button>
        </div>
      </main>
    </div>
  );
}
