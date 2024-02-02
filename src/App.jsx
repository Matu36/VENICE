import { useState, useEffect } from "react";
import CAMISA5 from "../src/assets/img/CAMISA5.jpg";
import NavBar from "./components/Navbar";
import { camisas } from "../src/utils/Camisas";
import Card from "./components/Card";
import Footer from "./pages/Footer";
import ELEGANZA from "../src/assets/img/ELEGANZA.png";
import SliderModels from "./components/SliderModels";
import miami from "../src/assets/img/miami.jpg";
import AnimatedWord from "./components/Letras";
import AboutUs from "./components/AboutUs";
import CarritoModal from "./components/CarritoModal";
import { FiShoppingCart } from "react-icons/fi";
import { GrClose } from "react-icons/gr";

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
          <button
            className="close-button-carrito"
            onClick={handleCerrarModalCarrito}
          >
            <GrClose />
          </button>
          <CarritoModal />
        </div>
      )}

      <button className="shoppingButton" onClick={handleMostrarModalCarrito}>
        <FiShoppingCart />
        {carritoCount > 0 && <span className="badge">{carritoCount}</span>}
      </button>
      <div className="eleganzaContainer">
        <div>
          <NavBar
            onSelectMarca={setSelectedMarca}
            onInicio={handleInicioClick}
          />
        </div>
        <div className="eleganzaImgContainer">
          <img src={ELEGANZA} alt="ELEGANZA" />
        </div>

        <div className="onSale">
          <h1>On Sale!</h1>
          <h6 style={{ marginTop: "-4rem" }}>
            <AnimatedWord word="Ropa original de marca" />
          </h6>
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

      <div className="camisasContainer">
        <img src={CAMISA5} alt="camisas" className="camisasImg" />
        <img src={miami} alt="miami" className="camisasImg" />
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
        Copyright © 2024 | Eleganza Shirts Todos los derechos reservados
      </span>
    </div>
  );
}
export default App;
