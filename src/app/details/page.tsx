"use client";

import Link from "next/link";
import {
  Ticket,
  Percent,
  ShieldCheck,
  CircleCheck,
} from "lucide-react";

export default function DetailsPage() {

  return (
    <main className="min-h-screen bg-[#f7f7fb] p-4 pb-32">

      {/* Header */}
      <div className="mb-6">

        <p className="text-sm text-gray-500 mb-2">
          Best Price Found 🎉
        </p>

        <h1 className="text-3xl font-bold">
          Avengers Endgame
        </h1>

        <p className="text-gray-500 mt-2">
          PVR Nexus Mall • IMAX 3D
        </p>

      </div>

      {/* Price Card */}
      <div className="bg-white rounded-3xl p-5 shadow-sm mb-5">

        <div className="flex items-center justify-between mb-4">

          <div>
            <p className="text-gray-500 text-sm">
              Platform
            </p>

            <h2 className="text-xl font-bold">
              Paytm
            </h2>
          </div>

          <div className="text-right">

            <p className="text-3xl font-bold">
              ₹420
            </p>

            <p className="line-through text-gray-400">
              ₹650
            </p>

          </div>

        </div>

        <div className="bg-green-50 text-green-600 rounded-2xl p-3 font-medium">
          You save ₹230 on this booking
        </div>

      </div>

      {/* Price Breakdown */}
      <div className="bg-white rounded-3xl p-5 shadow-sm mb-5">

        <h2 className="text-lg font-semibold mb-5">
          Price Breakdown
        </h2>

        <div className="space-y-4">

          <div className="flex items-center justify-between">
            <p className="text-gray-600">
              Ticket Price
            </p>

            <p className="font-medium">
              ₹500
            </p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-gray-600">
              Convenience Fee
            </p>

            <p className="font-medium">
              ₹35
            </p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-gray-600">
              Platform Fee
            </p>

            <p className="font-medium">
              ₹15
            </p>
          </div>

          <div className="flex items-center justify-between text-green-600">
            <p>
              Coupon Applied
            </p>

            <p className="font-semibold">
              -₹150
            </p>
          </div>

        </div>

        <div className="border-t mt-5 pt-5 flex items-center justify-between">

          <p className="text-lg font-semibold">
            Total Amount
          </p>

          <p className="text-2xl font-bold">
            ₹420
          </p>

        </div>

      </div>

      {/* Features */}
      <div className="grid grid-cols-2 gap-4 mb-6">

        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <Ticket className="text-purple-600 mb-3" />

          <p className="font-medium">
            Instant Booking
          </p>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <Percent className="text-purple-600 mb-3" />

          <p className="font-medium">
            Auto Coupons
          </p>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <ShieldCheck className="text-purple-600 mb-3" />

          <p className="font-medium">
            Secure Payment
          </p>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <CircleCheck className="text-purple-600 mb-3" />

          <p className="font-medium">
            Free Cancellation
          </p>
        </div>

      </div>

      {/* Bottom Button */}
      <Link href="/payment">

        <button className="fixed bottom-20 left-4 right-4 bg-gradient-to-r from-purple-600 to-violet-500 text-white py-4 rounded-2xl font-semibold shadow-lg text-lg">
          Proceed to Pay
        </button>

      </Link>

    </main>
  );
}