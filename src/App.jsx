import React from 'react';
import './App.css';
//Import de componentes
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemList/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetail/ItemDetailContainer';
//Import react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  const styleH1 = { backgroundColor: "lightgreen", color: "black"};

  let titulo = <h1 style={styleH1}>Libro de Setas</h1>;


  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      {titulo}
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/category/:idCategory" element={<ItemListContainer/>} />
        <Route path="/detail/:idItem" element={<ItemDetailContainer/>} /> 
        <Route path="*" element={ <h4>ERROR 404: Esta pagina no existe</h4>} />
      </Routes>
        
    </div>
    <footer>
      <NavBar/>
    </footer>
    </BrowserRouter>
  );
}

export default App;

