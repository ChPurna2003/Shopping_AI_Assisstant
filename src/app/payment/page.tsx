"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function PaymentPage() {

  const searchParams = useSearchParams();

  const query =
    searchParams.get("query") || "Item";

  const type =
    searchParams.get("type") || "movie";

  return (
    <main className="min-h-screen bg-[#f7f7fb] p-4 pb-40">

      <h1 className="text-3xl font-bold mb-8">
        Payment
      </h1>

      <div className="bg-white rounded-3xl p-6 shadow-sm">

        <h2 className="text-2xl font-bold mb-2">
          {query}
        </h2>

        <p className="text-gray-600">
          Pay securely with Slice UPI
        </p>

      </div>

      <div className="fixed bottom-20 left-4 right-4 z-50">

        <Link href={`/processing?query=${query}&type=${type}`}>

          <button className="w-full h-14 bg-black text-white rounded-2xl font-semibold">
            Pay Now ₹499
          </button>

        </Link>

      </div>

    </main>
  );
}