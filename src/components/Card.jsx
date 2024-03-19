import React, { useState } from "react";
// import CardAmpliada from "./CardAmpliada";

const Card = ({
  id,
  marca,
  nombre,
  talle,
  precio,
  imagen,
  imagen2,
  codigo,
  actualizarContadorCarrito,
}) => {
  const [showAlert, setShowAlert] = useState(false);
  const [currentImage, setCurrentImage] = useState(imagen);
  // const [showModal, setShowModal] = useState(false);

  // const handleImageClick = () => {
  //   setShowModal(true);
  // };

  // const closeModal = () => {
  //   setShowModal(false);
  // };

  const handleMouseOver = () => {
    setCurrentImage(imagen2);
  };

  const handleMouseOut = () => {
    setCurrentImage(imagen);
  };

  const handleTouchStart = () => {
    setCurrentImage(imagen2);
  };

  const handleTouchEnd = () => {
    setCurrentImage(imagen);
  };

  const handleComprarClick = () => {
    const productoComprado = {
      id,
      marca,
      nombre,
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
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <img
        src={currentImage}
        alt=""
        className="card-image"
        // onClick={handleImageClick}
      />

      <div className="card-content">
        <p>{nombre ? nombre : null} </p>
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
      {/* {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}></span>
            <CardAmpliada
              marca={marca}
              nombre={nombre}
              talle={talle}
              precio={precio}
              imagen={imagen}
              codigo={codigo}
            />
          </div>
        </div> */}
      {/* )} */}
    </div>
  );
};
export default Card;
