import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import MyButton from "../MyButton/MyButton";
import { createOrder } from "../../Service/firestore";
import { useNavigate } from "react-router-dom";
import "./cartview.css";
import CartForm from "./CartForm";


function CartView() {
  const { cart, removeItem } = useContext(cartContext);
  let navigate = useNavigate();

  if (cart.length === 0) return (<div>
  <h2>Carrito Vacío</h2>
</div>);

async function handleCheckout(evt, data) {
  const order = {
      buyer: data,
      items: cart,
      total: 0,
      date: new Date(),
  };

  
  const orderId = await createOrder(order);
  navigate(`/thankyou/${orderId}`); 
 
     
  }
 
 return (
    <div className="cart-container">
      <div>
      {cart.map((seta) => (
        <div key={seta.id} className="cart-item">
          <img src={seta.img} alt={seta.title} />
          <h4>{seta.title}</h4>
          <div className="h6">
          <h6>Tiempo de Cosecha: {seta.time} dias</h6>
          <h6>Libro N. {seta.count}</h6>
          </div>
          <MyButton onTouchButton={() => removeItem(seta.id)}>
            X
          </MyButton>
        </div>
      ))}
      </div>
      <CartForm onSubmit={handleCheckout} />
      
    </div>
    
  );
}

export default CartView;