"use client";

import Link from "next/link";

export default function GroceriesPage() {
  return (
    <main className="min-h-screen bg-[#f7f7fb] p-4 pb-40">

      <h1 className="text-3xl font-bold mb-6">
        Groceries
      </h1>

      <div className="space-y-4">

        <input
          placeholder="Items Needed"
          className="w-full p-4 rounded-2xl border"
        />

        <input
          placeholder="Delivery Location"
          className="w-full p-4 rounded-2xl border"
        />

      </div>

      <Link href="/results">
        <button className="fixed bottom-24 left-4 right-4 h-14 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold">
          Compare Grocery Prices
        </button>
      </Link>

    </main>
  );
}