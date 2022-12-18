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
  <h2>Libro Vacío</h2>
</div>);

async function handleCheckout(evt, data) {
  const order = {
      buyer: data,
      items: cart,
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
          <svg class="svg-icon" viewBox="0 0 20 20">
							<path d="M17.114,3.923h-4.589V2.427c0-0.252-0.207-0.459-0.46-0.459H7.935c-0.252,0-0.459,0.207-0.459,0.459v1.496h-4.59c-0.252,0-0.459,0.205-0.459,0.459c0,0.252,0.207,0.459,0.459,0.459h1.51v12.732c0,0.252,0.207,0.459,0.459,0.459h10.29c0.254,0,0.459-0.207,0.459-0.459V4.841h1.511c0.252,0,0.459-0.207,0.459-0.459C17.573,4.127,17.366,3.923,17.114,3.923M8.394,2.886h3.214v0.918H8.394V2.886z M14.686,17.114H5.314V4.841h9.372V17.114z M12.525,7.306v7.344c0,0.252-0.207,0.459-0.46,0.459s-0.458-0.207-0.458-0.459V7.306c0-0.254,0.205-0.459,0.458-0.459S12.525,7.051,12.525,7.306M8.394,7.306v7.344c0,0.252-0.207,0.459-0.459,0.459s-0.459-0.207-0.459-0.459V7.306c0-0.254,0.207-0.459,0.459-0.459S8.394,7.051,8.394,7.306"></path>
						</svg>
          </MyButton>
        </div>
      ))}
      </div>
      <CartForm onSubmit={handleCheckout} />
      
    </div>
    
  );
}

export default CartView;
