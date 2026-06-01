"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function ResultsPage() {

  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "Movie Tickets";

  const deals: any = {

    "Movie Tickets": [
      { name: "Paytm", price: "₹420", save: "₹230" },
      { name: "BookMyShow", price: "₹450", save: "₹200" },
      { name: "PVR", price: "₹460", save: "₹190" },
    ],

    "Food Delivery": [
      { name: "Swiggy", price: "₹220", save: "₹80" },
      { name: "Zomato", price: "₹245", save: "₹50" },
      { name: "EatSure", price: "₹210", save: "₹90" },
    ],

    Electronics: [
      { name: "Amazon", price: "₹59,999", save: "₹4,000" },
      { name: "Flipkart", price: "₹60,499", save: "₹3,500" },
      { name: "Croma", price: "₹61,000", save: "₹2,800" },
    ],

    Groceries: [
      { name: "Blinkit", price: "₹780", save: "₹120" },
      { name: "Zepto", price: "₹820", save: "₹80" },
      { name: "BigBasket", price: "₹760", save: "₹150" },
    ],

    Hotels: [
      { name: "Booking.com", price: "₹4,200", save: "₹900" },
      { name: "Goibibo", price: "₹4,500", save: "₹700" },
      { name: "MakeMyTrip", price: "₹4,350", save: "₹850" },
    ],

    "Bus Tickets": [
      { name: "RedBus", price: "₹950", save: "₹150" },
      { name: "AbhiBus", price: "₹920", save: "₹180" },
      { name: "Paytm Travel", price: "₹980", save: "₹120" },
    ],
  };

  const currentDeals =
    deals[query] || deals["Movie Tickets"];

  return (

    <main className="min-h-screen bg-[#f7f7fb] p-4 pb-40">

      {/* Header */}
      <p className="text-sm text-gray-500 mb-2">
        Today | Best Prices
      </p>

      <h1 className="text-4xl font-bold mb-6">
        {query}
      </h1>

      {/* Filter Chips */}
      <div className="flex gap-3 overflow-x-auto mb-6">

        <button className="bg-blue-600 text-white px-4 py-2 rounded-full">
          All
        </button>

        <button className="bg-white px-4 py-2 rounded-full border">
          Top Deals
        </button>

        <button className="bg-white px-4 py-2 rounded-full border">
          Fast Delivery
        </button>

      </div>

      {/* Deal Cards */}
      <div className="space-y-4">

        {currentDeals.map((deal: any, index: number) => (

          <Link
            key={index}
            href="/details"
          >

            <div className="bg-white rounded-3xl p-5 shadow-sm">

              <div className="flex justify-between items-center">

                <div>

                  <h2 className="text-xl font-bold">
                    {deal.name}
                  </h2>

                  <p className="text-green-600 text-sm mt-1">
                    Save {deal.save}
                  </p>

                </div>

                <div className="text-right">

                  <p className="text-2xl font-bold">
                    {deal.price}
                  </p>

                  <p className="text-sm text-gray-400">
                    Best Deal
                  </p>

                </div>

              </div>

            </div>

          </Link>

        ))}

      </div>

      {/* Bottom CTA */}
      <div className="fixed bottom-20 left-4 right-4 z-50">

        <Link href="/details">

          <button className="w-full h-14 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-2xl font-semibold shadow-lg">

            Best Deal Found 🎉

          </button>

        </Link>

      </div>

    </main>
  );
}