import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const KEY = '136e9303af57d83b29ddf02ef48e9efe';
const BASE_URL = `https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`;

const Home = () => {
  const location = useLocation();
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);
  
    useEffect(() => {
    fetch(`${BASE_URL}`)
      .then(response => response.json())
      .then(films => {
        if (films.results.length === 0) {
          return Promise.reject(new Error(`Oops, there is no trending movies`));
        };
        setFilms(films.results)
      })
      .catch(error => setError(error));
    }, []);
    
    return (
      <div>
        {error && films.length === 0 && <h2>{error.message}</h2>}
        <div>
          <h2>Trending today</h2>
          {films.length > 0 &&
            (<ul>
              {films.map(film => {
                return (
                  <li key={film.id}>
                    <Link to={`movies/${film.id}`} state={{ from: location }}>
                      {film.title || film.name}
                    </Link>
                  </li>
                );
              })}
            </ul>)}
        </div>
      </div>
    );
};

export default Home;