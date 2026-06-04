"use client";

export default function ElectronicsPage() {

  const gadgets = [

    {
      name: "iPhone 15",
      image: "/iphone15.jpg",
    },

    {
      name: "Samsung S24",
      image: "/s24.jpg",
    },

    {
      name: "MacBook Air",
      image: "/macbook.jpg",
    },

    {
      name: "Sony Headphones",
      image: "/sony.jpg",
    },

  ];

  return (

    <main className="min-h-screen bg-[#f7f7fb] p-4 pb-32">

      {/* HEADER */}
      <h1 className="text-4xl font-bold mb-8">
        📱 Electronics
      </h1>

      {/* PRODUCTS */}
      <div className="space-y-6">

        {gadgets.map((item) => (

          <div
            key={item.name}
            className="bg-white rounded-3xl overflow-hidden shadow-sm"
          >

            {/* IMAGE */}
            <div className="bg-gray-100 flex justify-center items-center p-6">

              <img
                src={item.image}
                alt={item.name}
                className="h-52 object-contain"
              />

            </div>

            {/* CONTENT */}
            <div className="p-5">

              <div className="flex justify-between items-center">

                <div>

                  <h2 className="text-2xl font-bold">
                    {item.name}
                  </h2>

                  <p className="text-gray-500 mt-1">
                    Cashback available
                  </p>

                </div>

              

              </div>

              {/* BUTTON */}
              <button
                onClick={() =>
                  window.location.href =
                    `/results?query=${encodeURIComponent(item.name)}&type=electronics&price=39999`
                }
                className="w-full h-14 mt-5 bg-blue-500 text-white rounded-2xl text-lg font-semibold"
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