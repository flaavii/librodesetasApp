import React from 'react';
import './App.css';
//Import de componentes
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemList/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetail/ItemDetailContainer';
//Import react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from './context/cartContext';
import CartView from "./componentes/CartView/CartView"
import ThankYou from "../src/componentes/ThankYou/ThankYou"



function App() {
  const styleH1 = { backgroundColor: "lightgreen", color: "black"};

  let titulo = <h1 style={styleH1}>Libro de Setas</h1>;


  return (
    <div className="App">
    <CartContextProvider>
    <BrowserRouter>
      <header className="App-header">
        <NavBar />
      </header>
      {titulo}
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/category/:idCategory" element={<ItemListContainer/>} />
        <Route path="/detail/:idItem" element={<ItemDetailContainer/>} /> 
        <Route path="/cart" element={<CartView/>} />
        <Route path="/thankyou/:idOrder" element={<ThankYou />} />
        <Route path="*" element={ <h4 className="h4"><strong>ERROR 404: ESTA PAGINA NO EXISTE</strong></h4>} />
      </Routes>
    
    <footer>
      <NavBar/>
    </footer>
    </BrowserRouter>
    </CartContextProvider>
    </div>
  );
}

export default App;

