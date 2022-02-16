import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

export const data = "https://fakestoreapi.com/products";
export const ProductContext = React.createContext();

export const Getproduct = ({ children }) => {
  const [products, setProducts] = useState();
  const fetchproducts = async (url) => {
    try {
      const product = await axios.get(url);
      const response = product.data;
      setProducts(response);
    } catch {
      console.log("error");
    }
  };
  useEffect(() => {
    fetchproducts(data);
  }, []);
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export const UseProduct = () => {
  return useContext(ProductContext);
};
