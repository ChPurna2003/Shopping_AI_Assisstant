"use client";

export const dynamic = "force-dynamic";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function DetailsContent() {
  const searchParams = useSearchParams();

  const query =
    searchParams.get("query") || "Item";

  const type =
    searchParams.get("type") || "food";

  const price =
    searchParams.get("price") || "₹499";

  return (
    <main className="min-h-screen bg-[#f7f7fb] p-4 pb-40">

      {/* TOP CARD */}
      <div className="bg-white rounded-3xl p-6 shadow-sm mb-6">

        {type === "movie" && (
          <>
            <p className="text-sm text-purple-500">
              IMAX 3D
            </p>

            <h1 className="text-5xl font-bold mt-2">
              {query}
            </h1>

            <p className="text-gray-500 mt-2">
              Today • 7:30 PM
            </p>
          </>
        )}

        {type === "food" && (
          <>
            <p className="text-sm text-purple-500">
              Fast Delivery
            </p>

            <h1 className="text-5xl font-bold mt-2">
              {query}
            </h1>

            <p className="text-gray-500 mt-2">
              Delivery in 25 mins
            </p>
          </>
        )}

        {type === "grocery" && (
          <>
            <p className="text-sm text-green-500">
              Instant Delivery
            </p>

            <h1 className="text-5xl font-bold mt-2">
              {query}
            </h1>

            <p className="text-gray-500 mt-2">
              Delivery in 10 mins
            </p>
          </>
        )}

        {type === "electronics" && (
          <>
            <p className="text-sm text-blue-500">
              Premium Deal
            </p>

            <h1 className="text-5xl font-bold mt-2">
              {query}
            </h1>

            <p className="text-gray-500 mt-2">
              1 Year Warranty Included
            </p>
          </>
        )}

      </div>

      {/* DETAILS CARD */}
      <div className="bg-white rounded-3xl p-6 shadow-sm">

        {/* MOVIE */}
        {type === "movie" && (
          <>
            <h2 className="text-3xl font-bold mb-8">
              Ticket Breakdown
            </h2>

            <div className="space-y-5 text-xl">

              <div className="flex justify-between">
                <p>Ticket Price</p>
                <p>{price}</p>
              </div>

              <div className="flex justify-between">
                <p>Coupon Discount</p>
                <p className="text-green-600">
                  -₹100
                </p>
              </div>

              <div className="flex justify-between">
                <p>Convenience Fee</p>
                <p>₹20</p>
              </div>

            </div>
          </>
        )}

        {/* FOOD */}
        {type === "food" && (
          <>
            <h2 className="text-3xl font-bold mb-8">
              Food Order Details
            </h2>

            <div className="space-y-5 text-xl">

              <div className="flex justify-between">
                <p>Meal Price</p>
                <p>{price}</p>
              </div>

              <div className="flex justify-between">
                <p>Delivery Fee</p>
                <p className="text-green-600">
                  FREE
                </p>
              </div>

              <div className="flex justify-between">
                <p>Platform Fee</p>
                <p>₹10</p>
              </div>

            </div>
          </>
        )}

        {/* GROCERY */}
        {type === "grocery" && (
          <>
            <h2 className="text-3xl font-bold mb-8">
              Grocery Details
            </h2>

            <div className="space-y-5 text-xl">

              <div className="flex justify-between">
                <p>Item Total</p>
                <p>{price}</p>
              </div>

              <div className="flex justify-between">
                <p>Delivery Fee</p>
                <p className="text-green-600">
                  FREE
                </p>
              </div>

              <div className="flex justify-between">
                <p>Coupon Savings</p>
                <p className="text-green-600">
                  -₹50
                </p>
              </div>

            </div>
          </>
        )}

        {/* ELECTRONICS */}
        {type === "electronics" && (
          <>
            <h2 className="text-3xl font-bold mb-8">
              Price Breakdown
            </h2>

            <div className="space-y-5 text-xl">

              <div className="flex justify-between">
                <p>Original Price</p>
                <p>{price}</p>
              </div>

              <div className="flex justify-between">
                <p>Exchange Bonus</p>
                <p className="text-green-600">
                  -₹4,000
                </p>
              </div>

              <div className="flex justify-between">
                <p>Bank Offer</p>
                <p className="text-green-600">
                  -₹2,000
                </p>
              </div>

            </div>
          </>
        )}

        {/* TOTAL */}
        <div className="border-t mt-8 pt-6 flex justify-between items-center">

          <h2 className="text-3xl font-bold">
            Total
          </h2>

          <h2 className="text-4xl font-bold text-purple-600">
            {price}
          </h2>

        </div>

      </div>

      {/* PAYMENT BUTTON */}
      <div className="fixed bottom-20 left-4 right-4 z-50">

        <Link href={`/success/${type}`}>

          <button className="w-full h-16 bg-gradient-to-r from-purple-500 to-violet-500 text-white rounded-2xl text-xl font-bold shadow-lg">

            Continue Payment {price}

          </button>

        </Link>

      </div>

    </main>
  );
}

export default function DetailsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DetailsContent />
    </Suspense>
  );
}