import * as API from '../api/apiMoviedb';
import { useState, useEffect } from 'react';

export const useSearchMovies = (input) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const searchResults = await API.searchMovies(input);
      setMovies(searchResults);
    }
    fetchMovies();
  }, [input]);

  return { movies };
};
