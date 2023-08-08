import { useParams, NavLink, Outlet, useLocation, Link } from 'react-router-dom';
import { useEffect, useState, Suspense, useRef } from 'react';
import css from './MovieDetails.module.css'
import Loader from '../../components/loader/Loader';

const KEY = '136e9303af57d83b29ddf02ef48e9efe';
const BASE_URL = `https://api.themoviedb.org/3/movie`;

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
      fetch(`${BASE_URL}/${movieId}?api_key=${KEY}&language=en-US`)
        .then(response => {
          return response.json();
        })
        .then(film => {
          if (!film) {
            return Promise.reject(
              new Error(`Oops, there is no movie with ID ${movieId}`)
            );
          }
          setMovie(film);
        })
        .catch(error => console.log(error));
  }, [movieId]);
  console.log(movie)

  const year = new Date(movie.release_date).getFullYear();
  if (!movie.status) {console.log(1)};

  return (
    <div className={css.container}>
      <Link to={backLinkHref.current} className={css.back}>
        Back to movies
      </Link>
      <article>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          className={css.poster}
        />
        <div>
          <h2>
            {movie.title} ({year})
          </h2>
          <p>User score: {Math.round(movie.vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{movie.genres?.map(genre => genre.name).join(' ')}</p>
        </div>
      </article>
      <div className={css.information}>
        <h4> Additional information</h4>
        <ul>
          <li key={movie.id}>
            <NavLink to={`/movies/${movie.id}/cast`}>Cast</NavLink>
          </li>
          <li key={movie.imdb_id}>
            <NavLink to={`/movies/${movie.imdb_id}/reviews`}>Reviews</NavLink>
          </li>
        </ul>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
