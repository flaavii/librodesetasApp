import React from "react";
import Item from "./Item";

function ItemList({ seta }) {
  return (
    <div className="card">
      {seta.map((seta) => {
        return (
          <Item
            key={seta.id}
            id={seta.id}
            img={seta.img}
            title={seta.title}
            price={seta.price}
            stock={seta.stock}
            category={seta.category}
            
          /> 
        );
      })}
    </div>
  );
}

export default React.memo(ItemList);