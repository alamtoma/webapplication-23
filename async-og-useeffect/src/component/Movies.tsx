import React from 'react';
import Movie from './Movie';


const Movies = ({ movies }) => {
  return (
    <div className="movies">
      {movies.map((movie, index) => (
        <Movie key={index} movie={movie} />
      ))}
    </div>
  );
};

export default Movies;
