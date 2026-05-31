"use client";

export default function PaymentPage() {
  return (
    <main className="min-h-screen bg-[#f7f7fb] p-4 pb-28">

      {/* Header */}
      <div className="mb-6">
        <p className="text-sm text-gray-500">
          Payment
        </p>

        <h1 className="text-3xl font-bold mt-1">
          Complete Payment
        </h1>
      </div>

      {/* Total Card */}
      <div className="bg-white rounded-3xl p-5 shadow-sm mb-6">

        <div className="flex justify-between items-center mb-3">
          <p className="text-gray-500">
            Total Payable
          </p>

          <p className="text-3xl font-bold">
            ₹420
          </p>
        </div>

        <div className="bg-green-50 text-green-600 rounded-xl px-3 py-2 text-sm font-medium inline-block">
          You saved ₹230 🎉
        </div>

      </div>

      {/* Recommended */}
      <div className="mb-6">

        <h2 className="text-lg font-semibold mb-4">
          Recommended
        </h2>

        <div className="bg-white rounded-3xl p-5 border-2 border-purple-500 shadow-sm">

          <div className="flex items-center justify-between">

            <div>
              <h3 className="font-semibold text-lg">
                slice UPI
              </h3>

              <p className="text-sm text-gray-500">
                Pay with slice balance or linked bank
              </p>
            </div>

            <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white"></div>
            </div>

          </div>

        </div>

      </div>

      {/* Other Options */}
      <div>

        <h2 className="text-lg font-semibold mb-4">
          Other Payment Methods
        </h2>

        <div className="space-y-4">

          <div className="bg-white rounded-2xl p-4 shadow-sm flex justify-between">
            <p>UPI Apps</p>
            <p>→</p>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm flex justify-between">
            <p>Credit / Debit Cards</p>
            <p>→</p>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm flex justify-between">
            <p>Net Banking</p>
            <p>→</p>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm flex justify-between">
            <p>Wallets</p>
            <p>→</p>
          </div>

        </div>

      </div>

      {/* Pay Button */}
      <button
        onClick={() => {
          window.location.href = "/processing";
        }}
        className="fixed bottom-6 left-4 right-4 bg-gradient-to-r from-purple-600 to-violet-500 text-white py-4 rounded-2xl font-semibold shadow-lg"
      >
        Pay ₹420 Securely
      </button>

    </main>
  );
}