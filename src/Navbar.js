import React, { useState } from "react";
import "./Navbar.scss";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import { UseCartContext } from "./CartitemContext";
import Search from "./Search";

export default function Navbar() {
  const { cartitem } = UseCartContext();
  console.log(cartitem);

  return (
    <header className='header'>
      <div className='logo'>
        <h3>online shop</h3>
      </div>
      <Search />
      <div className='icon'>
        <Link to='/cartitem'>
          <HiOutlineShoppingCart />
        </Link>

        <p className='amount'>{cartitem.length}</p>
      </div>
    </header>
  );
}
