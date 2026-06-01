"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, CheckCircle } from "lucide-react";

export default function ProcessingPage() {

  const router = useRouter();

  const [step, setStep] = useState(0);

  const steps = [
    "Verifying Payment",
    "Applying Best Offers",
    "Confirming Booking",
    "Generating Ticket",
  ];

  useEffect(() => {

    const interval = setInterval(() => {

      setStep((prev) => {

        if (prev < steps.length - 1) {
          return prev + 1;
        }

        clearInterval(interval);

        setTimeout(() => {
          router.push("/success");
        }, 1000);

        return prev;

      });

    }, 1500);

    return () => clearInterval(interval);

  }, [router, steps.length]);

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-6 pb-28">

      {/* Loader */}
      <div className="w-28 h-28 rounded-full bg-gradient-to-r from-purple-600 to-violet-500 flex items-center justify-center mb-8 shadow-xl">

        <Loader2
          className="text-white animate-spin"
          size={42}
        />

      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-3 text-center">
        Processing Payment
      </h1>

      <p className="text-gray-500 mb-10 text-center">
        Please wait while we confirm your booking...
      </p>

      {/* Steps */}
      <div className="w-full max-w-md space-y-4">

        {steps.map((item, index) => (

          <div
            key={index}
            className="flex items-center justify-between bg-gray-50 rounded-2xl p-4 border"
          >

            <p
              className={`font-medium ${
                index <= step
                  ? "text-black"
                  : "text-gray-400"
              }`}
            >
              {item}
            </p>

            {index < step ? (

              <CheckCircle className="text-green-500" />

            ) : index === step ? (

              <Loader2 className="animate-spin text-purple-600" />

            ) : (

              <div className="w-5 h-5 rounded-full border border-gray-300" />

            )}

          </div>

        ))}

      </div>

      {/* Bottom Text */}
      <p className="text-sm text-gray-400 mt-10 text-center">
        AI is finding and applying the best available offers for you
      </p>

    </main>
  );
}