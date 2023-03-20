import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { TrendingList } from './SearchFormSx';
import * as API from '../../utils/api/apiMoviedb';

export const SearchForm = () => {
  // Initialize state variables for movie search results and search parameters
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  // Function to handle form submission
  const handleSubmit = e => {
    // Set search parameters based on input field value and prevent default form submission behavior
    setSearchParams({ query: e.target[0].value });
    e.preventDefault();
  };

  // Effect hook to fetch search results when search parameters change
  useEffect(() => {
    const movieTitle = searchParams.get('query');
    if (movieTitle) {
      API.searchMovies(movieTitle).then(ret => setMovies(ret));
    }
  }, [searchParams]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search..."></input>
        <button type="submit">Search</button>
      </form>
      {/* Render a list of trending movies or search results */}
      <TrendingList movies={movies} />
    </div>
  );
};
