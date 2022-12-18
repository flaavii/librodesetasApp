import { useState } from "react";
import "./cartForm.css";
import { Form } from "react-bootstrap";

export default function CartForm(props) {
  const [data, setData] = useState({
    name: "",
    email: "",
    pais: "",
  });

  function onInputChange(evt) {
    let nameInput = evt.target.name;
    let value = evt.target.value;

    let newData = { ...data };
    newData[nameInput] = value;
    setData(newData);
  }

  function onSubmit(evt) {
    if (data.name.length === 0) return;

    evt.preventDefault();
    props.onSubmit(evt, data);
  }

  return (
    <Form className="form" onSubmit={onSubmit}>
      <p className="mt-3">Ingresa tus datos:</p>

<div className="d-flex flex-row">

      <Form.Group className="mx-3" >

        <Form.Label htmlFor="name">Nombre</Form.Label>
        
        <Form.Control  
          required
          value={data.name}
          name="name"
          type="text"
          onChange={onInputChange} />

      </Form.Group>
      

      <Form.Group className="mx-3">

        <Form.Label htmlFor="email">Email</Form.Label>
        
        <Form.Control 
          required
          value={data.email}
          name="email"
          type="email"
          onChange={onInputChange} />
        
      </Form.Group>

      <Form.Group className="mx-3" >

        <Form.Label htmlFor="pais">Pais</Form.Label>
        
        <Form.Control 
          required
          value={data.pais}
          name="pais"
          type="pais"
          onChange={onInputChange} />
        
      </Form.Group>
      </div>     

      <button className="button m5-3"
        disabled={data.name === "" || data.email === "" || data.pais === ""}
        type="submit"
      >
        Finalizar
      </button>
    </Form>
  );

}