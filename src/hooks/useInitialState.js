import { useState } from "react";

const initialState = {
  cart: [],
  actualProduct: false,
  mobileMenu: false,
};
const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((product, index) => {
        if (index == payload || product.id == payload) {
          return false;
        }
        return true;
      }),
    });
  };

  const addProduct = (payload) => {
    setState({
      ...state,
      cart: [...state.cart],
      actualProduct: payload,
    });
  };

  const removeProduct = () => {
    setState({
      ...state,
      cart: [...state.cart],
      actualProduct: false,
    });
  };

  const showMobileMenu = () => { 
    setState({
      ...state,
      mobileMenu: true,
    });
  };

  const hideMobileMenu = () => { 
    setState({
      ...state,
      mobileMenu: false,
    });
  };

  return {
    state,
    addToCart,
    removeFromCart,
    addProduct,
    removeProduct,
    showMobileMenu,
    hideMobileMenu,
  };
};

export default useInitialState;
