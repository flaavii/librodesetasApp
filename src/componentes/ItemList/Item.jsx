import React from "react";
import MyButton from "../MyButton/MyButton";
import "../ItemList/ItemListContainer.css";
//import Card from 'react-bootstrap/Card'; -------NO FUNCIONA------


function Item(props) {
 return (
    <div className="card">
      <div>
        <img src={props.img} alt={props.title}/>
      </div>
      <div>
        <h3>{props.title}</h3>
        <p>El tiempo estimado de cultivo es de {props.time} dias</p>
      </div>
      <MyButton>
        AGREGAR AL LIBRO
      </MyButton>      
    </div>
  );
} 

/* --------- CARD BOOTSTRAP --------

function Item(props) {
return (
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.img} alt={props.title} />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
      El tiempo estimado de cultivo es de {props.time} dias
      </Card.Text>
      <MyButton>AGREGAR AL LIBRO</MyButton>
    </Card.Body>
  </Card>
);
}
*/

export default Item;