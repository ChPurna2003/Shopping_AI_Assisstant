"use client";

import Link from "next/link";

export default function DetailsPage() {

  return (

    <main className="min-h-screen bg-[#f7f7fb] p-4 pb-40">

      {/* Movie Card */}
      <div className="bg-white rounded-3xl p-5 shadow-sm mb-5">

        <p className="text-sm text-gray-500 mb-2">
          IMAX 3D
        </p>

        <h1 className="text-3xl font-bold mb-2">
          Avengers Endgame
        </h1>

        <p className="text-gray-500">
          Today • 7:30 PM
        </p>

      </div>

      {/* Price Breakdown */}
      <div className="bg-white rounded-3xl p-5 shadow-sm mb-5">

        <h2 className="text-xl font-bold mb-4">
          Price Breakdown
        </h2>

        <div className="space-y-4">

          <div className="flex justify-between">
            <p>Ticket Price</p>
            <p>₹650</p>
          </div>

          <div className="flex justify-between">
            <p>Convenience Fee</p>
            <p>₹50</p>
          </div>

          <div className="flex justify-between">
            <p>Platform Fee</p>
            <p>₹20</p>
          </div>

          <div className="flex justify-between text-green-600">
            <p>Coupon Applied</p>
            <p>- ₹300</p>
          </div>

          <hr />

          <div className="flex justify-between text-2xl font-bold">
            <p>Total Amount</p>
            <p>₹420</p>
          </div>

        </div>

      </div>

      {/* Features */}
      <div className="grid grid-cols-2 gap-4 mb-6">

        <div className="bg-white rounded-3xl p-5 shadow-sm">
          <p className="text-purple-600 text-2xl mb-2">🎟️</p>
          <p className="font-medium">
            Instant Booking
          </p>
        </div>

        <div className="bg-white rounded-3xl p-5 shadow-sm">
          <p className="text-purple-600 text-2xl mb-2">🏷️</p>
          <p className="font-medium">
            Auto Coupons
          </p>
        </div>

        <div className="bg-white rounded-3xl p-5 shadow-sm">
          <p className="text-purple-600 text-2xl mb-2">🛡️</p>
          <p className="font-medium">
            Secure Payment
          </p>
        </div>

        <div className="bg-white rounded-3xl p-5 shadow-sm">
          <p className="text-purple-600 text-2xl mb-2">✅</p>
          <p className="font-medium">
            Free Cancellation
          </p>
        </div>

      </div>

      {/* Bottom Button */}
      <div className="fixed bottom-20 left-4 right-4 z-50">

        <Link href="/payment">

          <button className="w-full h-14 bg-gradient-to-r from-purple-600 to-violet-500 text-white rounded-2xl font-semibold shadow-lg">

            Proceed to Payment ₹420

          </button>

        </Link>

      </div>

    </main>
  );
}