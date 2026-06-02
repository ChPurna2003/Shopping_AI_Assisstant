"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function FoodSuccessPage() {

  const searchParams = useSearchParams();

  const query =
    searchParams.get("query") || "Food";

  return (
    <main className="min-h-screen bg-[#f7f7fb] flex items-center justify-center p-6">

      <div className="bg-white rounded-3xl p-8 shadow-lg text-center w-full max-w-md">

        <div className="text-6xl mb-4">
          🍔
        </div>

        <h1 className="text-3xl font-bold mb-3">
          Order Successful
        </h1>

        <p className="text-gray-500 mb-6">
          {query} delivered successfully.
        </p>

        <div className="bg-green-100 text-green-700 rounded-2xl p-4 mb-6">
          You saved ₹80 using Slice AI
        </div>

        <Link href="/">

          <button className="w-full h-14 bg-orange-500 text-white rounded-2xl font-semibold">
            Back to Home
          </button>

        </Link>

      </div>

    </main>
  );
}