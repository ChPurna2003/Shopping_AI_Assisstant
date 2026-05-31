"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, Mic } from "lucide-react";

export default function SearchPage() {

  const [query, setQuery] = useState("");

  return (
    <main className="min-h-screen bg-[#f7f7fb] p-4">

      <p className="text-sm mb-2">
        Best Price AI
      </p>

      <h1 className="text-5xl font-bold leading-tight mb-8">
        What are you
        <span className="text-blue-500"> looking for?</span>
      </h1>

      <div className="bg-white rounded-2xl p-4 flex items-center gap-3 shadow-sm mb-8 border focus-within:ring-4 focus-within:ring-purple-300">

        <Search className="text-gray-400" />

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for food, movies, electronics..."
          className="flex-1 outline-none bg-transparent"
        />

        <Mic className="text-purple-600" />

      </div>

      <div className="space-y-3">

        <p className="text-sm text-gray-500">
          Try searching:
        </p>

        <div className="flex flex-wrap gap-3">

          <button
            onClick={() => setQuery("iPhone 15")}
            className="bg-white px-4 py-2 rounded-full shadow-sm"
          >
            iPhone 15
          </button>

          <button
            onClick={() => setQuery("Chicken Biryani")}
            className="bg-white px-4 py-2 rounded-full shadow-sm"
          >
            Chicken Biryani
          </button>

          <button
            onClick={() => setQuery("Movie Tickets")}
            className="bg-white px-4 py-2 rounded-full shadow-sm"
          >
            Movie Tickets
          </button>

        </div>

      </div>

      <Link
        href={`/results?query=${encodeURIComponent(query)}`}
      >
        <button className="fixed bottom-6 left-4 right-4 bg-gradient-to-r from-purple-600 to-violet-500 text-white py-4 rounded-2xl font-semibold shadow-lg">
          Search Deals
        </button>
      </Link>

    </main>
  );
}