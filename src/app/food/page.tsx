"use client";

export default function FoodPage() {

  const restaurants = [
    {
      name: "Mehfil Biryani",
      item: "Chicken Biryani",
      time: "30 mins",
      price: 210,
    },
    {
      name: "Burger King",
      item: "Whopper Meal",
      time: "25 mins",
      price: 220,
    },
    {
      name: "Pizza Hut",
      item: "Farmhouse Pizza",
      time: "40 mins",
      price: 340,
    }
  ];

  return (
    <main className="min-h-screen bg-[#f7f7fb] p-4 pb-32">

      <h1 className="text-3xl font-bold mb-6">
        🍔 Food Delivery
      </h1>

      <div className="space-y-4">

        {restaurants.map((food) => (
          <div
            key={food.name}
            className="bg-white rounded-3xl p-5 shadow-sm"
          >

            <div className="flex justify-between items-center">

              <div>

                <h2 className="text-xl font-bold">
                  {food.name}
                </h2>

                <p className="text-gray-500">
                  {food.item}
                </p>

                <p className="text-sm text-green-600">
                  {food.time}
                </p>

                <p className="text-lg font-bold mt-1">
                  ₹{food.price}
                </p>

              </div>

              <button
                onClick={() =>
                  window.location.href =
                    `/results?query=${encodeURIComponent(food.item)}&type=food&price=${food.price}`
                }
                className="bg-orange-500 text-white px-5 py-2 rounded-xl"
              >
                Order
              </button>

            </div>

          </div>
        ))}

      </div>

    </main>
  );
}