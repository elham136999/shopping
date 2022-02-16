import React from "react";
import Button from "./Button";
import "./Item.scss";

const Item = ({ item }) => {
  return (
    <div className='card'>
      <img src={item.image} alt='image' className='card-image' />
      <div className='title'>
        <p>{item.title.slice(0, 15)}</p>
      </div>
      <div className='buttons'>
        <Button />
      </div>
    </div>
  );
};
export default Item;
