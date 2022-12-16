import { useState } from "react";
import "./cartForm.css";

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
    <form className="form" onSubmit={onSubmit}>
      <p>Ingresa tus datos:</p>
      <div style={{ marginBottom: 8}}>
        <label htmlFor="name" style={{ width: "100px", marginRight: 4 }}>
          Nombre
        </label>
        <input
          required
          value={data.name}
          name="name"
          type="text"
          onChange={onInputChange}
        />
      </div>

      <div style={{ display: "flex", marginBottom: 8 }}>
        <label htmlFor="email" style={{ width: "100px", marginRight: 4 }}>
          Email
        </label>
        <input
          required
          value={data.email}
          name="email"
          type="email"
          onChange={onInputChange}
        />
      </div>

      <div style={{ display: "flex", marginBottom: 8 }}>
        <label htmlFor="pais" style={{ width: "100px", marginRight: 4 }}>
          País
        </label>
        <input
          required
          value={data.pais}
          name="pais"
          type="pais"
          onChange={onInputChange}
        />
      </div>

      <button className="button"
        disabled={data.name === "" || data.email === "" || data.pais === ""}
        type="submit"
      >
        Finalizar
      </button>
    </form>
  );
}