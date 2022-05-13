import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProducts } from '../actions/productActions';
import LoadingBox from '../components/loadingBox';
import MessageBox from '../components/messageBox';
import Rating from '../components/rating';

const ProductScreen = (props) => {
  const dispatch = useDispatch();
  const { match, history } = props;
  const productId = match.params.id;
  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetailsReducer);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(detailsProducts(productId));
  }, [dispatch, productId]);

  const addToCartHandler = () => {
    history.push(`/cart/${productId}?qty=${qty}`);
  };

  // if (!product) {
  //   return <div>Product Not Found</div>;
  // }
  return (
    <div>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <Link to="/">Back to result</Link>
          <div className="row top">
            <div className="row-2">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="col-1">
              <ul>
                <li>
                  <h1>{product.name}</h1>
                </li>
                <li>
                  <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                  />
                </li>
                <li>
                  Price: $
                  {product.price}
                </li>
                <li>
                  Description:
                  <p>{product.description}</p>
                </li>
              </ul>
            </div>
            <div className="col-1">
              <div className="card card-body">
                <ul>
                  <li>
                    <div>
                      <div>Price</div>
                      <div className="price">
                        $
                        {product.price}
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div>Status</div>
                      <div>
                        {product.countInStock > 0
                          ? (<span className="success">In Stock</span>)
                          : (<span className="danger">Unavailable</span>)}
                      </div>
                    </div>
                  </li>
                  {
                product.countInStock > 0 && (
                  <>
                    <li>
                      <div className="row">
                        <div>Qty</div>
                        <div>
                          <select value={qty} onChange={(e) => setQty(e.target.value)}>
                            {
                              [...Array(product.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                ),
                              )
                            }
                          </select>
                        </div>
                      </div>
                    </li>
                    <li>
                      <button onClick={addToCartHandler} className="primary block" type="button">Add to Cart</button>
                    </li>
                  </>
                )
              }
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>

  );
};

export default ProductScreen;

ProductScreen.defaultProps = {
  match: {},
  location: {},
  history: null,
};

ProductScreen.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }),
  location: PropTypes.shape({
    search: PropTypes.string,
  }),
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};
