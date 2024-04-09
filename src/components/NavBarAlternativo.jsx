import React, { useState } from "react";
import logo from "../assets/img/logos/LOGO 1.jpeg";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { NavLink } from "react-router-dom";

export default function NavBarAlternativo({
  handleMostrarModalCarrito,
  carritoC,
  handleSearchByMarca,
  handleMostrarModalLogin,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const { auth } = useAuth();

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    // Filtrar las sugerencias basadas en el valor actual del input
    if (value.length >= 2) {
      const filteredSuggestions = getSuggestions(value);
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    handleSearchByMarca(suggestion);
    setSuggestions([]);
  };

  const getSuggestions = (value) => {
    // Si el valor es vacío, no mostrar sugerencias
    if (!value) {
      return [];
    }
    // Lista completa de marcas
    const allBrands = [
      "calvin",
      "columbia",
      "nike",
      "hollister",
      "jordan",
      "levis",
      "puma",
      "reebok",
      "timberland",
      "tommy",
      "variadas",
      "adidas",
      "asics",
    ];
    // Filtrar las sugerencias basadas en el valor actual del input
    return allBrands.filter((suggestion) =>
      suggestion.toLowerCase().includes(value.toLowerCase())
    );
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
            {suggestions.length > 0 && (
              <div
                style={{
                  position: "sticky",
                  top: "calc(100% + 2px)",
                  left: 0,
                  backgroundColor: "#fff",

                  borderRadius: "4px",
                  padding: "5px",
                  zIndex: 1,
                  width: "100%",
                }}
              >
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    style={{
                      color: "gray",
                      cursor: "pointer",
                      marginBottom: "5px",
                    }}
                  >
                    {suggestion}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* PONER CONDICIONAL ACA Y SI EXISTE AUTH QUE DIGA CERRAR SESION Y SINO INICIA LA SESION; SI ESTA INICIADA LA SESION QUE PUEDA EDITAR LOS DATOS DEL USUARIO */}
          <div>
            <button
              className="shoppingButton"
              onClick={handleMostrarModalLogin}
            >
              <FaUser />
            </button>

            <NavLink to="/logout">Cerrar Sesión</NavLink>
            {auth ? <p style={{ color: "gray" }}>{auth[0].nombre}</p> : null}
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
    </div>
  );
}
