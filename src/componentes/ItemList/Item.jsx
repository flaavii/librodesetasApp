import React from "react";
import MyButton from "../MyButton/MyButton";
import "../ItemList/ItemListContainer.css";
import { Link } from "react-router-dom";
import "./item.css";

function Item({img, title, id, category }) {
  const urlDetail = `/detail/${id}`;
 return (

    <div className="item">
      <div>
       <img src={img} alt={title}/>
      </div>
      <div>
        <h3>{title}</h3>
        <h6>Variedad proveniente de {category}</h6> 
      </div> 
<div className="btnVermas" >
      <Link to={urlDetail}>
        <MyButton className="button" onTouchButton={() => console.log("click")} >
          VER MAS
        </MyButton>
      </Link>  
      </div>  
    </div>
   


  );
} 


export default Item;