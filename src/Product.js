import React from "react";
import "./Product.scss";

import { UseCartContext } from "./CartitemContext";

const Product = ({ product }) => {
  const { AddToCart } = UseCartContext();
  return (
    <main>
      <div className='product'>
        <div className='border_product'>
          <img src={product.image} alt='image' />

          <p className='text'>{product.title.slice(0, 15)}</p>

          <p className='text'>{product.title}</p>
          

          <button
            type='button'
            className='button'
            onClick={() => AddToCart(product)}>
            add to list
          </button>
        </div>
      </div>
    </main>
  );
};
export default Product;
