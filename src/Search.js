import React, { useState } from "react";
import { UseProduct } from "./Getproduct";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { products } = UseProduct();

  const handlechange = (e) => {
    setSearchTerm(e.target.value);
    let search = products.filter((item) => {
      return item.title.toLowerCase() === searchTerm;
    });
    console.log(search);
  };

  return (
    <div className='navbar'>
      <div className='search-box'>
        <input
          type='text'
          className='input'
          placeholder='جستجو ...'
          value={searchTerm}
          onChange={(e) => handlechange(e)}
        />
      </div>
    </div>
  );
};
export default Search;
