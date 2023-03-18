import * as API from '../api/apiMoviedb';
import { useState, useEffect } from 'react';

export const useMovieCredits = (movieId) => {
  const [movieCredits, setMovieCredits] = useState([]);

  useEffect(() => {
    async function fetchMovieCredits() {
      const credits = await API.getMovieCredits(movieId);
      setMovieCredits(credits);
    }
    fetchMovieCredits();
  }, [movieId]);

  return { movieCredits };
};
