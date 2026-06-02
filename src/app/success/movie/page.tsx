"use client";

import { useSearchParams } from "next/navigation";

export default function MovieSuccessPage() {

  const searchParams = useSearchParams();

  const query =
    searchParams.get("query") || "Movie";

  return (
    <main className="min-h-screen bg-[#f7f7fb] flex flex-col items-center justify-center p-6">

      <div className="bg-white rounded-3xl p-8 shadow-lg text-center w-full max-w-md">

        <div className="text-6xl mb-4">
          🎉
        </div>

        <h1 className="text-3xl font-bold mb-3">
          Booking Successful
        </h1>

        <p className="text-gray-500 mb-6">
          {query} booked successfully.
        </p>

        <div className="bg-green-100 text-green-700 rounded-2xl p-4">
          You saved ₹120 using Slice AI
        </div>

      </div>

    </main>
  );
}