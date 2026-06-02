"use client";

export default function MoviesPage() {

  const movies = [
    "Avengers Endgame",
    "Pushpa 2",
    "Kalki 2898 AD",
    "Interstellar"
  ];

  return (
    <main className="min-h-screen bg-[#f7f7fb] p-4 pb-32">

      <h1 className="text-3xl font-bold mb-6">
        🎬 Movies
      </h1>

      <div className="space-y-4">

        {movies.map((movie) => (
          <div
            key={movie}
            className="bg-white rounded-3xl p-5 shadow-sm"
          >

            <div className="flex justify-between items-center">

              <div>
                <h2 className="text-xl font-bold">
                  {movie}
                </h2>

                <p className="text-gray-500 text-sm">
                  IMAX • 4K • Telugu
                </p>
              </div>

              <button
                onClick={() =>
                  window.location.href =
                    `/results?query=${encodeURIComponent(movie)}`
                }
                className="bg-purple-600 text-white px-5 py-2 rounded-xl"
              >
                Book
              </button>

            </div>

          </div>
        ))}

      </div>

    </main>
  );
}