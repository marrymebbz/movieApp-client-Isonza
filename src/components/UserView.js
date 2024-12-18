import { useState, useEffect } from 'react';
import { MovieList } from './MovieCard';

export default function UserView({ moviesData }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Check if moviesData is an array before filtering
    if (Array.isArray(moviesData)) {
      const activeMovies = moviesData.filter(movie => movie.isActive);
      setMovies(activeMovies);
    } else {
      console.error("Expected moviesData to be an array, but got:", moviesData);
      setMovies([]); // Optionally, set to an empty array if moviesData is invalid
    }
  }, [moviesData]);

  return (
    <>
      <MovieList movies={movies} />
    </>
  );
}
