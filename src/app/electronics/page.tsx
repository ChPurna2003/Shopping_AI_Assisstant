"use client";

import Link from "next/link";

export default function ElectronicsPage() {
  return (
    <main className="min-h-screen bg-[#f7f7fb] p-4 pb-40">

      <h1 className="text-3xl font-bold mb-6">
        Electronics
      </h1>

      <div className="space-y-4">

        <input
          placeholder="Product Name"
          className="w-full p-4 rounded-2xl border"
        />

        <select className="w-full p-4 rounded-2xl border">
          <option>Select RAM</option>
          <option>8 GB</option>
          <option>12 GB</option>
          <option>16 GB</option>
        </select>

        <select className="w-full p-4 rounded-2xl border">
          <option>Select Storage</option>
          <option>128 GB</option>
          <option>256 GB</option>
          <option>512 GB</option>
        </select>

      </div>

      <Link href="/results">
        <button className="fixed bottom-24 left-4 right-4 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold">
          Compare Electronics Prices
        </button>
      </Link>

    </main>
  );
}