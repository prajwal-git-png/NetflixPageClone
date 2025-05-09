import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import moviesData from '../data/movies.json';
import '../styles/MovieList.css';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(moviesData);
  }, []);

  return (
    <div className="movie-section trending-section">
      <h2>Trending Now</h2>
      <div className="movie-list">
        {movies.map((movie, idx) => (
          <MovieCard key={movie.id} movie={movie} index={idx} />
        ))}
      </div>
    </div>
  );
};

export default MovieList; 