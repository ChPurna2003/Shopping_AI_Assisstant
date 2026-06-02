"use client";

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
    searchParams.get("price") || "₹210";

  return (
    <main className="min-h-screen bg-[#f7f7fb] p-4 pb-40">

      {/* TOP CARD */}
      <div className="bg-white rounded-3xl p-6 shadow-sm mb-6">

        <p className="text-sm text-purple-500 mb-2">

          {type === "movie" && "IMAX 3D"}
          {type === "food" && "Burger King • Fast Delivery"}
          {type === "grocery" && "Instant Grocery"}
          {type === "electronics" && "Premium Deal"}

        </p>

        <h1 className="text-5xl font-bold mb-3">
          {query}
        </h1>

        <p className="text-gray-500 text-lg">

          {type === "movie" &&
            "Today • 7:30 PM"}

          {type === "food" &&
            "Free Coke Included • Delivery in 25 mins"}

          {type === "grocery" &&
            "Delivery in 10 mins"}

          {type === "electronics" &&
            "1 Year Warranty Included"}

        </p>

      </div>

      {/* DETAILS CARD */}
      <div className="bg-white rounded-3xl p-6 shadow-sm">

        <h2 className="text-3xl font-bold mb-8">

          {type === "movie" && "Ticket Breakdown"}
          {type === "food" && "Food Order Details"}
          {type === "grocery" && "Grocery Details"}
          {type === "electronics" && "Price Breakdown"}

        </h2>

        <div className="space-y-6 text-xl">

          {/* MOVIE */}
          {type === "movie" && (
            <>
              <div className="flex justify-between">
                <p>Ticket Price</p>
                <p>{price}</p>
              </div>

              <div className="flex justify-between">
                <p>Coupon Discount</p>
                <p className="text-green-600">-₹120</p>
              </div>

              <div className="flex justify-between">
                <p>Convenience Fee</p>
                <p>₹20</p>
              </div>
            </>
          )}

          {/* FOOD */}
          {type === "food" && (
            <>
              <div className="flex justify-between">
                <p>Meal Price</p>
                <p>{price}</p>
              </div>

              <div className="flex justify-between">
                <p>Restaurant Delivery</p>
                <p className="text-green-600">FREE</p>
              </div>

              <div className="flex justify-between">
                <p>Coupon Applied</p>
                <p className="text-green-600">-₹60</p>
              </div>
            </>
          )}

          {/* GROCERY */}
          {type === "grocery" && (
            <>
              <div className="flex justify-between">
                <p>Item Total</p>
                <p>{price}</p>
              </div>

              <div className="flex justify-between">
                <p>Delivery Fee</p>
                <p className="text-green-600">FREE</p>
              </div>

              <div className="flex justify-between">
                <p>Coupon Savings</p>
                <p className="text-green-600">-₹120</p>
              </div>
            </>
          )}

          {/* ELECTRONICS */}
          {type === "electronics" && (
            <>
              <div className="flex justify-between">
                <p>Original Price</p>
                <p>{price}</p>
              </div>

              <div className="flex justify-between">
                <p>Exchange Bonus</p>
                <p className="text-green-600">-₹4,000</p>
              </div>

              <div className="flex justify-between">
                <p>Bank Offer</p>
                <p className="text-green-600">-₹2,000</p>
              </div>
            </>
          )}

        </div>

        {/* TOTAL */}
        <div className="border-t mt-8 pt-6 flex justify-between items-center">

          <h2 className="text-4xl font-bold">
            Total
          </h2>

          <h2 className="text-4xl font-bold text-purple-600">
            {price}
          </h2>

        </div>

      </div>

      {/* PAYMENT BUTTON */}
      <div className="fixed bottom-20 left-4 right-4 z-50">

        <Link
          href={`/processing?query=${query}&type=${type}&price=${price}`}
        >

          <button className="w-full h-16 bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-2xl text-xl font-semibold shadow-lg">

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