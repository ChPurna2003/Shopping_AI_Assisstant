"use client";

import Link from "next/link";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-[#f7f7fb] p-4 pb-32">
      {/* Top Close */}
      <div className="mb-10">
        <Link href="/">
          <p className="text-5xl text-black cursor-pointer">
            ×
          </p>
        </Link>
      </div>

      {/* Profile */}
      <div className="flex flex-col items-center">

        {/* Image */}
        <img
          src="/profile.JPG"
          alt="profile"
          className="w-40 h-40 rounded-full object-cover mb-6"
        />

        {/* Name */}
        <h1 className="text-5xl font-bold mb-3">
          Purna Sai
        </h1>

        {/* Number */}
        <p className="text-2xl text-gray-500 mb-10">
          +91 9686901481
        </p>

        {/* Invite Button */}
        <button className="w-full bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white py-5 rounded-full text-2xl font-semibold shadow-lg mb-12">
          Invite & earn ₹500
        </button>

      </div>

      {/* Menu */}

      <div className="space-y-8 text-2xl">

        <div className="flex items-center gap-5">
          <span>⚡</span>
          <p>Action center</p>
        </div>

        <div className="flex items-center gap-5">
          <span>💳</span>
          <p>UPI settings</p>
        </div>

        <div className="flex items-center gap-5">
          <span>📄</span>
          <p>Pricing</p>
        </div>

        <div className="flex items-center gap-5">
          <span>⚙️</span>
          <p>App settings</p>
        </div>

        <div className="flex items-center gap-5">
          <span>💬</span>
          <p>Help & support</p>
        </div>

        <div className="flex items-center gap-5">
          <span>ℹ️</span>
          <p>About</p>
        </div>

      </div>

      {/* Version */}
      <div className="mt-20 text-center text-gray-400 text-lg">
        Version • 19.2.0 (1210)
      </div>

    </main>
  );
}