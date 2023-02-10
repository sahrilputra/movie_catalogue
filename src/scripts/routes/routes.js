import NowPlaying from '../views/pages/now-playing';
import Upcoming from '../views/pages/upcoming';
import Detail from '../views/pages/detail';

const routes = {
  '/': NowPlaying, // default Page
  '/now-playing': NowPlaying,
  '/upcoming': Upcoming,
  '/detail/:id': Detail,
};
console.log(routes);
export default routes;
