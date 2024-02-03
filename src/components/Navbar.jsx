import React from "react";
import "../App.css";
import { AiOutlineHome } from "react-icons/ai";

export default function NavBar({ onSelectMarca, onInicio }) {
  const handleMarcaClick = (marca) => {
    onSelectMarca(marca);
  };

  return (
    <div className="navbar">
      <button className="marca" onClick={() => onInicio()}>
        <AiOutlineHome className="casa" />
      </button>

      <button className="marca">
        <a
          href="#cards"
          className="marca"
          onClick={() => handleMarcaClick("Todas las marcas")}
        >
          Todas
        </a>
      </button>
      <button className="marca">
        <a
          href="#cards"
          className="marca"
          onClick={() => handleMarcaClick("Tommy")}
        >
          Tommy
        </a>
      </button>
      <button className="marca">
        <a
          href="#cards"
          className="marca"
          onClick={() => handleMarcaClick("GAP")}
        >
          GAP
        </a>
      </button>
      <button className="marca">
        <a
          href="#cards"
          className="marca"
          onClick={() => handleMarcaClick("POLO")}
        >
          Polo
        </a>
      </button>
      <button className="marca">
        <a
          href="#cards"
          className="marca"
          onClick={() => handleMarcaClick("Kevingston")}
        >
          Kevingston
        </a>
      </button>
    </div>
  );
}
