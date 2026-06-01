"use client";

import Link from "next/link";

export default function PaymentPage() {

  return (

    <main className="min-h-screen bg-[#f7f7fb] p-4 pb-40">

      {/* slice UPI */}
      <div className="bg-white rounded-3xl p-5 shadow-sm border-2 border-blue-500 mb-6">

        <div className="flex justify-between items-center">

          <div>

            <h2 className="text-2xl font-bold">
              slice UPI
            </h2>

            <p className="text-gray-500 mt-1">
              Pay with slice balance or linked bank
            </p>

          </div>

          <div className="w-6 h-6 rounded-full border-4 border-blue-500"></div>

        </div>

      </div>

      {/* Other Methods */}
      <h2 className="text-2xl font-bold mb-4">
        Other Payment Methods
      </h2>

      <div className="space-y-4">

        <div className="bg-white rounded-2xl p-5 shadow-sm flex justify-between">
          <p className="font-medium">UPI Apps</p>
          <p>→</p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm flex justify-between">
          <p className="font-medium">Credit / Debit Cards</p>
          <p>→</p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm flex justify-between">
          <p className="font-medium">Net Banking</p>
          <p>→</p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm flex justify-between">
          <p className="font-medium">Wallets</p>
          <p>→</p>
        </div>

      </div>

      {/* Security Box */}
      <div className="bg-green-50 border border-green-200 rounded-2xl p-4 mt-6">

        <p className="text-green-700 font-medium">
          🔒 100% Secure Payments powered by slice
        </p>

      </div>

      {/* Bottom Pay Button */}
      <div className="fixed bottom-20 left-4 right-4 z-50">

        <Link href="/processing">

          <button className="w-full h-14 bg-gradient-to-r from-purple-600 to-violet-500 text-white rounded-2xl font-semibold shadow-lg">

            Pay ₹420 Securely

          </button>

        </Link>

      </div>

    </main>
  );
}