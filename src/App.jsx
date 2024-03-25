import { useState, useEffect, useRef } from "react";
import NavBar from "./components/Navbar";
import Contact from "./components/Contact";
import { camisas } from "../src/utils/Camisas";
import Card from "./components/Card";
import VENICE from "../src/assets/img/marca6.png";
import SliderModels from "./components/SliderModels";
import AboutUs from "./components/AboutUs";
import CarritoModal from "./components/CarritoModal";
import { FiShoppingCart } from "react-icons/fi";
import VENICEEXPERIENCE from "../src/assets/img/beauty.png";
import Toper from "./pages/Toper";
import Filtros from "./components/Filtros";
import FooterAlternativo from "./pages/FooterAlternativo";
import { Flip, Slide, Zoom, toast } from "react-toastify";
import CargandoStock from "./components/CargandoStock";
import Videos from "./components/Videos";
import NavBarAlternativo from "../src/components/NavBarAlternativo";

function App() {
  const [selectedMarca, setSelectedMarca] = useState();
  const [filtroPrecio, setFiltroPrecio] = useState();
  const [modal, setModal] = useState(false);
  const [modalCarrito, setModalCarrito] = useState(false);
  const [carritoC, setCarritoC] = useState(0);
  const [contact, setContact] = useState(false);
  const cardsContainerRef = useRef(null);

  useEffect(() => {
    toast.info("Prendas 100% ORIGINALES", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      newestOnTop: false,
      closeOnClick: false,
      rtl: false,
      draggable: true,
      transition: Slide,
      pauseOnHover: true,
      pauseOnFocusLoss: false,
      closeButton: false,
      icon: false,
      theme: "dark",
    });
  }, []);

  const filteredCamisas = camisas.filter((camisa) => {
    if (selectedMarca === "Todas las marcas") {
      return true;
    }

    return camisa.marca === selectedMarca;
  });

  if (filtroPrecio === "menorPrecio") {
    filteredCamisas.sort((a, b) => a.precio - b.precio);
  }

  if (filtroPrecio === "mayorPrecio") {
    filteredCamisas.sort((a, b) => b.precio - a.precio);
  }

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

  const [showLoading, setShowLoading] = useState(true);

  const closeLoading = () => {
    setShowLoading(false);
  };

  const handleSearchByMarca = (marca) => {
    const marcaNormalized =
      marca.charAt(0).toUpperCase() + marca.slice(1).toLowerCase();
    setSelectedMarca(marcaNormalized);

    setTimeout(() => {
      const firstCard = cardsContainerRef.current.querySelector(".card");
      firstCard.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  };

  return (
    <div className="container">
      {modalCarrito && (
        <div>
          <CarritoModal
            handleCerrarModalCarrito={handleCerrarModalCarrito}
            actualizarContadorCarrito={actualizarContadorCarrito}
          />
        </div>
      )}
      <NavBarAlternativo
        handleMostrarModalCarrito={handleMostrarModalCarrito}
        carritoC={carritoC}
        handleSearchByMarca={handleSearchByMarca}
      />
      <div>
        <Videos />
      </div>

      {!filteredCamisas.length > 0 && (
        <div className="frasemarcas">
          <h2>NUESTRAS MARCAS DESTACADAS</h2>
        </div>
      )}

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
      <br />
      <div>
        {filteredCamisas.length > 0 && (
          <div className="top-bar">
            <div>
              <Filtros
                filtroPrecio={filtroPrecio}
                setFiltroPrecio={setFiltroPrecio}
                selectedMarca={selectedMarca}
                setSelectedMarca={setSelectedMarca}
              />
            </div>

            <div>
              <h3>VENICE INDUMENTARIA</h3>
            </div>
            <div>
              <button className="buttonclose" onClick={handleInicioClick}>
                X
              </button>
            </div>
          </div>
        )}

        <div ref={cardsContainerRef} className="cards-container" id="card">
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

      <br />

      <div className="frase">California dressing</div>

      <div className="camisasContainer">
        <img src={VENICEEXPERIENCE} alt="camisas" className="camisasImg" />
      </div>
      <br />

      <br />
      <div className="qualityDress">
        <h2>QUALITY DRESS</h2>
      </div>
      <FooterAlternativo
        handleMostrarModalContact={handleMostrarModalContact}
        handleMostrarModalAbout={handleMostrarModalAbout}
      />

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
      <hr style={{ color: "grey", maxWidth: "100%" }} />
      <span className="copy">
        Copyright © 2024 | Venice Indumentaria Todos los derechos reservados
      </span>
    </div>
  );
}
export default App;
