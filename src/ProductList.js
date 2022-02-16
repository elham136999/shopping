import React from "react";
import { UseProduct } from "./Getproduct";
import Product from "./Product";
import "./ProductList.scss";

const ProductList = () => {
  const { products } = UseProduct();

  return (
    <div className='productlist'>
      {products &&
        products.map((product) => {
          return <Product product={product} key={product.id} />;
        })}
    </div>
  );
};
export default ProductList;
