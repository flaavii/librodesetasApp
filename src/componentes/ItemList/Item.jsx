import React from "react";
import MyButton from "../MyButton/MyButton";
import "../ItemList/ItemListContainer.css";
import { Link } from "react-router-dom";




function Item({img, title, time, id, category }) {
  const urlDetail = `/detail/${id}`;
 return (
    <div className="card">
      <div>
       <img src={img} alt={title}/>
      </div>
      <div>
        <h3>{title}</h3>
        <h5>Variedad proveniente de {category}</h5>
       <p>El tiempo estimado de cosecha es de {time} dias</p>
        
      </div> 
<div >
      <Link  to={urlDetail}>
        <MyButton className="button" onTouchButton={() => console.log("click")} >
          VER MAS
        </MyButton>
      </Link>  
      </div>  
    </div>


  );
} 


export default Item;