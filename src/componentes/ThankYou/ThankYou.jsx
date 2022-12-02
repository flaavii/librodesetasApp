import React from "react";
import { useParams } from "react-router-dom";
import "./thankyou.css";

function ThankYou() {
  const idOrder = useParams().idOrder;

  return (
    <div className="container">
      <h2 className="h2">Gracias por iniciar tu Libro de Setas</h2>
      <h5 className="h5">
        El id de tu operacion es: <strong>{idOrder}</strong>. No es necesario que lo recuerdes...
      </h5>
      <h6>Nos contactaremos pronto a tu email</h6>
    </div>
  );
}

export default ThankYou;