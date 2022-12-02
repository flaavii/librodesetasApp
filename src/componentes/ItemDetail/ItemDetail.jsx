import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext , useState } from "react";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import MyButton from "../MyButton/MyButton";


function ItemDetail({ seta }) {
  const [isInCart, setIsInCart] = useState(false);
  const { addToCart } = useContext(cartContext);

  function onAddToCart(count) {
    setIsInCart(count);
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
        <h4>Tiempo estimado de cosecha, {seta.time} dias.</h4>
      </div>
      { isInCart ? (
        <Link to="/cart">
          <MyButton>VER LIBRO INICIADO</MyButton>
        </Link>
      ) : (
   
      <ItemCount 
        onAddToCart={onAddToCart} 
        stock={seta.stock} 
      />
      )}
    </div>
  
  );
}

export default ItemDetail;