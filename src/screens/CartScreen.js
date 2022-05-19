import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';
import MessageBox from '../components/messageBox';

export default function CartScreen(props) {
  const { match, location, history } = props;
  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split('=')[1]) : 1;

  const cart = useSelector((state) => state.cartReducer);
  const { cartItems } = cart;

  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    history.push('/signin/redirect=shipping');
  };
  return (
    <div className="row top">
      <div className="col-2">
        <h1>Shopping Cart</h1>
        {cartItems.length === 0
          ? (
            <MessageBox>
              Cart is empty
              {' '}
              <Link to="/">Go Shopping</Link>
            </MessageBox>
          )

          : (
            <ul>
              {
                          cartItems.map((item) => (
                            <li key={item.product}>
                              <div className="row">
                                <div>
                                  <img
                                    src={item.image}
                                    alt={item.name}
                                    className="small"
                                  />
                                </div>
                                <div className="min-30">
                                  <Link to={`/product/${item.product}`}>{item.name}</Link>
                                </div>
                                <div>
                                  <select
                                    value={item.qty}
                                    onChange={(e) => {
                                      dispatch(
                                        addToCart(item.product),
                                        Number(e.target.value),
                                      );
                                    }}
                                  >
                                    {
                                                [...Array(item.countInStock).keys()].map(
                                                  (x) => (
                                                    <option key={x + 1} value={x + 1}>
                                                      {x + 1}
                                                    </option>
                                                  ),
                                                )
                                            }
                                  </select>
                                </div>
                                <div>{item.price}</div>
                                <div>
                                  <button
                                    type="button"
                                    onClick={() => removeFromCartHandler(item.product)}
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </li>
                          ))
                      }
            </ul>
          )}
      </div>
      <div className="col-1">
        <div className="card card-body">
          <ul>
            <li>
              <h2>
                Subtotal (
                {cartItems.reduce((a, c) => a + c.qty, 0)}
                {' '}
                items) :
                $
                {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
              </h2>
            </li>
            <li>
              <button
                type="button"
                onClick={checkoutHandler}
                className="primary block"
                disabled={cartItems.length === 0}
              >
                Proceed to Checkout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

CartScreen.defaultProps = {
  match: {},
  location: {},
  history: null,
};

CartScreen.propTypes = {
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
