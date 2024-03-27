import React, { useEffect } from "react";
import { Player } from "video-react";
import "video-react/dist/video-react.css";

export default function Videos() {
  useEffect(() => {
    const gifs = document.querySelectorAll(".video-element");

    gifs.forEach((gif) => {
      gif.addEventListener("load", () => {
        const temporizador = setTimeout(() => {
          gif.classList.add("paused");
          clearTimeout(temporizador);
        }, gif.duration * 1000);
      });
    });
  }, []);

  return (
    <div className="video-container">
      <img
        className="full-width-image"
        src="https://res.cloudinary.com/dmfzplfra/image/upload/v1711538599/VENICE/Portada/Design_9_ochsp0.png"
        alt=""
      />
      <div className="video-group">
        <img
          className="video-element"
          key="nike"
          src="https://res.cloudinary.com/dmfzplfra/image/upload/v1711465588/VENICE/GIF/nike_dz170j.gif"
          alt="NIKE"
        />
        <img
          className="video-element"
          key="columbia"
          src="https://res.cloudinary.com/dmfzplfra/image/upload/v1711465588/VENICE/GIF/columbia_fav1gf.gif"
          alt="COLUMBIA"
        />
      </div>
      <div className="video-group">
        <img
          className="video-element"
          key="hollister"
          src="https://res.cloudinary.com/dmfzplfra/image/upload/v1711541698/VENICE/GIF/CHILD_r1qnqw.gif"
          alt="HOLLISTER"
        />

        <img
          className="video-element"
          key="levis"
          src="https://res.cloudinary.com/dmfzplfra/image/upload/v1711465585/VENICE/GIF/levis_ewhm23.gif"
          alt="LEVIS"
        />
      </div>
    </div>
  );
}
