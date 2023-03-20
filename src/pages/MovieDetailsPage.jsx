import { Link, Outlet, useParams,  } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useMovieDetails } from 'utils/hooks/useMovieDetails';

const MovieDetailsPage = ({ location }) => {
  const { movieId } = useParams();
  const { movieDetails, isLoading } = useMovieDetails(movieId);
  const { from } = location.state || {};
  const backLinkHref = from || '/';

  const getReleaseYear = () => {
    if (movieDetails.release_date) {
      return movieDetails.release_date.substring(0, 4);
    }
    return '';
  };

  const getVotePercentage = () => {
    if (movieDetails.vote_average) {
      return Math.round(movieDetails.vote_average * 10).toFixed(0) + '%';
    }
    return '';
  };

  return (
    <div>
      <Link to={backLinkHref}>
        <button type="button">Go back</button>
      </Link>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h2>
            {movieDetails.title} ({getReleaseYear()})
          </h2>

          <img
            src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movieDetails.poster_path}`}
            alt={movieDetails.original_title}
          />

          <p>User Score: {getVotePercentage()}</p>
          <h3>Overview</h3>
          <p>{movieDetails.overview}</p>

          <h4>Genres</h4>
          <p>{movieDetails.genres?.map((genre) => genre.name).join(' ')}</p>

          <p>Additional information</p>
          <ul>
            <li>
              <Link to={`${movieId}/cast`}>Cast</Link>
            </li>
            <li>
              <Link to={`${movieId}/reviews`}>Reviews</Link>
            </li>
          </ul>

          <Outlet />
        </>
      )}
    </div>
  );
};

MovieDetailsPage.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      from: PropTypes.string,
    }),
  }),
};

MovieDetailsPage.defaultProps = {
  location: {
    state: {
      from: '/',
    },
  },
};

export default MovieDetailsPage;
