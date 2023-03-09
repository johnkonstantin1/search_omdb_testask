import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function MovieDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}&i=${id}`);
      setMovie(response.data);
    }
    fetchData();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{movie.Title}</h1>
      <img src={movie.Poster} alt={movie.Title} />
      <p>Plot: {movie.Plot}</p>
      <p>Actors: {movie.Actors}</p>
      <p>Ratings:</p>
      <ul>
        {movie.Ratings.map((rating) => (
          <li key={rating.Source}>
            {rating.Source}: {rating.Value}
          </li>
        ))}
      </ul>
    </div>
  );
}
