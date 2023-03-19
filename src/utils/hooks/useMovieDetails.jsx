import * as API from '../api/apiMoviedb';
import { useState, useEffect } from 'react';

export const useMovieDetails = (movieId) => {
  const [movieDetails, setMovieDetails] = useState("");

  useEffect(() => {
    async function fetchMovieDetails() {
      const details = await API.getMovieDetails(movieId);
      setMovieDetails(details);
    }
    fetchMovieDetails();
  }, [movieId]);

  return { movieDetails };
};
