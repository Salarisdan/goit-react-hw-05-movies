import * as API from '../api/apiMoviedbSx';
import { useState, useEffect } from 'react';

export const useMovieCredits = (movieId) => {
  const [movieCredits, setMovieCredits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchMovieCredits() {
      setIsLoading(true);
      const credits = await API.getMovieCredits(movieId);
      setMovieCredits(credits);
      setIsLoading(false);
    }
    fetchMovieCredits();
  }, [movieId]);

  return { movieCredits, isLoading };
};

export const useMovieDetails = (movieId) => {
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchMovieDetails() {
      setIsLoading(true);
      const details = await API.getMovieDetails(movieId);
      setMovieDetails(details);
      setIsLoading(false);
    }
    fetchMovieDetails();
  }, [movieId]);

  return { movieDetails, isLoading };
};

