import React from "react";

export default function CardAmpliada({ imagen, precio }) {
  return (
    <div className="CardAmpliada">
      <img src={imagen} alt="Imagen ampliada" />
      <span style={{ color: "black" }}>${precio}</span>
    </div>
  );
}
