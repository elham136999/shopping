import React from "react";
import { useState } from "react";
import "./Button.scss";

export default function Button() {
  const [value, setValue] = useState(0);
  const Addtolist = () => {
    setValue((prev) => prev + 1);
  };
  const Removelist = () => {
    setValue((prev) => prev - 1);
  };
  if (value < 0) {
    const value = 0;
    setValue(value);
  }
  return (
    <div className='button-group'>
      <button className='btn btn-add' type='button' onClick={Addtolist}>
        +
      </button>
      <p className='content'>{value}</p>
      <button className='btn btn-remove' type='button' onClick={Removelist}>
        -
      </button>
    </div>
  );
}
