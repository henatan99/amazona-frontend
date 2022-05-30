import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';
import HomeScreen from './screens/homeScreen';
import ProductScreen from './screens/productScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/signinScreen';

function App() {
  const cart = useSelector((state) => state.cartReducer);
  const { cartItems } = cart;
  console.log('cartItems', cartItems);
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link to="/" className="brand">amazona</Link>
          </div>
          <div>
            <Link to="/cart">Cart</Link>
            {cartItems.length > 0 && (
              <span className="badge">{cartItems[0].qty}</span>
            )}
            <Link to="/signin">Sign In</Link>
          </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/signin" component={SigninScreen} exact />
          <Route path="/" component={HomeScreen} exact />
        </main>
        <footer className="row center">
          All rights reserved
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
