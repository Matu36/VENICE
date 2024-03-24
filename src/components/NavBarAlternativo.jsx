import React, { useState } from "react";
import logo from "../assets/img/logos/LOGO 1.jpeg";
import { FiShoppingCart } from "react-icons/fi";

export default function NavBarAlternativo({
  handleMostrarModalCarrito,
  carritoC,
  handleSearchByMarca,
}) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    handleSearchByMarca(searchTerm);
  };

  {
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
                value={searchTerm}
                onChange={handleInputChange}
              />
              <button onClick={handleSearch}>Buscar</button>
            </div>
            <button
              className="shoppingButton"
              onClick={handleMostrarModalCarrito}
            >
              <FiShoppingCart />
              {carritoC > 0 && <span className="badge">{carritoC}</span>}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
