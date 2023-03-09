// import { useState, useEffect } from "react";
// import axios from "axios";
// import Head from "next/head";

// export default function Home() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [movies, setMovies] = useState([]);
//   const [showMore, setShowMore] = useState(false);
//   const [selectedMovie, setSelectedMovie] = useState(null);

//   const handleSearch = async (event) => {
//     event.preventDefault();
//     const response = await fetch(
//       `https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}&s=${searchTerm}`
//     );
//     const data = await response.json();
//     setMovies(data.Search || []);
//   };

//   const handleMovieClick = async (imdbID) => {
//     const response = await fetch(
//       `https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}&i=${imdbID}`
//     );
//     const data = await response.json();
//     setSelectedMovie(data);
//   };

//   return (
//     <div className="bg-sky-900 text-white">
//       <Head>
//         <link rel="stylesheet" href="/styles.css"></link>
//       </Head>
//       <div className="bg-sky-900 ">
//         <form
//           onSubmit={handleSearch}
//           className="flex items-center justify-center"
//         >
//           <input
//             type="text"
//             id="searchInput"
//             value={searchTerm}
//             onChange={(event) => setSearchTerm(event.target.value)}
//             className="px-4 py-2 border border-gray-400 rounded-lg w-64 text-black "
//           />
//           <button
//             type="submit"
//             className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700 focus:bg-blue-700 focus:outline-none transition duration-300 ease-in-out"
//           >
//             Search
//           </button>
//         </form>
//         <div className="flex flex-wrap overflow-x-auto whitespace-no-wrap max-w-screen-lg mx-auto">
//           {movies.slice(0, 2).map((movie) => (
//             <div
//               key={movie.imdbID}
//               className="inline-block w-full lg:w-1/2 h-96 m-4 p-4 border border-gray-300 box-border"
//               onClick={() => setSelectedMovie(movie)}
//             >
//               <div className="flex flex-col h-full">
//                 <img
//                   className="movie_poster w-full h-full object-cover mb-4"
//                   src={movie.Poster}
//                   alt={movie.Title}
//                 />
//                 <div className="flex justify-between">
//                   <h1 className="text-lg font-bold">{movie.Title}</h1>
//                   <p className="text-lg">{movie.Year}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         {movies.slice(2).length > 0 && (
//           <button
//             className="bg-blue-500 text-white px-4 py-2 rounded mt-4 mx-auto block"
//             onClick={() => setShowMore(!showMore)}
//           >
//             {showMore ? "Скрыть" : "Показать еще"}
//           </button>
//         )}
//         {showMore && (
//           <div className="flex flex-wrap overflow-x-auto whitespace-no-wrap max-w-screen-lg mx-auto">
//             {movies.slice(2).map((movie) => (
//               <div
//                 key={movie.imdbID}
//                 className="inline-block w-full lg:w-1/2 h-96 m-4 p-4 border border-gray-300 box-border"
//                 onClick={() => setSelectedMovie(movie)}
//               >
//                 <div className="flex flex-col h-full">
//                   <img
//                     className="movie_poster w-full h-full object-cover mb-4"
//                     src={movie.Poster}
//                     alt={movie.Title}
//                   />
//                   <div className="flex justify-between">
//                     <h1 className="text-lg font-bold">{movie.Title}</h1>
//                     <p className="text-lg">{movie.Year}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//         {selectedMovie && (
//           <div className="max-w-screen-lg mx-auto my-8">
//             <div className="flex flex-col md:flex-row">
//               <img
//                 className="movie_poster w-48 md:w-72 h-auto object-cover mb-4 md:mr-8"
//                 src={selectedMovie.Poster}
//                 alt={selectedMovie.Title}
//               />
//               <div className="flex-col justify-center">
//                 <h1 className="text-2xl font-bold mb-2">
//                   {selectedMovie.Title}
//                 </h1>
//                 <p className="text-xl mb-2">{selectedMovie.Year}</p>
//                 <p className="mb-4">{selectedMovie.Plot}</p>
//                 <p>
//                   <strong>Director:</strong> {selectedMovie.Director}
//                 </p>
//                 <p>
//                   <strong>Stars:</strong> {selectedMovie.Actors}
//                 </p>
//                 <p>
//                   <strong>Genre:</strong> {selectedMovie.Genre}
//                 </p>
//                 <p>
//                   <strong>IMDb Rating:</strong> {selectedMovie.imdbRating}
//                 </p>
//                 <button
//                   className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
//                   onClick={() => setSelectedMovie(null)}
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import axios from "axios";
import Head from "next/head";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSearch = async (event) => {
    event.preventDefault();
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}&s=${searchTerm}`
    );
    const data = await response.json();
    setMovies(data.Search || []);
  };

  const handleMovieClick = async (imdbID) => {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}&i=${imdbID}`
    );
    const data = await response.json();
    setSelectedMovie(data);
  };

  return (
    <div className="bg-sky-900 text-white">
      <Head>
        <link rel="stylesheet" href="/styles.css"></link>
      </Head>
      <div className="bg-sky-900 ">
        <form
          onSubmit={handleSearch}
          className="flex items-center justify-center my-8"
        >
          <input
            type="text"
            id="searchInput"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            className="px-4 py-2 border border-gray-400 rounded-lg w-64 text-black placeholder-gray-500"
            placeholder="Search movies"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md px-4 py-2 ml-4 hover:bg-blue-700 focus:bg-blue-700 focus:outline-none transition duration-300 ease-in-out"
          >
            Search
          </button>
        </form>
        <div className="flex flex-wrap overflow-x-auto whitespace-no-wrap max-w-screen-lg mx-auto">
          {movies.slice(0, 2).map((movie) => (
            <div
              key={movie.imdbID}
              className="inline-block w-full lg:w-1/2 h-96 m-4 p-4 border border-gray-300 box-border cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
              onClick={() => setSelectedMovie(movie)}
            >
              <div className="flex flex-col h-full">
                <img
                  className="movie_poster w-full h-full object-cover rounded-md mb-4"
                  src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"}
                  alt={movie.Title}
                />
                <div className="flex justify-between">
                  <h1 className="text-lg font-bold">{movie.Title}</h1>
                  <p className="text-lg">{movie.Year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {movies.slice(2).length > 0 && (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4 mx-auto block hover:bg-blue-700 focus:bg-blue-700 focus:outline-none transition duration-300 ease-in-out"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Скрыть" : "Показать еще"}
          </button>
        )}
        {showMore && (
          <div className="flex flex-wrap overflow-x-auto whitespace-no-wrap max-w-screen-lg mx-auto">
            {movies.slice(2).map((movie) => (
              <div
                key={movie.imdbID}
                className="inline-block w-full lg:w-1/2 h-96 m-4 p-4 border border-gray-300 box-border cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
                onClick={() => setSelectedMovie(movie)}
              >
                <div className="flex flex-col h-full">
                  <img
                    className="movie_poster w-full h-full object-cover rounded-md mb-4"
                    src={
                      movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"
                    }
                    alt={movie.Title}
                  />
                  <div className="flex justify-between">
                    <h1 className="text-lg font-bold">{movie.Title}</h1>
                    <p className="text-lg">{movie.Year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {selectedMovie && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center"
            onClick={() => setSelectedMovie(null)}
          >
            <div className="w-2/3 sm:w-1/2 lg:w-1/3 p-4 bg-gray-800 rounded-md">
              <div className="flex justify-end">
                <button
                  className="text-white text-xl font-bold focus:outline-none"
                  onClick={() => setSelectedMovie(null)}
                >
                  ×
                </button>
              </div>
              <div className="flex justify-center">
                <img
                  className="w-48 h-64 object-cover rounded-md mb-4"
                  src={
                    selectedMovie.Poster !== "N/A"
                      ? selectedMovie.Poster
                      : "/no-image.png"
                  }
                  alt={selectedMovie.Title}
                />
              </div>
              <h1 className="text-xl font-bold mb-2">{selectedMovie.Title}</h1>
              <p className="text-lg mb-4">{selectedMovie.Plot}</p>
              <div className="flex justify-between">
                <p className="text-lg font-bold">
                  <span className="text-gray-400">Year:</span>{" "}
                  {selectedMovie.Year}
                </p>
                <p className="text-lg font-bold">
                  <span className="text-gray-400">Genre:</span>{" "}
                  {selectedMovie.Genre}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-lg font-bold">
                  <span className="text-gray-400">Director:</span>{" "}
                  {selectedMovie.Director}
                </p>
                <p className="text-lg font-bold">
                  <span className="text-gray-400">Actors:</span>{" "}
                  {selectedMovie.Actors}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
