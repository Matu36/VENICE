import { useState, useEffect } from "react";
import NavBar from "./components/Navbar";
import Contact from "./components/Contact";
import { camisas } from "../src/utils/Camisas";
import Card from "./components/Card";
import Footer from "./pages/Footer";
import VENICE from "../src/assets/img/marca6.png";
import SliderModels from "./components/SliderModels";
import AboutUs from "./components/AboutUs";
import CarritoModal from "./components/CarritoModal";
import { FiShoppingCart } from "react-icons/fi";
import VENICEEXPERIENCE from "../src/assets/img/VENICEEXPERIENCE.png";
import Toper from "./pages/Toper";

function App() {
  const [selectedMarca, setSelectedMarca] = useState();
  const [modal, setModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [modalCarrito, setModalCarrito] = useState(false);
  const [carritoC, setCarritoC] = useState(0);
  const [contact, setContact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const filteredCamisas =
    selectedMarca === "Todas las marcas"
      ? camisas
      : camisas.filter((c) => c.marca === selectedMarca);

  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const carritoCount = carrito.length;

  const actualizarContadorCarrito = () => {
    const carritoActualizado =
      JSON.parse(localStorage.getItem("carrito")) || [];
    const count = carritoActualizado.length;
    setCarritoC(count);
  };

  const handleMostrarModalCarrito = () => {
    setModalCarrito(true);
    actualizarContadorCarrito();
  };

  const handleCerrarModalCarrito = () => {
    setModalCarrito(false);
    actualizarContadorCarrito();
  };

  const handleInicioClick = () => {
    setSelectedMarca(null);
  };

  const handleMostrarModalAbout = () => {
    setModal(true);
  };

  const handleCerrarModalAbout = () => {
    setModal(false);
  };

  const handleMostrarModalContact = () => {
    setContact(true);
  };

  const handleCerrarModalContact = () => {
    setContact(false);
  };

  useEffect(() => {
    actualizarContadorCarrito();
  }, []);

  return (
    <div className={`container ${scrolled ? "scrolled" : ""}`}>
      {modalCarrito && (
        <div>
          <CarritoModal
            handleCerrarModalCarrito={handleCerrarModalCarrito}
            actualizarContadorCarrito={actualizarContadorCarrito}
          />
        </div>
      )}
      <button className="shoppingButton" onClick={handleMostrarModalCarrito}>
        <FiShoppingCart />
        {carritoC > 0 && <span className="badge">{carritoC}</span>}
      </button>
      <Toper />
      <div className="eleganzaImgContainer">
        <img src={VENICE} alt="VENICE" />
      </div>
      <br />

      <div className="eleganzaContainer">
        <div className="navBarDiv">
          {!filteredCamisas.length > 0 && (
            <NavBar
              onSelectMarca={setSelectedMarca}
              onInicio={handleInicioClick}
            />
          )}
        </div>
      </div>
      <div>
        {filteredCamisas.length > 0 && (
          <div className="top-bar">
            <div>
              <h3>VENICE INDUMENTARIA</h3>
            </div>
            <div>
              <button onClick={handleInicioClick}>X</button>
            </div>
          </div>
        )}

        <div className="cards-container">
          {filteredCamisas.map((camisa) => (
            <Card
              id="cards"
              key={camisa.id}
              {...camisa}
              actualizarContadorCarrito={actualizarContadorCarrito}
            />
          ))}
        </div>
      </div>
      <div className="sliderContainer">
        <SliderModels />
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="frase">California dreaming, California dressing</div>
      <div className="camisasContainer">
        <img src={VENICEEXPERIENCE} alt="camisas" className="camisasImg" />
      </div>
      <Footer
        handleMostrarModalAbout={handleMostrarModalAbout}
        handleMostrarModalContact={handleMostrarModalContact}
      />
      <br />
      {contact && (
        <div className="modal">
          {/* <div className="modal-content"> */}
          <Contact handleCerrarModalContact={handleCerrarModalContact} />
          {/* </div> */}
        </div>
      )}
      {modal && (
        <div className="modal">
          {/* <div className="modal-content"> */}
          <AboutUs handleCerrarModalAbout={handleCerrarModalAbout} />
          {/* </div> */}
        </div>
      )}
      <span className="copy">
        Copyright © 2024 | Venice Indumentaria Todos los derechos reservados
      </span>
    </div>
  );
}
export default App;
