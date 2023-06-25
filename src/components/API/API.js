import axios from 'axios';

const API_KEY = '0f1efce4687e0d99ded26e5d35e0a6b0';

export const getTrendsDayMovies = async () => {
  const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/day';
  const params = {
    api_key: API_KEY,
  };
  const moviesDayTrends = await axios.get(BASE_URL, { params });
  return moviesDayTrends;
};

export const getMoviesById = async movieId => {
  const BASE_URL = `https://api.themoviedb.org/3/movie/${movieId}`;
  const params = {
    api_key: API_KEY,
  };
  const moviesById = await axios.get(BASE_URL, { params });
  return moviesById;
};

export const getCast = async movieId => {
  const BASE_URL = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
  const params = {
    api_key: API_KEY,
  };
  const cast = await axios.get(BASE_URL, { params });
  return cast;
};

export const getReviews = async movieId => {
  const BASE_URL = `https://api.themoviedb.org/3/movie/${movieId}/reviews`;
  const params = {
    api_key: API_KEY,
  };
  const cast = await axios.get(BASE_URL, { params });
  return cast;
};

export const getSearchMovies = async querySearch => {
  const BASE_URL = `https://api.themoviedb.org/3/search/movie`;
  const params = {
    api_key: API_KEY,
    query: `${querySearch}`,
  };
  const movies = await axios.get(BASE_URL, { params });
  return movies;
};