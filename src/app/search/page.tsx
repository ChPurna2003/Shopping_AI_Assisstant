"use client";

import { useState } from "react";
import {
  Sparkles,
  Search,
} from "lucide-react";

export default function SearchPage() {

  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  // FAKE AI FUNCTION
  const askAI = () => {

    const lower = message.toLowerCase();

    // IPHONE
    if (lower.includes("iphone")) {

      setReply(
        "📱 iPhone 15 currently has the best price on Amazon with bank cashback."
      );

    }

    // BIRYANI
    else if (lower.includes("biryani")) {

      setReply(
        "🍛 Mehfil Biryani gives the best deal under ₹250 with fastest delivery."
      );

    }

    // MOVIES
    else if (
      lower.includes("movie") ||
      lower.includes("interstellar") ||
      lower.includes("pushpa")
    ) {

      setReply(
        "🎬 Interstellar is trending now and BookMyShow gives the best cashback."
      );

    }

    // LAPTOP
    else if (
      lower.includes("laptop") ||
      lower.includes("macbook")
    ) {

      setReply(
        "💻 MacBook Air is best for students with excellent battery life and performance."
      );

    }

    // GROCERY
    else if (
      lower.includes("milk") ||
      lower.includes("rice") ||
      lower.includes("vegetables")
    ) {

      setReply(
        "🛒 Blinkit currently offers the fastest grocery delivery with best discounts."
      );

    }

    // DEFAULT
    else {

      setReply(
        "✨ Slice AI recommends comparing prices before purchase for maximum savings."
      );

    }

  };

  return (

    <main className="min-h-screen bg-[#f7f7fb] p-5 pb-32">

      {/* HEADER */}
      <div className="mb-8">

        <h1 className="text-4xl font-black">
          ✨ Ask Slice AI
        </h1>

        <p className="text-gray-500 mt-2 text-lg">
          Smart shopping assistant powered by AI
        </p>

      </div>

      {/* SEARCH BOX */}
      <div className="bg-white rounded-3xl p-4 shadow-sm">

        <div className="flex items-center gap-3">

          <Search
            size={24}
            className="text-gray-400"
          />

          <input
            type="text"
            value={message}
            onChange={(e) =>
              setMessage(e.target.value)
            }
            placeholder="Ask AI anything..."
            className="flex-1 outline-none text-lg"
          />

        </div>

      </div>

      {/* QUICK CHIPS */}
      <div className="flex gap-3 overflow-x-auto mt-5">

        <button
          onClick={() =>
            setMessage("Best iPhone under 40000")
          }
          className="bg-white px-4 py-2 rounded-full border whitespace-nowrap"
        >
          iPhone Deals
        </button>

        <button
          onClick={() =>
            setMessage("Best biryani under 250")
          }
          className="bg-white px-4 py-2 rounded-full border whitespace-nowrap"
        >
          Food Deals
        </button>

        <button
          onClick={() =>
            setMessage("Best movie this week")
          }
          className="bg-white px-4 py-2 rounded-full border whitespace-nowrap"
        >
          Movie Suggestions
        </button>

      </div>

      {/* ASK BUTTON */}
      <button
        onClick={askAI}
        className="w-full h-14 bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-2xl mt-6 text-lg font-bold shadow-lg"
      >

        ✨ Ask AI

      </button>

      {/* AI RESPONSE */}
      {reply && (

        <div className="bg-white rounded-3xl p-6 mt-6 shadow-sm">

          <div className="flex items-center gap-3 mb-4">

            <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center">

              <Sparkles
                size={24}
                className="text-purple-600"
              />

            </div>

            <div>

              <h2 className="text-2xl font-bold">
                Slice AI
              </h2>

              <p className="text-gray-500 text-sm">
                Smart Recommendation
              </p>

            </div>

          </div>

          <p className="text-gray-700 text-lg leading-relaxed">
            {reply}
          </p>

        </div>

      )}

    </main>

  );
}