import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./toastify.css";
 

function Toastify( text , duration ){
    const notify = ( onClic ) => toast(

      text= "Este es un espacio en construccion para recolectar datos aportados por cultivadores de Setas Pscilocibicas",
      duration= 5000,
      
    )
     

    return (
      <div>
        <button className="buttonAlert" onClick={notify}>!</button>
        <ToastContainer />
      </div>
    );
  }

  export default Toastify;

  