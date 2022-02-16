import React from "react";
import "./CartItems.scss";
import { UseCartContext } from "./CartitemContext";
import Item from "./Item";

const CartItems = () => {
  const { cartitem } = UseCartContext();

  return (
    <div className='cart-item'>
      {cartitem.map((item) => {
        return (
          <div>
            <Item item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default CartItems;
