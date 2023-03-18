import axios from 'axios';

const API_KEY = 'f864ef6a91b9e0820f1a60a4087912c5';
const BASE_URL =
  'https://api.themoviedb.org/3/movie/550?api_key=f864ef6a91b9e0820f1a60a4087912c5';

axios.defaults.baseURL = BASE_URL;

export const getTrending = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  const movies = response.data.results.map(({ id, title }) => ({ id, title }));
  return movies;
};

export const searchMovies = async inputValue => {
  const response = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${inputValue}&language=en-US&page=1`
  );
  const movies = response.data.results.map(({ id, title }) => ({ id, title }));
  return movies;
};

export const getMovieDetails = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  const movie = response.data;
  return movie;
};

export const getMovieCredits = async moviesId => {
  const response = await axios.get(
    `/movie/${moviesId}/credits?api_key=${API_KEY}&language=en-US`
  );
  const credits = response.data.cast.map(
    ({ name, character, profile_path, id }) => ({
      name,
      character,
      profile_path,
      id,
    })
  );
  return credits;
};

export const getMoviesReviews = async moviesId => {
  const response = await axios.get(
    `/movie/${moviesId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  const reviews = response.data.results.map(({ author, content, id }) => ({
    author,
    content,
    id,
  }));
  return reviews;
};
