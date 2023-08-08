import { Routes, Route } from 'react-router-dom';
import { lazy} from 'react';

const SharedLayout = lazy(() => import('./components/sharedLayout/SharedLayout'));
const Home = lazy(() => import('./pages/Home'));
const Movies = lazy(() => import('./pages/Movies'));
const NotFound = lazy(() => import('./pages/NotFound'));
const MovieDetails = lazy(() => import('./components/movieDetails/MovieDetails'));
const Cast = lazy(() => import('./components/cast/Cast'));
const Reviews = lazy(() => import('./components/reviews/Reviews'));

const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies/:movieId" element={<MovieDetails />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
