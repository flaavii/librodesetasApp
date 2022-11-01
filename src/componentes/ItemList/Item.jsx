import React from "react";
import MyButton from "../MyButton/MyButton";
import "../ItemList/ItemListContainer.css"

function Item(props) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={props.img} alt={props.title}/>
      </div>
      <div className="card-detail">
        <h3>{props.title}</h3>
        <p>El tiempo estimado de cultivo es de {props.time} dias</p>
      </div>
      <MyButton>
        AGREGAR AL LIBRO
      </MyButton>      
    </div>
  );
}

export default Item;