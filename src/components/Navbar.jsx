import React from "react";
import "../App.css";
import { AiOutlineHome } from "react-icons/ai";
import nike from "../assets/img/logos/nike.jpg";
import adidas from "../assets/img/logos/adidas.png";
import calvin from "../assets/img/logos/calvin.jpg";
import columbia from "../assets/img/logos/columbia.png";
import hollister from "../assets/img/logos/hollister.png";
import originals from "../assets/img/logos/originalsadidas.jpg";
import jordan from "../assets/img/logos/jordanm.jpg";
import timberland from "../assets/img/logos/timberland.png";
import asics from "../assets/img/logos/asics.jpg";
import reebok from "../assets/img/logos/reebok.png";

export default function NavBar({ onSelectMarca, onInicio }) {
  const handleMarcaClick = (marca) => {
    onSelectMarca(marca);
  };

  return (
    <div className="navbar">
      <button className="marca">
        <a
          href="#cards"
          className="marca"
          onClick={() => handleMarcaClick("adidas")}
        >
          <img src={adidas} alt="" />
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
          onClick={() => handleMarcaClick("calvin")}
        >
          <img src={calvin} alt="" />
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
          onClick={() => handleMarcaClick("nike")}
        >
          <img src={nike} alt="" />
        </a>
      </button>
      <button className="marca">
        <a
          href="#cards"
          className="marca"
          onClick={() => handleMarcaClick("originals")}
        >
          <img src={originals} alt="" />
        </a>
      </button>

      <button className="marca">
        <a
          href="#cards"
          className="marca"
          onClick={() => handleMarcaClick("jordan")}
        >
          <img src={jordan} alt="" />
        </a>
      </button>
      <button className="marca">
        <a
          href="#cards"
          className="marca"
          onClick={() => handleMarcaClick("reebok")}
        >
          <img src={reebok} alt="" />
        </a>
      </button>
      <button className="marca">
        <a
          href="#cards"
          className="marca"
          onClick={() => handleMarcaClick("asics")}
        >
          <img src={asics} alt="" />
        </a>
      </button>

      <button className="marca">
        <a
          href="#cards"
          className="marca"
          onClick={() => handleMarcaClick("timberland")}
        >
          <img src={timberland} alt="" />
        </a>
      </button>
    </div>
  );
}
