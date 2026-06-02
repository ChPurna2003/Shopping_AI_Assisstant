"use client";

export const dynamic = "force-dynamic";

import Link from "next/link";

import {
  Suspense,
} from "react";

import {
  useSearchParams,
} from "next/navigation";

function ElectronicsSuccessContent() {

  const searchParams = useSearchParams();

  const query =
    searchParams.get("query") || "Electronics";

  return (
    <main className="min-h-screen bg-[#f7f7fb] flex items-center justify-center p-6">

      <div className="bg-white rounded-3xl p-8 shadow-lg text-center w-full max-w-md">

        <div className="text-6xl mb-4">
          📱
        </div>

        <h1 className="text-3xl font-bold mb-3">
          Purchase Successful
        </h1>

        <p className="text-gray-500 mb-6">
          {query} purchased successfully.
        </p>

        <div className="bg-green-100 text-green-700 rounded-2xl p-4 mb-6">
          You saved ₹4,000 using Slice AI
        </div>

        <Link href="/">

          <button className="w-full h-14 bg-blue-500 text-white rounded-2xl font-semibold">
            Back to Home
          </button>

        </Link>

      </div>

    </main>
  );
}

export default function ElectronicsSuccessPage() {

  return (

    <Suspense fallback={<div>Loading...</div>}>

      <ElectronicsSuccessContent />

    </Suspense>

  );
}
