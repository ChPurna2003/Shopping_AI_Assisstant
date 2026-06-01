"use client";

import Link from "next/link";

export default function FoodPage() {
  return (
    <main className="min-h-screen bg-[#f7f7fb] p-4 pb-40">

      <h1 className="text-3xl font-bold mb-6">
        Food Delivery
      </h1>

      <div className="space-y-4">

        <input
          placeholder="Food Item"
          className="w-full p-4 rounded-2xl border"
        />

        <input
          placeholder="Location"
          className="w-full p-4 rounded-2xl border"
        />

        <select className="w-full p-4 rounded-2xl border">
          <option>Veg / Non-Veg</option>
          <option>Veg</option>
          <option>Non-Veg</option>
        </select>

      </div>

      <Link href="/results">
        <button className="fixed bottom-24 left-4 right-4 h-14 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold">
          Compare Food Prices
        </button>
      </Link>

    </main>
  );
}