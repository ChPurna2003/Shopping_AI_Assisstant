"use client";

import Link from "next/link";

const deals = [
  {
    platform: "Paytm",
    price: 420,
    original: 650,
    savings: 230,
    badge: "Best Price",
  },
  {
    platform: "BookMyShow",
    price: 450,
    original: 680,
    savings: 230,
  },
  {
    platform: "PVR",
    price: 460,
    original: 700,
    savings: 240,
  },
  {
    platform: "Amazon Pay",
    price: 480,
    original: 700,
    savings: 220,
  },
];

export default function ResultsPage() {
  return (
    <main className="min-h-screen bg-[#f7f7fb] p-4 pb-24">

      {/* Header */}
      <div className="mb-6">
        <p className="text-sm text-gray-500">
          Today | IMAX 3D
        </p>

        <h1 className="text-3xl font-bold mt-1">
          Avengers Endgame
        </h1>
      </div>

      {/* Filter Row */}
      <div className="flex gap-3 mb-5 overflow-x-auto">

        <button className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm">
          All
        </button>

        <button className="bg-white px-4 py-2 rounded-full text-sm shadow-sm">
          Tickets
        </button>

        <button className="bg-white px-4 py-2 rounded-full text-sm shadow-sm">
          Food
        </button>

        <button className="bg-white px-4 py-2 rounded-full text-sm shadow-sm">
          Electronics
        </button>

      </div>

      {/* Deal Cards */}
      <div className="space-y-4">

        {deals.map((deal, index) => (

          <Link key={index} href="/details">

            <div className="bg-white rounded-3xl p-5 shadow-sm cursor-pointer">

              <div className="flex items-center justify-between">

                <div>
                  <h2 className="text-lg font-semibold">
                    {deal.platform}
                  </h2>

                  {deal.badge && (
                    <p className="text-green-600 text-sm font-medium">
                      {deal.badge}
                    </p>
                  )}
                </div>

                <div className="text-right">

                  <div className="flex items-center gap-2 justify-end">
                    <p className="text-2xl font-bold">
                      ₹{deal.price}
                    </p>

                    <p className="line-through text-gray-400">
                      ₹{deal.original}
                    </p>
                  </div>

                  <p className="text-green-600 text-sm font-medium">
                    Save ₹{deal.savings}
                  </p>

                </div>

              </div>

            </div>

          </Link>

        ))}

      </div>

      {/* Bottom Best Deal Card */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">

        <div className="bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl p-4 flex items-center justify-between text-white">

          <div>
            <p className="text-sm">
              Best Deal Found 🎉
            </p>

            <h2 className="text-lg font-bold">
              You save ₹230
            </h2>
          </div>

          <Link href="/details">

            <button className="bg-white text-green-600 px-4 py-2 rounded-xl font-semibold">
              Book Now
            </button>

          </Link>

        </div>

      </div>

    </main>
  );
}