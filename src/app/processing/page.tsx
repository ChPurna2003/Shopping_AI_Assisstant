"use client";

import { CheckCircle, Circle } from "lucide-react";
import { useEffect } from "react";
import {
  useRouter,
  useSearchParams,
} from "next/navigation";

export default function ProcessingPage() {

  const router = useRouter();
  const searchParams = useSearchParams();

  // GET VALUES
  const type =
    searchParams.get("type") || "movie";

  const query =
    searchParams.get("query") || "Item";

  // AUTO REDIRECT
  useEffect(() => {

    const timer = setTimeout(() => {

      router.push(
        `/success/${type}?query=${query}`
      );

    }, 3500);

    return () => clearTimeout(timer);

  }, [router, type, query]);

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-6">

      {/* Purple Icon */}
      <div className="w-40 h-40 rounded-full bg-purple-100 flex items-center justify-center mb-8">

        <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center shadow-lg">

          <span className="text-white text-5xl font-bold">
            ₹
          </span>

        </div>

      </div>

      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-3">
        Processing Payment
      </h1>

      <p className="text-gray-500 text-center text-lg mb-12">
        Please wait while we confirm
        <br />
        your booking...
      </p>

      {/* Steps */}
      <div className="w-full max-w-md space-y-6">

        {/* Step 1 */}
        <div className="flex items-center justify-between">

          <p className="text-lg text-gray-700">
            Confirming Payment
          </p>

          <CheckCircle
            className="text-green-500"
            size={28}
          />

        </div>

        {/* Step 2 */}
        <div className="flex items-center justify-between">

          <p className="text-lg text-gray-700">
            Verifying with Partner
          </p>

          <CheckCircle
            className="text-green-500"
            size={28}
          />

        </div>

        {/* Step 3 */}
        <div className="flex items-center justify-between">

          <p className="text-lg text-gray-700">
            Booking your Order
          </p>

          <div className="w-7 h-7 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />

        </div>

        {/* Step 4 */}
        <div className="flex items-center justify-between">

          <p className="text-lg text-gray-400">
            Almost Done
          </p>

          <Circle
            className="text-gray-300"
            size={28}
          />

        </div>

      </div>

    </main>
  );
}