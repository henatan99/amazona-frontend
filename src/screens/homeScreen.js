import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/product';
import LoadingBox from '../components/loadingBox';
import MessageBox from '../components/messageBox';
import listProducts from '../actions/productActions';

const HomeScreen = () => {
  const dispatch = useDispatch();
  // const defaultProductList = { loading: true, error: null, products: null };
  const productList = useSelector((state) => state.productListReducer);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {
              products.map((product) => (
                <Product key={product.id} product={product} />
              ))
            }
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
