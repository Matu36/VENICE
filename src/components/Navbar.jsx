import React from "react";
import "../App.css";
import { AiOutlineHome } from "react-icons/ai";
import nike from "../assets/img/logos/nike.jpg";
import adidas from "../assets/img/logos/adidas.png";
import calvin from "../assets/img/logos/calvin.jpg";
import columbia from "../assets/img/logos/columbia.png";
import hollister from "../assets/img/logos/hollister.png";
import gap from "../assets/img/logos/gap.png";

export default function NavBar({ onSelectMarca, onInicio }) {
  const handleMarcaClick = (marca) => {
    onSelectMarca(marca);
  };

  return (
    <div className="navbar">
      {/* <button className="marca" onClick={() => onInicio()}>
        <AiOutlineHome className="casa" />
      </button> */}

      {/* <button className="marca">
        <a
          href="#cards"
          className="marca"
          onClick={() => handleMarcaClick("Todas las marcas")}
        >
          Todas
        </a>
      </button> */}

      <button className="marca">
        <a
          href="#cards"
          className="marca"
          onClick={() => handleMarcaClick("POLO")}
        >
          <img src={adidas} alt="" />
        </a>
      </button>
      <button className="marca">
        <a
          href="#cards"
          className="marca"
          onClick={() => handleMarcaClick("Kevingston")}
        >
          <img src={calvin} alt="" />
        </a>
      </button>

      <button className="marca">
        <a
          href="#cards"
          className="marca"
          onClick={() => handleMarcaClick("hollister")}
        >
          <img src={hollister} alt="" />
        </a>
      </button>
      <button className="marca">
        <a
          href="#cards"
          className="marca"
          onClick={() => handleMarcaClick("columbia")}
        >
          <img src={columbia} alt="" />
        </a>
      </button>
      <button className="marca">
        <a
          href="#cards"
          className="marca"
          onClick={() => handleMarcaClick("Tommy")}
        >
          <img src={nike} alt="" />
        </a>
      </button>
    </div>
  );
}
