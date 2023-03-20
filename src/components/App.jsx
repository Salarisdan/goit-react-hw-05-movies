import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayoutSx';

const HomePageSx = lazy(() => import('../pages/HomePageSx'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPageSx'));
const Movies = lazy(() => import('../pages/MoviesSx'));
const NotFound = lazy(() => import('../pages/NotFoundSx'));
const Cast = lazy(() => import('./Cast/CastSx'));
const Reviews = lazy(() => import('./Reviews/ReviewsSx'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePageSx />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};