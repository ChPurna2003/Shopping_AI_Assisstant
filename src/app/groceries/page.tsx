"use client";

export default function GroceriesPage() {

  const groceries = [
    "Milk",
    "Rice Bag",
    "Eggs",
    "Vegetables",
    "Cold Drinks"
  ];

  return (
    <main className="min-h-screen bg-[#f7f7fb] p-4 pb-32">

      <h1 className="text-3xl font-bold mb-6">
        🛒 Groceries
      </h1>

      <div className="grid grid-cols-2 gap-4">

        {groceries.map((item) => (
          <div
            key={item}
            className="bg-white rounded-3xl p-6 shadow-sm text-center"
          >

            <h2 className="font-bold text-lg mb-4">
              {item}
            </h2>

            <button
              onClick={() =>
                window.location.href =
                  `/results?query=${encodeURIComponent(item)}`
              }
              className="bg-green-500 text-white px-4 py-2 rounded-xl"
            >
              Compare
            </button>

          </div>
        ))}

      </div>

    </main>
  );
}