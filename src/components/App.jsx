import { useEffect,  } from 'react';
import { Switch, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import HomePage from '../pages/HomePage';
import MovieDetailsPage from '../pages/MovieDetailsPage';
import MoviesPage from '../pages/MoviesPage';
import NotFound from '../pages/NotFound';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

const App = () => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <Switch>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Switch>
  );
};

export default App;
