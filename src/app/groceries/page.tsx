"use client";

export default function GroceryPage() {

  const groceries = [
    {
      name: "Fresh Milk",
      brand: "Amul Taaza",
      time: "10 mins",
      image: "/milk.jpg",
      price: "60"
    },
    {
      name: "Farm Eggs",
      brand: "12 Eggs Pack",
      time: "12 mins",
      image: "/eggs.jpg",
      price: "95"
    },
    {
      name: "Rice Bag",
      brand: "India Gate 25kg",
      time: "20 mins",
      image: "/rice.jpg",
      price: "1299"
    },
    {
      name: "Fresh Vegetables",
      brand: "Tomato, Onion, Potato",
      time: "15 mins",
      image: "/vegetables.jpg",
      price: "220"
    },
    {
      name: "Cold Drinks",
      brand: "Coke & Pepsi Combo",
      time: "8 mins",
      image: "/colddrink.jpg",
      price: "140"
    }
  ];

  return (
    <main className="min-h-screen bg-[#f7f7fb] p-4 pb-32">

      {/* HEADER */}
      <h1 className="text-4xl font-black mb-6">
        🛒 Groceries
      </h1>

      {/* ITEMS */}
      <div className="space-y-6">

        {groceries.map((item) => (

          <div
            key={item.name}
            className="bg-white rounded-3xl overflow-hidden shadow-sm"
          >

            {/* IMAGE */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-64 object-contain bg-black"
            />

            {/* CONTENT */}
            <div className="p-5">

              <div className="flex justify-between items-start">

                <div>

                  <h2 className="text-2xl font-bold">
                    {item.name}
                  </h2>

                  <p className="text-gray-500 mt-1">
                    {item.brand}
                  </p>

                  <p className="text-green-600 text-sm mt-2">
                    ⚡ Delivery in {item.time}
                  </p>

                </div>

                <div className="text-right">

                  <p className="text-2xl font-bold">
                    ₹{item.price}
                  </p>

                  <p className="text-sm text-green-600">
                    Best Deal
                  </p>

                </div>

              </div>

              {/* BUTTON */}
              <button
                onClick={() =>
                  window.location.href =
                    `/details?query=${encodeURIComponent(item.name)}&type=grocery&price=${item.price}`
                }
                className="w-full h-14 mt-5 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white text-lg font-bold shadow-lg"
              >
                Buy Now
              </button>

            </div>

          </div>

        ))}

      </div>

    </main>
  );
}