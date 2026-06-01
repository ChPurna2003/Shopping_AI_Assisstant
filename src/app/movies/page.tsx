"use client";

import Link from "next/link";

export default function MoviesPage() {
  return (
    <main className="min-h-screen bg-[#f7f7fb] p-4 pb-40">

      <h1 className="text-3xl font-bold mb-6">
        Movie Tickets
      </h1>

      <div className="space-y-4">

        <input
          placeholder="Movie Name"
          className="w-full p-4 rounded-2xl border"
        />

        <input
          placeholder="City"
          className="w-full p-4 rounded-2xl border"
        />

        <input
          type="date"
          className="w-full p-4 rounded-2xl border"
        />

        <select className="w-full p-4 rounded-2xl border">
          <option>Select Showtime</option>
          <option>10:00 AM</option>
          <option>1:00 PM</option>
          <option>4:00 PM</option>
          <option>9:00 PM</option>
        </select>

      </div>

      <Link href="/results">
        <button className="fixed bottom-24 left-4 right-4 h-14 rounded-2xl bg-gradient-to-r from-purple-600 to-violet-500 text-white font-semibold">
          Compare Prices
        </button>
      </Link>

    </main>
  );
}