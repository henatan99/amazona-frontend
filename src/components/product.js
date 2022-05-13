import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Rating from './rating';

const Product = ({ product }) => {
  const {
    id, name, image, numReviews, price, rating,
  } = product;
  return (
    <div className="card">
      <Link to={`product/${id}`}>
        <img className="medium" src={image} alt={name} />
      </Link>
      <div className="card-body">
        <Link to={`product/${id}`}>
          <h2>{name}</h2>
        </Link>
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
