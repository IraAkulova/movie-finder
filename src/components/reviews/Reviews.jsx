import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import css from './Reviews.module.css';

const KEY = '136e9303af57d83b29ddf02ef48e9efe';
const BASE_URL = `https://api.themoviedb.org/3/movie`;

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetch(`${BASE_URL}/${movieId}/reviews?api_key=${KEY}&language=en-US`)
      .then(response => {
        return response.json();
      })
      .then(film => {
        if (!film) {
          return Promise.reject(
            new Error(`Oops, there is no movie with ID ${movieId}`)
          );
        };
        setReviews(film.results);
      })
      .catch(error => setError(error));
  }, [movieId]);
  console.log(reviews);

  return (
    <div className={css.reviews}>
      {error && <h2>{error.message}</h2>}
      <h2>Reviews</h2>
      <ul className={css.reviewsList}>
        {reviews.length !== 0 ? (
          reviews.map(review => (
            <li key={review.id}>
              <p>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          ))
        ) : (
          <p>Sorry, we don't have any reviews </p>
        )}
      </ul>
    </div>
  );
};

export default Reviews;