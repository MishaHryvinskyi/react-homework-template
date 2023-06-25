import { Link, useLocation, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getSearchMovies } from "../../components/API/API";
import { MovieContainer, MovieList, MovieInput } from './Movies.styled';


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
      <MovieInput type="text" onChange={updateQueryString} />
      <MovieList>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link state={{ from: location }} to={`/movies/${movie.id}`}>
              {movie.title}
            </Link>
          </li>
        ))}
      </MovieList>
    </MovieContainer>
  );
};

export default Movies;