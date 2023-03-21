import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayoutSx';

const HomePageSx = lazy(() => import('../pages/HomePageSx'));
const MovieDetailsPage = lazy(() =>import( '../pages/MovieDetailsPageSx' /* webpackChunkName: "movie-details-page-sx" */));
const Movies = lazy(() => import('../pages/MoviesSx'));
const NotFound = lazy(() => import('../pages/NotFoundSx'));
const Cast = lazy(() => import('./Cast/CastSx' /* webpackChunkName: "cast-sx" */));
const Reviews = lazy(() => import('./Reviews/ReviewsSx' /* webpackChunkName: "reviews-sx" */));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePageSx />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
