import React from 'react';
import '../styles/MovieCard.css';

const MovieCard = ({ movie, index }) => {
  const handleClick = () => {
   
    window.open(movie.redirectUrl, '_blank');
  };

  return (
    <div className={`movie-card ${index !== undefined ? 'trending-movie-card' : ''}`} onClick={handleClick}>
      {index !== undefined && (
        <div className="movie-rank">
          <span>{index + 1}</span>
        </div>
      )}
      <div className="movie-image">
        <img src={movie.image} alt={movie.title} />
      </div>
      {index === undefined && (
         <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>{movie.description}</p>
        </div>
      )}
    </div>
  );
};

export default MovieCard; 