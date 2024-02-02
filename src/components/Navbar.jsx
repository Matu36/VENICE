import React from "react";
import "../App.css";

export default function NavBar({ onSelectMarca, onInicio }) {
  const handleMarcaClick = (marca) => {
    onSelectMarca(marca);
  };

  return (
    <div className="navbar">
      <button className="marca" onClick={() => onInicio()}>
        Inicio
      </button>

      <button className="marca">
        <a href="#cards" onClick={() => handleMarcaClick("Todas las marcas")}>
          Todas las marcas
        </a>
      </button>
      <button className="marca">
        <a href="#cards" onClick={() => handleMarcaClick("Tommy")}>
          Tommy
        </a>
      </button>
      <button className="marca">
        <a href="#cards" onClick={() => handleMarcaClick("GAP")}>
          GAP
        </a>
      </button>
      <button className="marca">
        <a href="#cards" onClick={() => handleMarcaClick("POLO")}>
          Polo
        </a>
      </button>
      <button className="marca">
        <a href="#cards" onClick={() => handleMarcaClick("Kevingston")}>
          Kevingston
        </a>
      </button>
    </div>
  );
}
