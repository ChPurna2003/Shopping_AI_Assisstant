"use client";

export default function FoodPage() {

  const restaurants = [
    {
      name: "Mehfil Biryani",
      item: "Chicken Biryani",
      time: "30 mins",
      image: "/biryani.jpg",
      price: "210"
    },
    {
      name: "Burger King",
      item: "Whopper Meal",
      time: "25 mins",
      image: "/burger.jpg",
      price: "180"
    },
    {
      name: "Pizza Hut",
      item: "Farmhouse Pizza",
      time: "40 mins",
      image: "/pizza.jpg",
      price: "320"
    }
  ];

  return (
    <main className="min-h-screen bg-[#f7f7fb] p-4 pb-32">

      {/* HEADER */}
      <h1 className="text-4xl font-black mb-6">
        🍔 Food Delivery
      </h1>

      {/* CARDS */}
      <div className="space-y-6">

        {restaurants.map((food) => (

          <div
            key={food.name}
            className="bg-white rounded-3xl overflow-hidden shadow-sm"
          >

            {/* IMAGE */}
            <img
              src={food.image}
              alt={food.item}
              className="w-full h-64 object-contain bg-black"            />

            {/* CONTENT */}
            <div className="p-5">

              <div className="flex justify-between items-start">

                <div>

                  <h2 className="text-2xl font-bold">
                    {food.name}
                  </h2>

                  <p className="text-gray-500 mt-1">
                    {food.item}
                  </p>

                  <p className="text-green-600 text-sm mt-2">
                    🚴 Delivery in {food.time}
                  </p>

                </div>

                <div className="text-right">

                  <p className="text-2xl font-bold">
                    ₹{food.price}
                  </p>

                  <p className="text-sm text-green-600">
                    40% OFF
                  </p>

                </div>

              </div>

              {/* BUTTON */}
              <button
                onClick={() =>
                  window.location.href =
                    `/details?query=${encodeURIComponent(food.item)}&type=food&price=${food.price}`
                }
                className="w-full h-14 mt-5 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 text-white text-lg font-bold shadow-lg"
              >
                Order Now
              </button>

            </div>

          </div>

        ))}

      </div>

    </main>
  );
}