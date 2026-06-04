"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  BadgePercent,
  Ticket,
  BellRing,
  Sparkles,
} from "lucide-react";

export default function EntryPage() {

  const router = useRouter();

  // AUTO REDIRECT
  useEffect(() => {

    const timer = setTimeout(() => {
      router.push("/home");
    }, 5000);

    return () => clearTimeout(timer);

  }, [router]);

  return (

    <main className="min-h-screen bg-white overflow-hidden">

      <div className="flex items-center justify-between px-12 py-12">

        {/* LEFT SIDE */}
        <div className="max-w-2xl">

          {/* LOGO */}
          <h1 className="text-7xl font-black text-purple-600">
            slice
          </h1>

          {/* TAG */}
          <div className="mt-8 inline-block bg-gradient-to-r from-purple-500 to-violet-600 text-white px-6 py-3 rounded-2xl text-sm font-bold shadow-lg">

            NEW FEATURE

          </div>

          {/* TITLE */}
          <h2 className="text-7xl font-black leading-tight mt-10">

            Best Price AI ✨

          </h2>

          {/* SUBTITLE */}
          <p className="text-gray-600 text-3xl mt-6 leading-relaxed">

            One search. Multiple platforms.
            <br />
            Best deal. Every time.

          </p>

          {/* FEATURES */}
          <div className="mt-16 space-y-10">

            {/* FEATURE 1 */}
            <div className="flex items-center gap-6">

              <div className="w-20 h-20 rounded-3xl bg-purple-100 flex items-center justify-center">

                <BadgePercent
                  size={38}
                  className="text-purple-600"
                />

              </div>

              <div>

                <h3 className="text-3xl font-bold">
                  Compare prices
                </h3>

                <p className="text-gray-500 text-xl">
                  Across platforms
                </p>

              </div>

            </div>

            {/* FEATURE 2 */}
            <div className="flex items-center gap-6">

              <div className="w-20 h-20 rounded-3xl bg-purple-100 flex items-center justify-center">

                <Ticket
                  size={38}
                  className="text-purple-600"
                />

              </div>

              <div>

                <h3 className="text-3xl font-bold">
                  Coupons & offers
                </h3>

                <p className="text-gray-500 text-xl">
                  Automatically applied
                </p>

              </div>

            </div>

            {/* FEATURE 3 */}
            <div className="flex items-center gap-6">

              <div className="w-20 h-20 rounded-3xl bg-purple-100 flex items-center justify-center">

                <Sparkles
                  size={38}
                  className="text-purple-600"
                />

              </div>

              <div>

                <h3 className="text-3xl font-bold">
                  Save time & money
                </h3>

                <p className="text-gray-500 text-xl">
                  Always the best deal
                </p>

              </div>

            </div>

            {/* FEATURE 4 */}
            <div className="flex items-center gap-6">

              <div className="w-20 h-20 rounded-3xl bg-purple-100 flex items-center justify-center">

                <BellRing
                  size={38}
                  className="text-purple-600"
                />

              </div>

              <div>

                <h3 className="text-3xl font-bold">
                  Price drop alerts
                </h3>

                <p className="text-gray-500 text-xl">
                  Get notified instantly
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE WALLET */}
        <div className="flex items-center justify-center">

          <img
            src="/wallet.png"
            alt="wallet"
            className="w-[500px] mt-40 animate-pulse"
          />

        </div>

      </div>

    </main>

  );
}