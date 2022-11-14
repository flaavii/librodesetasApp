
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";


function ItemDetail({ seta }) {


  function onAddToCart(count) {
    alert(`Agregaste ${count} items al libro!`);
  
  }

  return (
    <div className="card-detail">
      <div className="card-detail_img">
        <img src={seta.img} alt="seta img" />
      </div>
      <div>
        <h2>{seta.title}</h2>
        <p>{seta.data}</p>
        <h4>Tiempo estimado de cosecha es {seta.time} dias.</h4>
      </div>
   
      <ItemCount 
        onAddToCart={onAddToCart} 
        stock={seta.stock} 
      />
   
    </div>
  );
}

export default ItemDetail;