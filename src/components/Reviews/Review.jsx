import React from "react";
import { ContainerReviews, ReviewsTitle, ReviewsAuthor, ReviewsList, ReviewsContent } from './Reviews.styled.jsx'

const Reviews = ({ reviews }) => {
  return (
    <ContainerReviews>
      <ReviewsTitle>Reviews</ReviewsTitle>
      <ul>
        {reviews.map((review) => (
          <ReviewsList key={review.id}>
            <ReviewsAuthor>{review.author}</ReviewsAuthor>
            <ReviewsContent>{review.content}</ReviewsContent>
          </ReviewsList>
        ))}
      </ul>
    </ContainerReviews>
  );
};

export default Reviews;