"use client";

export const dynamic = "force-dynamic";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ResultsContent() {
  const searchParams = useSearchParams();

  const query =
    searchParams?.get("query") || "Movie";

  const lowerQuery = query.toLowerCase();

  let currentDeals = [];

  // MOVIES
  if (
    lowerQuery.includes("movie") ||
    lowerQuery.includes("pushpa") ||
    lowerQuery.includes("avengers endgame") ||
    lowerQuery.includes("kalki") ||
    lowerQuery.includes("interstellar")
  ) {
    currentDeals = [
      {
        name: "BookMyShow",
        price: "₹320",
        save: "₹120",
        type: "movie",
      },
      {
        name: "Paytm Movies",
        price: "₹340",
        save: "₹100",
        type: "movie",
      },
      {
        name: "PVR",
        price: "₹360",
        save: "₹80",
        type: "movie",
      },
    ];
  }

  // FOOD
  else if (
    lowerQuery.includes("biryani") ||
    lowerQuery.includes("pizza") ||
    lowerQuery.includes("burger") ||
    lowerQuery.includes("whopper meal")
  ) {
    currentDeals = [
      {
        name: "Zomato",
        price: "₹220",
        save: "₹80",
        type: "food",
      },
      {
        name: "Swiggy",
        price: "₹240",
        save: "₹60",
        type: "food",
      },
      {
        name: "EatSure",
        price: "₹210",
        save: "₹90",
        type: "food",
      },
    ];
  }

  // GROCERY
  else if (
    lowerQuery.includes("vegetable") ||
    lowerQuery.includes("eggs") ||
    lowerQuery.includes("milk") ||
    lowerQuery.includes("rice bag") ||
    lowerQuery.includes("cold drink")
  ) {
    currentDeals = [
      {
        name: "Blinkit",
        price: "₹220",
        save: "₹40",
        type: "grocery",
      },
      {
        name: "Zepto",
        price: "₹240",
        save: "₹25",
        type: "grocery",
      },
      {
        name: "Instamart",
        price: "₹210",
        save: "₹50",
        type: "grocery",
      },
    ];
  }

  // ELECTRONICS
  else {
    currentDeals = [
      {
        name: "Amazon",
        price: "₹59,999",
        save: "₹4,000",
        type: "electronics",
      },
      {
        name: "Flipkart",
        price: "₹60,499",
        save: "₹3,500",
        type: "electronics",
      },
      {
        name: "Croma",
        price: "₹61,000",
        save: "₹2,800",
        type: "electronics",
      },
    ];
  }

  return (
    <main className="min-h-screen bg-[#f7f7fb] p-4 pb-40">

      <p className="text-sm text-gray-500 mb-2">
        Today | Best Prices
      </p>

      <h1 className="text-5xl font-bold mb-8">
        {query}
      </h1>

      {/* FILTERS */}
      <div className="flex gap-3 mb-8 overflow-x-auto">

        <button className="bg-blue-600 text-white px-5 py-3 rounded-full">
          All
        </button>

        <button className="bg-white border px-5 py-3 rounded-full">
          Top Deals
        </button>

        {currentDeals[0]?.type !== "movie" && (
          <button className="bg-white border px-5 py-3 rounded-full">
            Fast Delivery
          </button>
        )}

      </div>

      {/* DEALS */}
      <div className="space-y-5">

        {currentDeals.map((deal, index) => (

          <Link
            key={index}
            href={`/details?query=${query}&type=${deal.type}&price=${deal.price}`}
          >

            <div className="bg-white rounded-3xl p-6 shadow-sm">

              <div className="flex justify-between items-center">

                <div>

                  <h2 className="text-3xl font-bold">
                    {deal.name}
                  </h2>

                  <p className="text-green-600 text-lg mt-2">
                    Save {deal.save}
                  </p>

                </div>

                <div className="text-right">

                  <p className="text-4xl font-bold">
                    {deal.price}
                  </p>

                  <p className="text-gray-400">
                    Best Deal
                  </p>

                </div>

              </div>

            </div>

          </Link>

        ))}

      </div>

      {/* CTA */}
      <div className="fixed bottom-20 left-4 right-4 z-50">

        <Link
          href={`/details?query=${query}&type=${currentDeals[0]?.type}&price=${currentDeals[0]?.price}`}
        >

          <button className="w-full h-16 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-2xl text-xl font-bold shadow-lg">

            Best Deal Found 🎉

          </button>

        </Link>

      </div>

    </main>
  );
}

export default function ResultsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResultsContent />
    </Suspense>
  );
}