import React from "react";
import MyButton from "../MyButton/MyButton";
import "../ItemList/ItemListContainer.css";
import { Link } from "react-router-dom";
import "./item.css";
import Card from 'react-bootstrap/Card';


function Item ({img, title, id, category }) {
  const urlDetail = `/detail/${id}`;
  
  return (
    <Card className="item" style={{ width: '18rem' }}>
      <Card.Img variant="center" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <h6>Variedad proveniente de {category}</h6>
        </Card.Text>
        <Link to={urlDetail}>
        <MyButton className="button" onTouchButton={() => (console.log("iniciando"))} >
          VER MAS
        </MyButton >
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Item;