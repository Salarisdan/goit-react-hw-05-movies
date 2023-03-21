import { useParams } from 'react-router-dom';
import { useMovieCredits } from 'utils/hooks/MovieCredits';

const Cast = () => {
  const { movieId } = useParams();
  const { movieCredits } = useMovieCredits(movieId);

  return (
    <div>
      <h2>Cast</h2>
      {movieCredits.map((credit) => (
        <div key={credit.id}>
          <img
            src={`https://image.tmdb.org/t/p/w200/${credit.profile_path}`}
            alt={credit.name}
          />
          <p>{credit.name}</p>
          <p>Character: {credit.character}</p>
        </div>
      ))}
    </div>
  );
};

export default Cast;
