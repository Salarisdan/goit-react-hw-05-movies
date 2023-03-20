import { useParams } from 'react-router-dom';
import { useMovieCredits } from 'utils/hooks/useMovieCredits';
import PropTypes from 'prop-types';

const Cast = () => {
  const { movieId } = useParams();
  const { isLoading, moviesCast } = useMovieCredits(movieId);

  if (!isLoading && !moviesCast) {
    return null;
  }

  return (
    <div>
      <ul>
        {moviesCast.map(cast => (
          <li key={cast.id}>
            {cast.profile_path && (
              <img
                width={100}
                src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${cast.profile_path}`}
                alt={cast.name}
              />
            )}
            <p>{cast.name}</p>
            <p>Character: {cast.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

Cast.propTypes = {
  movieId: PropTypes.string,
};

export default Cast;
