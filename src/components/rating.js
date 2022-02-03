import React from 'react';
import PropTypes from 'prop-types';

const Rating = (props) => {
  const { rating, numReviews } = props;

  const renderRating = (rating, bound) => {
    if (rating >= bound) return 'fa fa-star';
    return rating >= bound - 0.5 ? 'fa fa-star-half-o' : 'fa fa-star-o';
  };

  return (
    <div className="rating">
      <span>
        <i className={renderRating(rating, 1)} />
      </span>
      <span>
        <i className={renderRating(rating, 2)} />
      </span>
      <span>
        <i className={renderRating(rating, 3)} />
      </span>
      <span>
        <i className={renderRating(rating, 4)} />
      </span>
      <span>
        <i className={renderRating(rating, 5)} />
      </span>
      <span>
        {`${numReviews} reviews`}
      </span>
    </div>
  );
};

Rating.defaultProps = {
  rating: 0,
  numReviews: 0,
};

Rating.propTypes = {
  rating: PropTypes.number,
  numReviews: PropTypes.number,
};

export default Rating;
