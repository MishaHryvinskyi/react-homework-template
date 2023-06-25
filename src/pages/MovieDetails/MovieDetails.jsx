import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link, useLocation, NavLink } from 'react-router-dom';
import { getMoviesById, getCast, getReviews } from '../../components/API/API';
import Reviews from '../../components/Reviews/Review';
import Cast from '../../components/Cast/Cast';
import { 
  ContainerMovie, 
  MovieTitle,
  MovieImg,
  ContainerWrap,
  ParagraphMovie,
  ItemLink,
  ListLink,
  ContainerLink
 } from './MovieDetails.styled';

const linkStyle = {
  color: '#f3cba5',
  textDecoration: 'none',
  fontSize: '20',
  fontWeight: '600',
  padding: '10px'
};

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const [movieDetails, setMovieDetails] = useState(null);
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [showCast, setShowCast] = useState(false);
  const [showReviews, setShowReviews] = useState(false); 

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieResponse = await getMoviesById(movieId);
        setMovieDetails(movieResponse.data);
      } catch (error) {
        console.log('Помилка отримання деталей фільму:', error);
      }
    };

    const fetchCast = async () => {
      try {
        const castResponse = await getCast(movieId);
        setCast(castResponse.data.cast);
      } catch (error) {
        console.log('Помилка отримання акторського складу:', error);
      }
    };

    const fetchReviews = async () => {
      try {
        const reviewsResponse = await getReviews(movieId);
        setReviews(reviewsResponse.data.results);
      } catch (error) {
        console.log('Помилка отримання відгуків:', error);
      }
    };

    fetchMovieDetails();
    if (showCast) {
      fetchCast();
    }
    if (showReviews) { 
      fetchReviews();
    }
  }, [movieId, showCast, showReviews]); 

  const handleShowCast = () => {
    setShowCast(true);
  };

  const handleShowReviews = () => {
    setShowReviews(true); 
  };

  return (
    <div>
      <ContainerLink>
        <Link 
          to={backLinkLocationRef.current} 
          style={{ 
            color: '#453953', 
            textDecoration: 'none',
            padding: '10px',
            backgroundColor: '#f3cba5',
            width: '100px',
            fontSize: '20px',
            fontWeight: '600',
            borderRadius: '10px',
            textAlign: 'center' 
            }}>
              Back
        </Link>
      </ContainerLink>
      {movieDetails ? (
        <ContainerMovie>
            <MovieImg
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              alt={movieDetails.title}
            />
          <ContainerWrap>
          <MovieTitle>{movieDetails.title}</MovieTitle>
            <ParagraphMovie><b>Review:</b> {movieDetails.overview}</ParagraphMovie>
            <ParagraphMovie><b>Rating:</b>Rating: {movieDetails.vote_average}</ParagraphMovie>
            <ParagraphMovie><b>Release date:</b> {movieDetails.release_date}</ParagraphMovie>
          </ContainerWrap>
        </ContainerMovie>
      ) : (
        <p>Loading...</p>
      )}

      {showCast && cast.length > 0 && <Cast cast={cast} showCast={showCast} />}

      {showReviews && reviews.length > 0 && <Reviews reviews={reviews} showReviews={showReviews} />} 
        <ListLink>
          <ItemLink>
            <NavLink to={`/movies/${movieId}/cast`} onClick={handleShowCast} style={linkStyle}>Cast</NavLink>
          </ItemLink>
          <ItemLink>
            <NavLink to={`/movies/${movieId}/reviews`} onClick={handleShowReviews} style={linkStyle}>Reviews</NavLink>
          </ItemLink>
        </ListLink>
    </div>
  );
};

export default MovieDetails;