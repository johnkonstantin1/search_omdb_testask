import { useState, useEffect } from "react";
import axios from "axios";
import Head from "next/head";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}&s=${searchTerm}`
    );
    const data = await response.json();
    setMovies(data.Search || []);
  };

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/styles.css"></link>
      </Head>
      <div>
        <form onSubmit={handleSearch} className ="flex items-center justify-center">
          <input
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            className = "px-4 py-2 border border-gray-400 rounded-lg w-64"
          />
          <button type="submit" className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700 focus:bg-blue-700 focus:outline-none transition duration-300 ease-in-out">
            Search
          </button>
        </form>
        <div className="movie_list">
          {movies.map((movie) => (
            <div key={movie.imdbID} className="movie_item">
              <h1>{movie.Title}</h1>
              <p>Year:{movie.Year}</p>
              <img className="movie_poster" src={movie.Poster}></img>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
