import { useState, useEffect } from "react";
import { getSingleItem} from "../../Service/firestore";
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import Loader from "../Loaders/Loader"
import "./itemDetailContainer.css"


function ItemDetailContainer() {
  const [seta, setSeta] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { idItem } = useParams();

  async function getItemsAsync() {
    getSingleItem(idItem).then((respuesta) => {
      setSeta(respuesta);
      setIsLoading(false);
    });
  }

  useEffect(() => {
    getItemsAsync();
  }, []);

  if (isLoading) return <Loader />;

  return <ItemDetail seta={seta} />;
}

export default ItemDetailContainer;