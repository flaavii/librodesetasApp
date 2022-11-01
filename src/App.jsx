import './App.css';
//Import de componentes
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemList/ItemListContainer';


function App() {
  const styleH1 = { backgroundColor: "lightgreen", color: "black"};

  let titulo = <h1 style={styleH1}>Libro de Setas</h1>;

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      {titulo}
        <ItemListContainer/>
    </div>
  );
}

export default App;

