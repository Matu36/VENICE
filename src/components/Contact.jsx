import React from "react";
import { GrClose } from "react-icons/gr";
import { FaPhone } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import marca from "../assets/img/marca4.png";

export default function Contact({ handleCerrarModalContact }) {
  return (
    <div className="about-container">
      <img src={marca} alt="" className="about-image" />

      <div className="about-content">
        <h2>Contactános</h2>
        <div>
          <div className="contacto">
            <span className="letracontacto">
              <FaPhone className="iconoContacto" />
              221 - 5991213
            </span>
          </div>
          <div>
            <div className="contacto">
              <span className="letracontacto">
                <FaInstagram className="iconoContacto" />
                @veniceindumentaria
              </span>
            </div>
            <div className="contacto">
              <span className="letracontacto">
                <FaMapMarkerAlt className="iconoContacto" />
                La Plata, Buenos Aires, Argentina
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="about-button">
        <button onClick={handleCerrarModalContact}>
          <GrClose />
        </button>
      </div>
    </div>
  );
}
