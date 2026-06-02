"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function ProcessingPage() {

  const router = useRouter();

  const searchParams = useSearchParams();

  const type =
    searchParams.get("type") || "movie";

  useEffect(() => {

    const timer = setTimeout(() => {

      router.push(`/success/${type}`);

    }, 2500);

    return () => clearTimeout(timer);

  }, [router, type]);

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">

      <div className="animate-spin rounded-full h-20 w-20 border-b-4 border-white mb-8"></div>

      <h1 className="text-3xl font-bold">
        Processing Payment...
      </h1>

    </main>
  );
}