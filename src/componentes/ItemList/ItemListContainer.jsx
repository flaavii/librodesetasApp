import { useState, useEffect } from "react";
import Item from "./Item";
import getItems from "../../Service/mockService";

import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [seta, setSeta] = useState([]);
  const { idCategory } = useParams();

  async function getItemsAsync() {
    let respuesta = await getItems(idCategory);
    setSeta(respuesta);
  }

  useEffect(() => {
    getItemsAsync();
    return () => {
      console.log("Componente desmontado");
    };
  }, [idCategory]);

  return (
    <div className="card">
      {seta.map((seta) => {
        return (
          <Item
            key={seta.id}
            id={seta.id}
            img={seta.img}
            title={seta.title}
            time={seta.time}
            category={seta.category}
          />
        );
      })}
    </div>
  );
}

export default ItemListContainer;
