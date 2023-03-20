import { useTrendingList } from '../utils/hooks/TrendingList';
import { TrendingList } from '../components/TrendingList/TrendingListSx';

const HomePage = () => {
  const { trendingMovies } = useTrendingList();
  return (
    <div>
      <TrendingList movies={trendingMovies} />
    </div>
  );
};
export default HomePage;