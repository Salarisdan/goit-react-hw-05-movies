import { Outlet, Link, useParams, useLocation,  } from 'react-router-dom';
import { useMovieDetails } from 'utils/hooks/useMovieDetails';
import { Suspense,  } from 'react';



// const CastPage = lazy(() => import('./CastPage'));
// const ReviewsPage = lazy(() => import('./ReviewsPage'));
// const ErrorFallback = () => <div>Something went wrong...</div>;

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { movieDetails } = useMovieDetails(movieId);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <div>
      <Link to={backLinkHref}>
        <button type="button">Go back</button>
      </Link>

      <h2>
        {movieDetails.title} (
        {movieDetails.release_date
          ? movieDetails.release_date.substring(0, 4)
          : ''}
        )
      </h2>

      <img
        src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movieDetails.poster_path}`}
        alt="{movieDetails.original_title}"
      />

      <p>
        User Score:{' '}
        {movieDetails.vote_average
          ? Math.fround(movieDetails.vote_average * 10).toFixed(0)
          : ''}
        %
      </p>
      <h3>Overview</h3>
      <p>{movieDetails.overview}</p>

      <h4>Genres</h4>
      <p>
        {movieDetails.genres
          ? movieDetails.genres.map(genre => genre.name).join(' ')
          : ''}
      </p>

      <p>Additional information</p>

      <ul>
        <li>
          <Link to={`${movieId}/cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`${movieId}/reviews`}>Reviews</Link>
        </li>
      </ul>

      <Suspense fallback={<div>Loading...</div>} >
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
