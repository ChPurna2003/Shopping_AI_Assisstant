export default function SavingsPage() {
  return (
    <main className="min-h-screen bg-[#f7f7fb] p-4 pb-28">

      <h1 className="text-3xl font-bold mb-6">
        Savings Dashboard
      </h1>

      {/* Total Savings Card */}
      <div className="bg-gradient-to-r from-purple-600 to-violet-500 rounded-3xl p-6 text-white mb-6">

        <p className="text-sm text-purple-100 mb-2">
          Total Savings
        </p>

        <h2 className="text-4xl font-bold">
          ₹2,340
        </h2>

      </div>

      {/* Savings List */}
      <div className="space-y-4">

        <div className="bg-white rounded-2xl p-4 shadow-sm flex justify-between">
          <p>Food Orders</p>

          <p className="font-semibold text-green-600">
            ₹740
          </p>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm flex justify-between">
          <p>Movie Tickets</p>

          <p className="font-semibold text-green-600">
            ₹620
          </p>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm flex justify-between">
          <p>Groceries</p>

          <p className="font-semibold text-green-600">
            ₹480
          </p>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm flex justify-between">
          <p>Electronics</p>

          <p className="font-semibold text-green-600">
            ₹500
          </p>
        </div>

      </div>

    </main>
  );
}