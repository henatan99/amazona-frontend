import React from 'react';
import PropTypes from 'prop-types';
import Rating from './rating';

const Product = ({ product }) => {
  const {
    id, name, image, numReviews, price, rating,
  } = product;
  return (
    <div className="card">
      <a href={`product/${id}`}>
        <img className="medium" src={image} alt={name} />
      </a>
      <div className="card-body">
        <a href={`product/${id}`}>
          <h2>{name}</h2>
        </a>
        <Rating rating={rating} numReviews={numReviews} />
        <div className="price">{price}</div>
      </div>
    </div>
  );
};

Product.defaultProps = {
  product: {
    id: null,
    name: null,
    image: null,
    numReviews: 0,
    price: null,
    rating: null,
  },
};

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    numReviews: PropTypes.number,
    price: PropTypes.number,
    rating: PropTypes.number,
  }),
};

export default Product;
