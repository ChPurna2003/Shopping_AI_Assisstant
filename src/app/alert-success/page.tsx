"use client";

import Link from "next/link";

export default function AlertSuccessPage() {

  return (

    <main className="min-h-screen bg-[#f7f7fb] flex items-center justify-center p-6">

      <div className="bg-white rounded-3xl p-8 shadow-lg text-center w-full max-w-md">

        {/* ICON */}
        <div className="text-7xl mb-6">
          🔔
        </div>

        {/* TITLE */}
        <h1 className="text-3xl font-bold mb-4">
          Price Alert Set
        </h1>

        {/* MESSAGE */}
        <p className="text-gray-500 text-lg mb-8">
          You'll get notified instantly
          when the price drops.
        </p>

        {/* SUCCESS BOX */}
        <div className="bg-purple-100 text-purple-700 rounded-2xl p-4 mb-8">

          Slice AI is tracking this product for you ✨

        </div>

        {/* BUTTON */}
        <Link href="/">

          <button className="w-full h-14 bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-2xl font-semibold">

            Back to Home

          </button>

        </Link>

      </div>

    </main>
  );
}