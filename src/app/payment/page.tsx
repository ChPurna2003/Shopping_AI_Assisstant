"use client";

export const dynamic = "force-dynamic";

import Link from "next/link";
import {
  Suspense,
} from "react";

import {
  useSearchParams,
} from "next/navigation";

function PaymentContent() {

  const searchParams = useSearchParams();

  const query =
    searchParams.get("query") || "Item";

  const type =
    searchParams.get("type") || "movie";

  const price =
    searchParams.get("price") || "499";

  return (

    <main className="min-h-screen bg-[#f7f7fb] p-4 pb-40">

      <h1 className="text-3xl font-bold mb-8">
        Payment
      </h1>

      {/* PAYMENT CARD */}
      <div className="bg-white rounded-3xl p-6 shadow-sm mb-6">

        <h2 className="text-2xl font-bold mb-2">
          {query}
        </h2>

        <p className="text-gray-600 mb-6">
          Pay securely with Slice UPI
        </p>

        <div className="flex justify-between items-center">

          <p className="text-lg text-gray-500">
            Total Amount
          </p>

          <p className="text-3xl font-bold">
            ₹{price}
          </p>

        </div>

      </div>

      {/* PAYMENT OPTIONS */}
      <div className="space-y-4">

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          💳 Credit / Debit Card
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          📱 UPI Payment
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          🏦 Net Banking
        </div>

      </div>

      {/* BUTTON */}
      <div className="fixed bottom-20 left-4 right-4 z-50">

        <Link
          href={`/processing?query=${query}&type=${type}&price=${price}`}
        >

          <button className="w-full h-14 bg-black text-white rounded-2xl font-semibold">

            Pay Now ₹{price}

          </button>

        </Link>

      </div>

    </main>

  );
}

export default function PaymentPage() {

  return (

    <Suspense fallback={<div>Loading...</div>}>

      <PaymentContent />

    </Suspense>

  );
}
