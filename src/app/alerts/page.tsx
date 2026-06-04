"use client";

import { Bell } from "lucide-react";

export default function AlertsPage() {

  const alerts = [

    {
      product: "iPhone 15",
      current: "₹59,999",
      target: "₹55,000",
    },

    {
      product: "Samsung S24",
      current: "₹68,999",
      target: "₹64,000",
    },

  ];

  return (

    <main className="min-h-screen bg-[#f7f7fb] p-4 pb-32">

      <div className="mb-8">

        <p className="text-sm text-gray-500 mb-2">
          Smart Notifications
        </p>

        <h1 className="text-4xl font-bold">
          Price Alerts
        </h1>

      </div>

      <div className="space-y-4">

        {alerts.map((alert, index) => (

          <div
            key={index}
            className="bg-white rounded-3xl p-5 shadow-sm"
          >

            <div className="flex justify-between items-start">

              <div className="flex gap-4">

                <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center">

                  <Bell className="text-purple-600" />

                </div>

                <div>

                  <h2 className="text-xl font-bold">
                    {alert.product}
                  </h2>

                  <p className="text-gray-500 mt-1">
                    Current: {alert.current}
                  </p>

                  <p className="text-green-600 text-sm mt-1">
                    Alert at {alert.target}
                  </p>

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

    </main>
  );
}