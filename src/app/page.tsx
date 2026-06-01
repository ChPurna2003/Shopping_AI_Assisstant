import Link from "next/link";
import {
  Bell,
  Search,
  Wallet,
  CreditCard,
  ScanLine,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f7fb] p-4 pb-28">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-purple-700">
          slice
        </h1>

        <Bell className="text-gray-700" />
      </div>

      {/* Balance Card */}
      <div className="bg-white rounded-3xl p-5 shadow-sm mb-5">
        <p className="text-gray-500 text-sm mb-2">
          Total Balance
        </p>

        <h2 className="text-3xl font-bold">
          ₹24,650.50
        </h2>
      </div>

      {/* Quick Actions */}

<div className="grid grid-cols-4 gap-3 mb-6">

  <Link href="/payment">
    <div className="bg-white rounded-2xl p-4 flex flex-col items-center shadow-sm cursor-pointer">
      <p className="text-purple-600 text-2xl mb-2">💳</p>
      <p className="text-xs">Pay</p>
    </div>
  </Link>

  <Link href="/results">
    <div className="bg-white rounded-2xl p-4 flex flex-col items-center shadow-sm cursor-pointer">
      <p className="text-purple-600 text-2xl mb-2">💰</p>
      <p className="text-xs">Cards</p>
    </div>
  </Link>

  <Link href="/search">
    <div className="bg-white rounded-2xl p-4 flex flex-col items-center shadow-sm cursor-pointer">
      <p className="text-purple-600 text-2xl mb-2">📷</p>
      <p className="text-xs">Scan</p>
    </div>
  </Link>

  <Link href="/search">
    <div className="bg-white rounded-2xl p-4 flex flex-col items-center shadow-sm cursor-pointer">
      <p className="text-purple-600 text-2xl mb-2">🔍</p>
      <p className="text-xs">Search</p>
    </div>
  </Link>

</div>

      {/* Best Price AI Card */}
      <Link href="/search">

        <div className="bg-gradient-to-r from-purple-600 to-violet-500 rounded-3xl p-5 text-white shadow-lg mb-6 cursor-pointer">
          
          <p className="text-sm mb-2">
            NEW FEATURE ✨
          </p>

          <h2 className="text-2xl font-bold mb-2">
            Best Price AI
          </h2>

          <p className="text-sm text-purple-100">
            Compare prices across 100+ platforms instantly.
          </p>

          <button className="mt-4 bg-white text-purple-700 px-4 py-2 rounded-xl font-semibold">
            Try Now
          </button>

        </div>

      </Link>

      {/* Transactions */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">
            Recent Transactions
          </h3>

          <p className="text-purple-600 text-sm">
            View all
          </p>
        </div>

        <div className="space-y-3">

          <div className="bg-white rounded-2xl p-4 flex items-center justify-between shadow-sm">
            <div>
              <p className="font-medium">Swiggy</p>
              <p className="text-xs text-gray-500">
                Today
              </p>
            </div>

            <p className="font-semibold">
              -₹236
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 flex items-center justify-between shadow-sm">
            <div>
              <p className="font-medium">Netflix</p>
              <p className="text-xs text-gray-500">
                Yesterday
              </p>
            </div>

            <p className="font-semibold">
              -₹649
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 flex items-center justify-between shadow-sm">
            <div>
              <p className="font-medium">Amazon</p>
              <p className="text-xs text-gray-500">
                25 May
              </p>
            </div>

            <p className="font-semibold">
              -₹1299
            </p>
          </div>

        </div>
      </div>

      {/* Bottom Navigation */}

<div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg px-6 py-4 flex justify-around items-center z-50">

  <Link href="/">
    <div className="flex flex-col items-center">
      <p className="text-purple-600 text-xl">🏠</p>
      <p className="text-xs text-purple-600 font-semibold">
        Home
      </p>
    </div>
  </Link>

  <Link href="/results">
    <div className="flex flex-col items-center">
      <p className="text-gray-500 text-xl">💳</p>
      <p className="text-xs text-gray-500">
        Activity
      </p>
    </div>
  </Link>

  <Link href="/savings">
    <div className="flex flex-col items-center">
      <p className="text-gray-500 text-xl">🎁</p>
      <p className="text-xs text-gray-500">
        Offers
      </p>
    </div>
  </Link>

  <Link href="/profile">
    <div className="flex flex-col items-center">
      <p className="text-gray-500 text-xl">👤</p>
      <p className="text-xs text-gray-500">
        Profile
      </p>
    </div>
  </Link>


</div>

</main>
  );
}