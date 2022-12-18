import React, { useState } from "react";
import MyButton from "../MyButton/MyButton";
import "../ItemCount/ItemCount.css"

function ItemCount({ stock, onAddToCart }) {
  const [count, setCount] = useState(0);

  function handleAdd() {
    if (count < stock) setCount(count + 1);
  }

  function handleSubstract() {
    if (count > 1) setCount(count - 1);
  }
 
  return (
    <div>
      <div className="btnCount" >
        <MyButton onTouchButton={handleSubstract}>
          -
        </MyButton>
        <span>{count}</span>
        <MyButton onTouchButton={handleAdd}>
          +
        </MyButton>
      </div>
      <div className="btnCount">
        <MyButton   onTouchButton={() => onAddToCart(count)}>
          COMENZAR LIBRO 
        </MyButton>
      </div>
    </div>
  );
}

export default ItemCount;