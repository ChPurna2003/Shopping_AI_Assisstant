"use client";

import Link from "next/link";

export default function HomePage() {

  return (

    <main className="min-h-screen bg-[#f7f7fb] p-4 pb-40">

      {/* Top Header */}
      <div className="flex items-center justify-between mb-8">

        <div>

          <p className="text-sm text-gray-500">
            Welcome back 👋
          </p>

          <h1 className="text-4xl font-bold mt-1">
            Purna
          </h1>

        </div>

        <Link href="/profile">

          <img
            src="/profile.JPG"
            alt="profile"
            className="w-14 h-14 rounded-full object-cover"
          />

        </Link>

      </div>

      {/* AI Banner */}
      <div className="bg-gradient-to-r from-purple-600 to-violet-500 rounded-3xl p-6 text-white mb-6 shadow-lg">

        <p className="text-sm text-purple-100 mb-2">
          AI Powered Savings
        </p>

        <h2 className="text-3xl font-bold leading-tight mb-3">
          Find the best price across all apps instantly
        </h2>

        <p className="text-purple-100 mb-6">
          Compare prices, apply coupons, and save more automatically.
        </p>

        <Link href="/search">

          <button className="bg-white text-purple-700 px-6 py-3 rounded-2xl font-semibold shadow-md">

            Try Now ⚡

          </button>

        </Link>

      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-4 gap-3 mb-8">

        <Link href="/movies?query=Movie Tickets">

          <div className="bg-white rounded-2xl p-4 flex flex-col items-center shadow-sm">

            <p className="text-3xl mb-2">
              🎬
            </p>

            <p className="text-xs font-medium">
              Movies
            </p>

          </div>

        </Link>

        <Link href="/food?query=Food Delivery">

          <div className="bg-white rounded-2xl p-4 flex flex-col items-center shadow-sm">

            <p className="text-3xl mb-2">
              🍔
            </p>

            <p className="text-xs font-medium">
              Food
            </p>

          </div>

        </Link>

        <Link href="/groceries?query=Groceries">

          <div className="bg-white rounded-2xl p-4 flex flex-col items-center shadow-sm">

            <p className="text-3xl mb-2">
              🛒
            </p>

            <p className="text-xs font-medium">
              Grocery
            </p>

          </div>

        </Link>

        <Link href="/electronics?query=Electronics">

          <div className="bg-white rounded-2xl p-4 flex flex-col items-center shadow-sm">

            <p className="text-3xl mb-2">
              📱
            </p>

            <p className="text-xs font-medium">
              Gadgets
            </p>

          </div>

        </Link>

      </div>

      {/* Savings Card */}
      <div className="bg-white rounded-3xl p-6 shadow-sm mb-6">

        <p className="text-gray-500 text-sm mb-2">
          Total Savings This Month
        </p>

        <h2 className="text-5xl font-bold mb-3">
          ₹2,340
        </h2>

        <div className="bg-green-50 text-green-600 px-4 py-2 rounded-xl inline-block font-medium">

          ↑ 18% higher than last month

        </div>

      </div>

      {/* Recent Searches */}
      <div className="mb-6">

        <div className="flex justify-between items-center mb-4">

          <h2 className="text-2xl font-bold">
            Recent Searches
          </h2>

          <Link href="/search">

            <p className="text-purple-600 font-medium">
              View all
            </p>

          </Link>

        </div>

        <div className="space-y-4">

          <Link href="/results?query=Movie Tickets">

            <div className="bg-white rounded-2xl p-5 shadow-sm flex justify-between items-center">

              <div>

                <p className="font-semibold">
                  Avengers Endgame
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  Movie Tickets
                </p>

              </div>

              <p className="text-green-600 font-bold">
                Saved ₹230
              </p>

            </div>

          </Link>

          <Link href="/results?query=Food Delivery">

            <div className="bg-white rounded-2xl p-5 shadow-sm flex justify-between items-center">

              <div>

                <p className="font-semibold">
                  Chicken Biryani
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  Food Delivery
                </p>

              </div>

              <p className="text-green-600 font-bold">
                Saved ₹80
              </p>

            </div>

          </Link>

        </div>

      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t h-16 flex items-center justify-around z-50">

        <Link href="/">

          <div className="flex flex-col items-center text-purple-600">

            <p>🏠</p>

            <p className="text-xs">
              Home
            </p>

          </div>

        </Link>

        <Link href="/search">

          <div className="flex flex-col items-center text-gray-500">

            <p>🔍</p>

            <p className="text-xs">
              Search
            </p>

          </div>

        </Link>

        <Link href="/savings">

          <div className="flex flex-col items-center text-gray-500">

            <p>💰</p>

            <p className="text-xs">
              Savings
            </p>

          </div>

        </Link>

        <Link href="/profile">

          <div className="flex flex-col items-center text-gray-500">

            <p>👤</p>

            <p className="text-xs">
              Profile
            </p>

          </div>

        </Link>

      </div>

    </main>
  );
}