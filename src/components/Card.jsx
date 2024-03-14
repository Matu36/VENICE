import React, { useState } from "react";

const Card = ({
  id,
  marca,
  talle,
  precio,
  imagen,
  imagen2,
  codigo,
  actualizarContadorCarrito,
}) => {
  const [showAlert, setShowAlert] = useState(false);
  const [currentImage, setCurrentImage] = useState(imagen);

  const handleMouseOver = () => {
    setCurrentImage(imagen2);
  };

  const handleMouseOut = () => {
    setCurrentImage(imagen);
  };

  const handleComprarClick = () => {
    const productoComprado = {
      id,
      marca,
      talle,
      precio,
      imagen,
      codigo,
    };

    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    carrito.push(productoComprado);

    localStorage.setItem("carrito", JSON.stringify(carrito));

    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
    actualizarContadorCarrito();
  };

  return (
    <div
      className="card"
      id={id}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <img src={currentImage} alt="" className="card-image" />
      <div className="card-content">
        <p>Talle: {talle}</p>
        <p>Precio: $ {precio}</p>
        <p style={{ color: "grey", fontSize: "10px", marginTop: "10px" }}>
          Código: {codigo}
        </p>
      </div>
      <br />
      <div>
        <button className="comprar" onClick={handleComprarClick}>
          {" "}
          Añadir al Carrito{" "}
        </button>
      </div>
      {showAlert && (
        <div className="alert-container">
          <div className="alert-message">
            El producto ha sido añadido al carrito
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
