import { useState, useEffect } from "react";
import NavBar from "./components/Navbar";
import { camisas } from "../src/utils/Camisas";
import Card from "./components/Card";
import Footer from "./pages/Footer";
import VENICE from "../src/assets/img/marca6.png";
import SliderModels from "./components/SliderModels";
import AnimatedWord from "./components/Letras";
import AboutUs from "./components/AboutUs";
import CarritoModal from "./components/CarritoModal";
import { FiShoppingCart } from "react-icons/fi";
import VENICEEXPERIENCE from "../src/assets/img/VENICEEXPERIENCE.png";

function App() {
  const [selectedMarca, setSelectedMarca] = useState();
  const [modal, setModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [modalCarrito, setModalCarrito] = useState(false);

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

  useEffect(() => {
    carritoCount;
  }, [carritoCount]);

  const handleInicioClick = () => {
    setSelectedMarca(null);
  };

  const handleMostrarModalAbout = () => {
    setModal(true);
  };

  const handleCerrarModalAbout = () => {
    setModal(false);
  };

  const handleMostrarModalCarrito = () => {
    setModalCarrito(true);
  };

  const handleCerrarModalCarrito = () => {
    setModalCarrito(false);
  };

  return (
    <div className={`container ${scrolled ? "scrolled" : ""}`}>
      {modalCarrito && (
        <div>
          <CarritoModal handleCerrarModalCarrito={handleCerrarModalCarrito} />
        </div>
      )}

      <button className="shoppingButton" onClick={handleMostrarModalCarrito}>
        <FiShoppingCart />
        {carritoCount > 0 && <span className="badge">{carritoCount}</span>}
      </button>
      <div className="eleganzaImgContainer">
        <img src={VENICE} alt="VENICE" />
      </div>
      <div className="eleganzaContainer">
        <div className="navBarDiv">
          {/* <div className="onSale">
            <h3>
              <AnimatedWord word="Ropa original de marca" />
            </h3>
          </div> */}

          <NavBar
            onSelectMarca={setSelectedMarca}
            onInicio={handleInicioClick}
          />
        </div>
      </div>
      <div className="cards-container" id="cards">
        {filteredCamisas.map((camisa) => (
          <Card key={camisa.id} {...camisa} />
        ))}
      </div>
      <div className="sliderContainer">
        <SliderModels />
      </div>
      <br />
      <br />
      <br />
      <br />

      <div className="camisasContainer">
        <img src={VENICEEXPERIENCE} alt="camisas" className="camisasImg" />
      </div>

      <Footer handleMostrarModalAbout={handleMostrarModalAbout} />
      <br />
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
