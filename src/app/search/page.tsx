"use client";

import { Search, Mic, Clock, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function SearchPage() {

  const [query, setQuery] = useState("");

  const quickSearches = [
    "Movie Tickets",
    "Food Delivery",
    "Groceries",
    "Bus Tickets",
    "Electronics",
    "Hotels",
  ];

  const history = [
    "Avengers Endgame Tickets",
    "Bangalore to Mysore Bus",
    "Chicken Biryani",
    "iPhone 15",
  ];

  return (
    <main className="min-h-screen bg-[#f7f7fb] p-4 pb-28">

      {/* Header */}
      <div className="mb-8">

        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="text-purple-600 w-5 h-5" />

          <p className="text-purple-600 font-medium">
            Best Price AI
          </p>
        </div>

        <h1 className="text-4xl font-bold leading-tight text-gray-900">
          What are you
          <span className="text-purple-600">
            {" "}looking for?
          </span>
        </h1>

        <p className="text-gray-500 mt-3">
          Search across multiple apps and get the best deal instantly.
        </p>

      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-3xl px-4 py-4 flex items-center shadow-sm mb-8 border border-gray-100">

        <Search className="text-gray-400 mr-3" />

        <input
          type="text"
          placeholder="Search for food, movies, groceries..."
          className="flex-1 outline-none bg-transparent text-gray-700"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <Mic className="text-purple-600" />

      </div>

      {/* Popular Searches */}
      <div className="mb-10">

        <h2 className="font-semibold text-lg mb-4">
          Popular Searches
        </h2>

        <div className="flex flex-wrap gap-3">

          {quickSearches.map((item) => (

            <button
              key={item}
              onClick={() => setQuery(item)}
              className="bg-white px-4 py-3 rounded-2xl shadow-sm text-sm hover:bg-purple-50 transition"
            >
              {item}
            </button>

          ))}

        </div>

      </div>

      {/* Search History */}
      <div>

        <div className="flex items-center justify-between mb-5">

          <h2 className="font-semibold text-lg">
            Recent Searches
          </h2>

          <button className="text-sm text-purple-600">
            Clear
          </button>

        </div>

        <div className="space-y-4">

          {history.map((item) => (

            <button
              key={item}
              onClick={() => setQuery(item)}
              className="flex items-center gap-3 w-full bg-white rounded-2xl p-4 shadow-sm hover:bg-purple-50 transition"
            >

              <Clock className="text-gray-400 w-4 h-4" />

              <p className="text-gray-700 text-left">
                {item}
              </p>

            </button>

          ))}

        </div>

      </div>

      {/* Bottom Button */}
      <Link href="/results">

        <button className="fixed bottom-6 left-4 right-4 bg-gradient-to-r from-purple-600 to-violet-500 text-white py-4 rounded-2xl font-semibold shadow-lg text-lg">
          Search Deals
        </button>

      </Link>

    </main>
  );
}