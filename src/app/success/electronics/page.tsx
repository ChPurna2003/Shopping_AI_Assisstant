"use client";

export default function ElectronicsPage() {

  const gadgets = [

    {
      name: "iPhone 15",
      brand: "Apple • A16 Bionic",
      price: "59999",
      image: "/iphone15.jpg",
    },

    {
      name: "MacBook Air",
      brand: "Apple M2 • 256GB",
      price: "94999",
      image: "/macbook.jpg",
    },

    {
      name: "Samsung S24",
      brand: "Galaxy AI • 256GB",
      price: "68999",
      image: "/s24.jpg",
    },

    {
      name: "Sony Headphones",
      brand: "WH-1000XM5",
      price: "19999",
      image: "/sony.jpg",
    },

  ];

  return (

    <main className="min-h-screen bg-[#f7f7fb] p-4 pb-32">

      {/* HEADER */}
      <div className="mb-8">

        <h1 className="text-4xl font-black">
          📱 Electronics
        </h1>

        <p className="text-gray-500 mt-2 text-lg">
          Compare prices across Amazon, Flipkart & more
        </p>

      </div>

      {/* PRODUCTS */}
      <div className="space-y-8">

        {gadgets.map((item) => (

          <div
            key={item.name}
            className="bg-white rounded-[32px] overflow-hidden shadow-lg"
          >

            {/* IMAGE */}
            <div className="bg-gray-100 flex justify-center items-center p-6">

              <img
                src={item.image}
                alt={item.name}
                className="h-64 object-contain"
              />

            </div>

            {/* CONTENT */}
            <div className="p-6">

              <div className="flex justify-between items-start">

                <div>

                  <h2 className="text-3xl font-bold">
                    {item.name}
                  </h2>

                  <p className="text-gray-500 mt-2 text-lg">
                    {item.brand}
                  </p>

                </div>

                <div className="text-right">

                  <p className="text-3xl font-black">
                    ₹{item.price}
                  </p>

                  <p className="text-green-600 text-sm mt-1">
                    Best Price
                  </p>

                </div>

              </div>

              {/* BUTTON */}
              <button
                onClick={() =>
                  window.location.href =
                    `/results?query=${encodeURIComponent(item.name)}&type=electronics&price=${item.price}`
                }
                className="w-full h-14 mt-6 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xl font-bold shadow-lg"
              >
                Compare Prices
              </button>

            </div>

          </div>

        ))}

      </div>

    </main>
  );
}