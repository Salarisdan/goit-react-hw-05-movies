import * as API from '../api/apiMoviedbSx';
import { useState, useEffect } from 'react';

export const useTrendingList = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function fetchTrendingMovies() {
      const trendingResults = await API.getTrending();
      setTrendingMovies(trendingResults);
    }
    fetchTrendingMovies();
  }, []);

  return { trendingMovies };
};
