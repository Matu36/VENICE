import React from "react";
import CAMISA3 from "../assets/img/CAMISA3.jpg";
import { GrClose } from "react-icons/gr";

export default function AboutUs({ handleCerrarModalAbout }) {
  return (
    <div className="about-container">
      <button onClick={handleCerrarModalAbout} className="close-button">
        <GrClose />
      </button>
      <img src={CAMISA3} alt="" className="about-image" />
      <div className="about-content">
        <h2>Sobre Nosotros</h2>
        <span>
          Bienvenido a Eleganza Shirts, donde la elegancia y la calidad se
          fusionan para ofrecerte una experiencia única en moda. Somos una
          empresa dedicada a la importación y distribución de ropa exclusiva,
          cuidadosamente seleccionada para aquellos que buscan destacar en cada
          ocasión. En Eleganza Shirts, entendemos que la moda no es solo una
          elección de vestuario, sino una expresión de estilo y personalidad.
          Nuestra colección presenta una cuidadosa selección de prendas de alta
          calidad, diseñadas para brindar comodidad, estilo y distinción a cada
          paso que das.
        </span>
      </div>
    </div>
  );
}
