import { DarkThemeToggle } from "flowbite-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-full w-full bg-white px-4 py-24 dark:bg-gray-900">
      <h1 className="text-4xl font-bold dark:text-white">Welcome to Snappy</h1>
    </main>
  );
}
