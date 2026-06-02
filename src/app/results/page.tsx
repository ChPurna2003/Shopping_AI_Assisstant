"use client";

export const dynamic = "force-dynamic";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ResultsContent() {

  const searchParams = useSearchParams();

  const query =
    searchParams?.get("query") || "Movie Tickets";

  const type =
    searchParams?.get("type") || "movie";

  const lowerQuery = query.toLowerCase();

  let currentDeals: any[] = [];

  // MOVIES
  if (
    lowerQuery.includes("pushpa") ||
    lowerQuery.includes("interstellar") ||
    lowerQuery.includes("kalki") ||
    lowerQuery.includes("avengers") ||
    lowerQuery.includes("movie")
  ) {

    currentDeals = [
      {
        name: "BookMyShow",
        price: "320",
        save: "120",
      },
      {
        name: "Paytm Movies",
        price: "340",
        save: "100",
      },
      {
        name: "PVR",
        price: "360",
        save: "80",
      },
    ];
  }

  // FOOD
  else if (
    lowerQuery.includes("burger") ||
    lowerQuery.includes("pizza") ||
    lowerQuery.includes("biryani") ||
    lowerQuery.includes("meal") ||
    lowerQuery.includes("food")
  ) {

    currentDeals = [
      {
        name: "Zomato",
        price: "210",
        save: "90",
      },
      {
        name: "Swiggy",
        price: "220",
        save: "80",
      },
      {
        name: "EatSure",
        price: "240",
        save: "60",
      },
    ];
  }

  // GROCERY
  else if (
    lowerQuery.includes("milk") ||
    lowerQuery.includes("rice") ||
    lowerQuery.includes("vegetable") ||
    lowerQuery.includes("grocery")
  ) {

    currentDeals = [
      {
        name: "Blinkit",
        price: "760",
        save: "150",
      },
      {
        name: "Zepto",
        price: "780",
        save: "120",
      },
      {
        name: "BigBasket",
        price: "820",
        save: "80",
      },
    ];
  }

  // ELECTRONICS
  else {

    currentDeals = [
      {
        name: "Amazon",
        price: "59999",
        save: "4000",
      },
      {
        name: "Flipkart",
        price: "60499",
        save: "3500",
      },
      {
        name: "Croma",
        price: "61000",
        save: "2800",
      },
    ];
  }

  return (

    <main className="min-h-screen bg-[#f7f7fb] p-4 pb-40">

      <p className="text-sm text-gray-500 mb-2">
        Today | Best Prices
      </p>

      <h1 className="text-4xl font-bold mb-6">
        {query}
      </h1>

      {/* FILTERS */}
      <div className="flex gap-3 overflow-x-auto mb-6">

        <button className="bg-blue-600 text-white px-4 py-2 rounded-full">
          All
        </button>

        <button className="bg-white border px-4 py-2 rounded-full">
          Top Deals
        </button>

        {type !== "movie" && (
          <button className="bg-white border px-4 py-2 rounded-full">
            Fast Delivery
          </button>
        )}

      </div>

      {/* DEALS */}
      <div className="space-y-4">

        {currentDeals.map((deal, index) => (

          <Link
            key={index}
            href={`/details?query=${query}&type=${type}&price=${deal.price}`}
          >

            <div className="bg-white rounded-3xl p-5 shadow-sm">

              <div className="flex justify-between items-center">

                <div>

                  <h2 className="text-xl font-bold">
                    {deal.name}
                  </h2>

                  <p className="text-green-600 text-sm mt-1">
                    Save ₹{deal.save}
                  </p>

                </div>

                <div className="text-right">

                  <p className="text-2xl font-bold">
                    ₹{deal.price}
                  </p>

                  <p className="text-sm text-gray-400">
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
          href={`/details?query=${query}&type=${type}&price=${currentDeals[0].price}`}
        >

          <button className="w-full h-14 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-2xl font-semibold">
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