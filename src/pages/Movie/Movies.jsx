import { Link, useLocation, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getSearchMovies } from "../../components/API/API";
import { MovieContainer, MovieList, MovieInput, MovieListItem } from './Movies.styled';


const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const movieId = searchParams.get("movieId") ?? "";

  const updateQueryString = (e) => {
    const movieIdValue = e.target.value;
    if (movieIdValue === "") {
      return setSearchParams({});
    }
    setSearchParams({ movieId: movieIdValue });
  };

  useEffect(() => {
    const searchMovies = async () => {
      try {
        const response = await getSearchMovies(movieId);
        const moviesData = response.data.results;
        setMovies(moviesData);
      } catch (error) {
        console.error("Error searching movies:", error);
      }
    };

    searchMovies();
  }, [movieId]);

  return (
    <MovieContainer>
      <MovieInput 
        type="text" 
        onChange={updateQueryString} 
        placeholder="enter movie" 
      />
      <MovieList>
        {movies.map((movie) => (
          <MovieListItem key={movie.id}>
            <Link 
              state={{ from: location }} 
              to={`/movies/${movie.id}`} 
              style={{ 
                color: '#f3cba5', 
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {movie.title}
            </Link>
          </MovieListItem>
        ))}
      </MovieList>
    </MovieContainer>
  );
};

export default Movies;