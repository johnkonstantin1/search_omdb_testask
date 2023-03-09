import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [showMore, setShowMore] = useState(false);

  const handleSearch = async (event) => {
    event.preventDefault();
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}&s=${searchTerm}`
    );
    const data = await response.json();
    setMovies(data.Search || []);
  };

  return (
    <div className="bg-sky-900 text-white">
      <Head>
        <link rel="stylesheet" href="/styles.css"></link>
      </Head>
      <div className="bg-sky-900 ">
        <form
          onSubmit={handleSearch}
          className="flex items-center justify-center"
        >
          <input
            type="text"
            id="searchInput"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            className="px-4 py-2 border border-gray-400 rounded-lg w-64 text-black "
          />
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700 focus:bg-blue-700 focus:outline-none transition duration-300 ease-in-out"
          >
            Search
          </button>
        </form>
        <div className="flex flex-wrap overflow-x-auto whitespace-no-wrap max-w-screen-lg mx-auto">
          {movies.slice(0, 2).map((movie) => (
            <div
              key={movie.imdbID}
              className="inline-block w-full lg:w-1/2 h-96 m-4 p-4 border border-gray-300 box-border"
            >
              <div className="flex flex-col h-full">
                <img
                  className="movie_poster w-full h-full object-cover mb-4"
                  src={movie.Poster}
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
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4 mx-auto block"
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
                className="inline-block w-full lg:w-1/2 h-96 m-4 p-4 border border-gray-300 box-border"
              >
                <div className="flex flex-col h-full">
                  <img
                    className="movie_poster w-full h-full object-cover mb-4"
                    src={movie.Poster}
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
      </div>
    </div>
  );
}
