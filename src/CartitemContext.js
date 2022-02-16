import React, { useReducer, useContext } from "react";
import ReducerCare from "./ReducerCart";

const initialState = {
  cartitem: [],
};

const CartContext = React.createContext();

export const CartitemContext = ({ children }) => {
  const [state, dispatch] = useReducer(ReducerCare, initialState);

  const AddToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <CartContext.Provider value={{ ...state, AddToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const UseCartContext = () => {
  return useContext(CartContext);
};
