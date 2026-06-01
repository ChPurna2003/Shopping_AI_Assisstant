"use client";
export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-400 to-emerald-500 flex flex-col items-center justify-center p-6 text-white pb-28">

      <div className="bg-white text-green-500 w-24 h-24 rounded-full flex items-center justify-center text-5xl mb-8 shadow-xl">
        ✓
      </div>

      <h1 className="text-4xl font-bold mb-3">
        Booking Confirmed!
      </h1>

      <p className="text-center text-green-100 mb-8">
        Your tickets are booked successfully
      </p>

      <div className="bg-white text-black rounded-3xl p-6 w-full max-w-md shadow-lg">

        <h2 className="text-2xl font-bold mb-2">
          Avengers Endgame
        </h2>

        <p className="text-gray-500 mb-4">
          PVR Nexus Mall • IMAX 3D
        </p>

        <div className="flex justify-between mb-3">
          <p className="text-gray-500">Seats</p>
          <p className="font-semibold">G7, G8</p>
        </div>

        <div className="flex justify-between mb-3">
          <p className="text-gray-500">Booking ID</p>
          <p className="font-semibold">SLICE1245786</p>
        </div>

        <div className="bg-green-50 text-green-600 rounded-xl p-3 text-center font-medium mt-5">
          You saved ₹230 on this booking 🎉
        </div>

      </div>

      <button
        className="mt-8 bg-white text-green-600 px-8 py-4 rounded-2xl font-semibold shadow-lg"
        onClick={() => {
          window.location.href = "/";
        }}
      >
        Done
      </button>

    </main>
  );
}