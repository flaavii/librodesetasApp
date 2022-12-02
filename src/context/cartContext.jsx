import { createContext, useState } from "react";
export const cartContext = createContext();
export function CartContextProvider({ children }) {
  
  const [cart, setCart] = useState([]);

  function addToCart(seta, count) {

    let itemAlreadyInCart = cart.findIndex(
      (itemInCart) => itemInCart.id === seta.id 
    );

    let newCart = [...cart];

    if (itemAlreadyInCart !== -1) {
      newCart[itemAlreadyInCart].count += count;
      setCart(newCart);
    } else {
      
      seta.count = count;
      newCart.push(seta);
      setCart(newCart);
    }
  }

  function itemsInCart() {
    let total = 0;
    cart.forEach((itemInCart) => (total = total + itemInCart.count));
    return total;
  }

  function priceInCart() {
    let totalPrice = 0;
    cart.forEach(
      (seta) =>
        (totalPrice = totalPrice + seta.price * seta.cantidad)
    );
    return totalPrice;
  }

  function clear() {
    /* vaciar el estado */
  }

  function removeItem() {
    const newCart = [...cart];
    newCart.pop();
    setCart(newCart);
    
  }


  return (
    <cartContext.Provider
      value={{ cart, addToCart, itemsInCart, removeItem,clear,priceInCart }}
    >
      {children}
    </cartContext.Provider>
  );
}