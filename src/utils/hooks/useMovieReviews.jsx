import * as API from '../api/apiMoviedb';
import { useState, useEffect } from 'react';

export const useMovieReviews = (movieId) => {
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    async function fetchMovieReviews() {
      const reviews = await API.getMoviesReviews(movieId);
      setMovieReviews(reviews);
    }
    fetchMovieReviews();
  }, [movieId]);

  return { movieReviews };
};
