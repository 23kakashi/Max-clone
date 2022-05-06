import React from "react";
import style from "./women.module.css"

const Filter = () => {
  return (
    <>
      <div className={style.Sflex}>
        <select>
          <option>Size</option>
          <option>XS</option>
          <option>S</option>
          <option>M</option>
          <option>L</option>
          <option>XL</option>
          <option>XXL</option>size
        </select>

        <select>
          <option>Color</option>
          <option>White</option>
          <option>Black</option>
          <option>Red</option>
          <option>Green</option>
          <option>Blue</option>
        </select>

        <select>
          <option>Brand</option>
          <option>W FOR WOMEN</option>
          <option>MAANYAVAR</option>
          <option>AMPM</option>
          <option>GLOBAL DESI</option>
          <option>RAW MANGO</option>
        </select>

        <select>
          <option>Catogary</option>
          <option>Men</option>
          <option>Womwen</option>
          <option>Boys</option>
          <option>Girls</option>
        </select>

        <select>
          <option>Price</option>
          <option>High to Low</option>
          <option>Low to High</option>
        </select>

        <select>
          <option>Rating</option>
          <option>★★★★★</option>
          <option>★★★★ and above</option>
          <option>★★★ and above</option>
          <option>★★ and above</option>
          <option>★ and above</option>
        </select>
      </div>
    </>
  );
};

export default Filter;
