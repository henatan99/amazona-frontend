import CART_ADD_ITEM from '../constants/cartConstant';

const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      if (state.cartItems.find((x) => x.product === action.payload.product)) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) => (
            x.product === state.cartItems.find(
              (x) => x.product === action.payload.product,
            ).product ? action.payload : x
          )),
        };
      }
      return { ...state, cartItems: [...state.cartItems, action.payload] };

    default:
      return state;
  }
};

export default cartReducer;
