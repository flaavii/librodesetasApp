import { useState, useEffect } from "react";
import { getSingleItem} from "../../Service/mockService";
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"


function ItemDetailContainer() {
  const [seta, setSeta] = useState([]);
  const { idItem } = useParams();

  async function getItems() {
    let respuesta = await getSingleItem(idItem);
    setSeta(respuesta);
  }

  useEffect(() => {
    getItems();
    
  }, []);

  return (
    <ItemDetail seta={seta} />
  );
}

export default ItemDetailContainer;