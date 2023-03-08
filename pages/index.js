import { useState, useEffect } from 'react';
import axios from 'axios';

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
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button type="submit" className='button-submit'>Search</button>
      </form>
      <div className='movie--list'>
        {movies.map((movie) => (
          <div key={movie.imdbID} className='movie--item'>
            <h1>{movie.Title}</h1>
            <p>Year:{movie.Year}</p>
            <img src={movie.Poster}></img>
          </div>
        ))}
      </div>
    </div>
  );
}
