"use client";

import { askGemini } from "../../services/gemini";
import Link from "next/link";
import { useState } from "react";
import { Search, Mic } from "lucide-react";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query) return;

    setLoading(true);

    const result = await askGemini(
      `User wants best shopping advice for: ${query}.
      Give short smart recommendation with best platform and savings.`
    );

    setAiResponse(result);

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-[#f7f7fb] p-4 pb-40">

      {/* Header */}
      <p className="text-sm mb-2 text-gray-500">
        Best Price AI
      </p>

      <h1 className="text-4xl font-bold leading-tight mb-8">
        What are you
        <span className="text-purple-600"> looking for?</span>
      </h1>

      {/* Search Box */}
      <div className="bg-white rounded-2xl p-4 flex items-center gap-3 shadow-sm border mb-6">

        <Search className="text-gray-400" />

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for movies, food, groceries..."
          className="w-full outline-none bg-white text-black"
        />

        <Mic className="text-purple-600" />

      </div>

      {/* AI Recommendation */}
      {aiResponse && (
        <div className="bg-white p-4 rounded-2xl shadow-md mb-6">

          <h2 className="font-bold text-lg mb-2">
            AI Recommendation
          </h2>

          <p className="text-gray-700">
            {aiResponse}
          </p>

        </div>
      )}

      {/* Popular Searches */}
      <div className="mb-8">

        <h3 className="font-semibold text-lg mb-4">
          Popular Searches
        </h3>

        <div className="flex flex-wrap gap-3">

          <Link href="/movies">
            <button className="bg-white border px-4 py-2 rounded-full shadow-sm">
              Movie Tickets
            </button>
          </Link>

          <Link href="/food">
            <button className="bg-white border px-4 py-2 rounded-full shadow-sm">
              Food Delivery
            </button>
          </Link>

          <Link href="/groceries">
            <button className="bg-white border px-4 py-2 rounded-full shadow-sm">
              Groceries
            </button>
          </Link>

          <Link href="/electronics">
            <button className="bg-white border px-4 py-2 rounded-full shadow-sm">
              Electronics
            </button>
          </Link>

        </div>

      </div>

      {/* Search History */}
      <div className="mb-10">

        <div className="flex justify-between items-center mb-4">

          <h3 className="font-semibold text-lg">
            Search History
          </h3>

          <button className="text-sm text-gray-500">
            Clear
          </button>

        </div>

        <div className="space-y-4 text-gray-700">

          <p>🕘 Avengers Endgame Tickets</p>
          <p>🕘 Bangalore to Mysore Bus</p>
          <p>🕘 Chicken Biryani</p>
          <p>🕘 iPhone 15</p>

        </div>

      </div>

      {/* Bottom Buttons */}
      <div className="fixed bottom-20 left-4 right-4 flex gap-3 z-50">

        {/* Ask AI */}
        <button
          onClick={handleSearch}
          className="flex-1 h-14 bg-gradient-to-r from-purple-600 to-violet-500 text-white rounded-2xl font-semibold shadow-lg"
        >
          {loading ? "Thinking..." : "Ask AI"}
        </button>

        {/* Search Deals */}
        <Link
          href={`/results?query=${encodeURIComponent(query || "Movie Tickets")}`}
          className="flex-1"
        >
          <button className="w-full h-14 bg-black text-white rounded-2xl font-semibold shadow-lg">
            Search Deals
          </button>
        </Link>

      </div>

    </main>
  );
}