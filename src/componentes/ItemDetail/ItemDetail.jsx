import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext , useState } from "react";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import MyButton from "../MyButton/MyButton";
import Accordion from 'react-bootstrap/Accordion';



function ItemDetail({ seta }) {
  
  const [isInCart, setIsInCart] = useState(false);
  const { addToCart } = useContext(cartContext);

  function onAddToCart(count) {
    setIsInCart(count);
    addToCart(seta,count);
  }

  return (
  
    <div className="card-detail">
     
        <img src={seta.img} alt="seta img" />
     
        <Accordion className="my-5">
      <Accordion.Item  eventKey="0" >
        <Accordion.Header>
          <h3>Variedad: {seta.title}</h3>
        </Accordion.Header>
        <Accordion.Body>
          <p>{seta.data}</p>
          <h4>El tiempo estimado de cosecha, es de {seta.time} dias.</h4>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        
      
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