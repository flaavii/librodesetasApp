import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import getItems, { getItemsByCategory } from "../../Service/firestore";
import { useParams } from "react-router-dom";
import "./itemlist.css"
import Loader from "../Loaders/Loader";


function ItemListContainer() {

  const [seta, setSeta] = useState(null);
  const { idCategory } = useParams();

  async function getItemsAsync() {
    if( !idCategory ){
      let respuesta = await getItems();
      setSeta(respuesta);
    }
    else {
      let respuesta = await getItemsByCategory(idCategory)
      setSeta(respuesta)
    }
    
  }

  useEffect(() => {
    getItemsAsync();    
  }, [idCategory]);

  return (
    <div className="loader">
      {seta ? <ItemList seta={seta} /> : <Loader />}
    </div>
  );
}

export default ItemListContainer;