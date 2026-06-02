"use client";

import Link from "next/link";
import {
  Clock3,
  ChevronRight,
} from "lucide-react";

export default function HistoryPage() {

  const history = [

    {
      title: "Avengers Endgame",
      type: "movie",
      price: "320",
      emoji: "🎬",
      cashback: "Saved ₹120",
    },

    {
      title: "Chicken Biryani",
      type: "food",
      price: "210",
      emoji: "🍔",
      cashback: "Saved ₹90",
    },

    {
      title: "Vegetables",
      type: "grocery",
      price: "760",
      emoji: "🛒",
      cashback: "Saved ₹150",
    },

    {
      title: "iPhone 15",
      type: "electronics",
      price: "59999",
      emoji: "📱",
      cashback: "Saved ₹4000",
    },

  ];

  return (

    <main className="min-h-screen bg-[#f7f7fb] p-4 pb-32">

      {/* HEADER */}
      <div className="mb-8">

        <p className="text-sm text-gray-500 mb-2">
          Recent Activity
        </p>

        <h1 className="text-4xl font-bold">
          History
        </h1>

      </div>

      {/* SAVINGS CARD */}
      <div className="bg-gradient-to-r from-purple-600 to-violet-500 rounded-3xl p-6 text-white mb-8 shadow-lg">

        <p className="text-sm text-purple-100 mb-2">
          Total Savings
        </p>

        <h2 className="text-5xl font-bold mb-3">
          ₹4,360
        </h2>

        <p className="text-sm text-purple-100">
          AI automatically found best deals ✨
        </p>

      </div>

      {/* HISTORY LIST */}
      <div className="space-y-4">

        {history.map((item, index) => (

          <Link
            key={index}
            href={`/details?query=${item.title}&type=${item.type}&price=${item.price}`}
          >

            <div className="bg-white rounded-3xl p-5 shadow-sm hover:shadow-md transition duration-300">

              <div className="flex items-center justify-between">

                {/* LEFT */}
                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-2xl bg-[#f3f0ff] flex items-center justify-center text-2xl">

                    {item.emoji}

                  </div>

                  <div>

                    <h2 className="text-lg font-bold">
                      {item.title}
                    </h2>

                    <div className="flex items-center gap-2 mt-1">

                      <Clock3
                        size={14}
                        className="text-gray-400"
                      />

                      <p className="text-sm text-gray-500 capitalize">
                        {item.type}
                      </p>

                    </div>

                  </div>

                </div>

                {/* RIGHT */}
                <div className="text-right">

                  <p className="text-2xl font-bold">
                    ₹{item.price}
                  </p>

                  <p className="text-sm text-green-600 font-medium">
                    {item.cashback}
                  </p>

                </div>

              </div>

              {/* BOTTOM */}
              <div className="flex items-center justify-between mt-5 pt-4 border-t">

                <p className="text-sm text-gray-500">
                  View Booking Details
                </p>

                <ChevronRight
                  size={18}
                  className="text-gray-400"
                />

              </div>

            </div>

          </Link>

        ))}

      </div>

    </main>
  );
}