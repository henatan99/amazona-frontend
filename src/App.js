import React from 'react';
import data from './data';
import Product from './components/product';

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a href="/" className="brand">amazona</a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
        <div className="row center">
          {
            data.products.map((product) => (
              <Product product={product} />
            ))
          }
        </div>
      </main>
      <footer className="row center">
        All rights reserved
      </footer>
    </div>
  );
}

export default App;
