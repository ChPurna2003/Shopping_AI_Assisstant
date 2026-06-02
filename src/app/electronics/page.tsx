"use client";

export default function ElectronicsPage() {

  const gadgets = [
    "iPhone 15",
    "Samsung S24",
    "MacBook Air",
    "Sony Headphones"
  ];

  return (
    <main className="min-h-screen bg-[#f7f7fb] p-4 pb-32">

      <h1 className="text-3xl font-bold mb-6">
        📱 Gadgets
      </h1>

      <div className="space-y-4">

        {gadgets.map((item) => (
          <div
            key={item}
            className="bg-white rounded-3xl p-5 shadow-sm"
          >

            <div className="flex justify-between items-center">

              <div>

                <h2 className="font-bold text-xl">
                  {item}
                </h2>

                <p className="text-gray-500 text-sm">
                  Cashback available
                </p>

              </div>

              <button
                onClick={() =>
                  window.location.href =
                    `/results?query=${encodeURIComponent(item)}`
                }
                className="bg-blue-500 text-white px-5 py-2 rounded-xl"
              >
                Compare
              </button>

            </div>

          </div>
        ))}

      </div>

    </main>
  );
}