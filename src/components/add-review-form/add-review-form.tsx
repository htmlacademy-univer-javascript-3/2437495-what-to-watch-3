import React, { useState, useCallback } from 'react';

const RATING = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

interface AddReviewFormProps {
  onSubmit: (rating: string, reviewText: string) => void;
}

const AddReviewComponent: React.FC<AddReviewFormProps> = ({ onSubmit }) => {
  const [rating, setRating] = useState('');
  const [reviewText, setReviewText] = useState('');

  const handleRatingChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setRating(e.target.value);
    },
    []
  );

  const handleReviewTextChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setReviewText(e.target.value);
    },
    []
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit(rating, reviewText);

      setRating('');
      setReviewText('');
    },
    [onSubmit, rating, reviewText]
  );

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleSubmit}>
        <div className="rating">
          <div className="rating__stars">
            {RATING.map((value) => (
              <React.Fragment key={value}>
                <input
                  className="rating__input"
                  id={`star-${value}`}
                  type="radio"
                  name="rating"
                  value={value.toString()}
                  checked={rating === value.toString()}
                  onChange={handleRatingChange}
                />
                <label className="rating__label" htmlFor={`star-${value}`}>
                  Rating {value}
                </label>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            value={reviewText}
            onChange={handleReviewTextChange}
          />
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export const AddReviewForm = React.memo(AddReviewComponent);
