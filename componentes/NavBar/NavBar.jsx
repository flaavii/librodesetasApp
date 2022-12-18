import React from 'react';
import CartWidget from './CartWidget';
import "../NavBar/NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className='navBar'>
        <ul>
            <li>
            <Link to="/">
            Libros Disponibles
          </Link>
            </li>
            <li>
            <Link to="/category/usa">
            USA
          </Link>
            </li>
            <li>
            <Link to="/category/india">
            INDIA
          </Link>
            </li>
            <li>
                <a target="blank" href='https://www.change.org/p/presidente-alberto-fern%C3%A1ndez-despenalizacion-de-hongos-alucin%C3%B3genos-en-argentina-por-la-salud-mental-y-la-ciencia'>Firmá la Petición!</a>
            </li>
            <li>
            
            <CartWidget/>
            
               
            </li>

        </ul>

        
        
    </nav>
  )
}

export default NavBar;
