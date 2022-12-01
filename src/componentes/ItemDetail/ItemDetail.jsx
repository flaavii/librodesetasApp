import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";


function ItemDetail({ seta }) {
  
  const { addToCart } = useContext(cartContext);

  function onAddToCart(count) {
    alert(`Agregaste ${count} items al libro!`);
    addToCart(seta,count);
  }

  return (
  
    <div className="card-detail">
      <div>
        <img src={seta.img} alt="seta img" />
      </div>
      <div>
        <h2>{seta.title}</h2>
        <p>{seta.data}</p>
        <h4>Tiempo estimado de cosecha es {seta.time} dias.</h4>
      </div>
   
      <ItemCount 
        onAddToCart={onAddToCart} 
        stock={seta.stock} 
      />
   
    </div>
  
  );
}

export default ItemDetail;