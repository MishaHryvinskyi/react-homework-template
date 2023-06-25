import React, { useState } from 'react';
import { getSearchMovies } from '../API/API';

const SearchMovies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const searchMovies = async () => {
    try {
      const response = await getSearchMovies(query);
      const moviesData = response.data.results;
      setMovies(moviesData);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    searchMovies();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchMovies;