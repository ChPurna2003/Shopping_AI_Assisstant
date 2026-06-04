"use client";

export default function MoviesPage() {

  const movies = [

    {
      name: "Avengers Endgame",
      image: "/movies/avengers.jpg",
    },

    {
      name: "Pushpa 2",
      image: "/movies/pushpa2.jpg",
    },

    {
      name: "Kalki 2898 AD",
      image: "/movies/kalki.jpg",
    },

    {
      name: "Interstellar",
      image: "/movies/interstellar.jpg",
    },

  ];

  return (

    <main className="min-h-screen bg-[#f7f7fb] p-4 pb-32">

      {/* HEADER */}
      <div className="mb-8">

        <h1 className="text-4xl font-bold">
          🎬 Movies
        </h1>

        <p className="text-gray-500 mt-2">
          Best ticket deals powered by Slice AI
        </p>

      </div>

      {/* MOVIES */}
      <div className="space-y-8">

        {movies.map((movie) => (

          <div
            key={movie.name}
            className="bg-white rounded-[32px] overflow-hidden shadow-lg"
          >

            {/* POSTER */}
            <div className="relative">

              <img
                src={movie.image}
                alt={movie.name}
                className="w-full h-64 object-contain bg-black"
               />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              {/* MOVIE INFO OVER IMAGE */}
              <div className="absolute bottom-5 left-5">

                <h2 className="text-3xl font-bold text-white mb-1">
                  {movie.name}
                </h2>

                <p className="text-gray-200">
                  IMAX • 4K • Dolby Atmos
                </p>

              </div>

            </div>

            {/* BUTTON */}
            <div className="p-5">

              <button
                onClick={() =>
                  window.location.href =
                    `/results?query=${encodeURIComponent(movie.name)}&type=movie`
                }
                className="w-full h-14 bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-2xl text-lg font-semibold shadow-md"
              >
                Book Now
              </button>

            </div>

          </div>

        ))}

      </div>

    </main>
  );
}