import React from "react";
import logo from "../assets/img/logos/LOGO 1.jpeg";
import { FiShoppingCart } from "react-icons/fi";

export default function NavBarAlternativo() {
  return (
    <div>
      <div className="navbar-container">
        <div className="black-bar">
          <p>Prendas 100% ORIGINALES</p>
        </div>
        <div className="white-bar">
          <img src={logo} alt="" />
          <div>
            <input
              className="inputnav"
              type="text"
              placeholder="Buscar"
              // value={searchTerm}
              // onChange={handleInputChange}
              // onKeyDown={handleInputKeyDown}
            />
            {/* <button
          //   onClick={handleSearch}
          ></button>
          <ul>
            {/* {autocompleteOptions.map((comida) => ( */}
            <span
            // key={comida.id}
            // onClick={() => handleComidaClick(comida)}
            >
              {/* {comida.Nombre} */}
            </span>
            {/* ))} */}
            {/* </ul>  */}
          </div>
          <button
            className="shoppingButton"
            // onClick={handleMostrarModalCarrito}
          >
            <FiShoppingCart />
          </button>
        </div>
      </div>
      ;
    </div>
  );
}
