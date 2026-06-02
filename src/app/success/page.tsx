"use client";

import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-[#f7f7fb] p-6">

      <h1 className="text-4xl font-bold mb-8">
        Success Categories
      </h1>

      <div className="space-y-4">

        <Link href="/success/movie">
          <div className="bg-white p-5 rounded-2xl shadow-sm">
            🎬 Movie Success
          </div>
        </Link>

        <Link href="/success/food">
          <div className="bg-white p-5 rounded-2xl shadow-sm">
            🍔 Food Success
          </div>
        </Link>

        <Link href="/success/grocery">
          <div className="bg-white p-5 rounded-2xl shadow-sm">
            🛒 Grocery Success
          </div>
        </Link>

        <Link href="/success/electronics">
          <div className="bg-white p-5 rounded-2xl shadow-sm">
            📱 Electronics Success
          </div>
        </Link>

      </div>

    </main>
  );
}