import React, { useState } from "react";
import logo from "../assets/img/logos/LOGO 1.jpeg";
import { FiSearch, FiShoppingCart } from "react-icons/fi";

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

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  window.addEventListener("scroll", function () {
    var blackBar = document.querySelector(".black-bar");
    var whiteBar = document.querySelector(".white-bar");

    if (window.pageYOffset > 0) {
      whiteBar.classList.add("fixed");
      blackBar.style.visibility = "hidden";
    } else {
      whiteBar.classList.remove("fixed");
      blackBar.style.visibility = "visible";
    }
  });

  return (
    <div>
      <div className="navbar-container">
        <div className="black-bar">
          <p>Prendas 100% ORIGINALES</p>
        </div>
        <div className="white-bar">
          <img src={logo} alt="" />
          <div className="search-bar">
            <button className="search-button" onClick={handleSearch}>
              <FiSearch style={{ color: "black" }} />
            </button>
            <input
              className="inputnav"
              type="text"
              placeholder="Buscar..."
              value={searchTerm}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
            />
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
