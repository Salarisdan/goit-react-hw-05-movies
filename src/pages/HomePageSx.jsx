import { useTrendingList } from '../utils/hooks/TrendingList';
import { TrendingList } from 'components/TrendingList/TrendingListSx';

const HomePageSx = () => {

  const { trendingMovies }  = useTrendingList();
  return (
    <div>
      <TrendingList movies={trendingMovies} />
    </div>
  );
}
export default HomePageSx;