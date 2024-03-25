import React from "react";
import { Player } from "video-react";
import "video-react/dist/video-react.css";

export default function Videos() {
  return (
    <div className="video-container">
      <img
        className="full-width-image"
        src="https://res.cloudinary.com/dmfzplfra/image/upload/v1711327019/VENICE/VIDEOS/remeras_u7zrms.jpg"
        alt=""
      />
      <div className="video-group">
        <Player
          className="video-element"
          playsInline
          hideControls={true}
          autoPlay
          muted
          fluid // Hace que el video ocupe todo el espacio disponible
          src="https://res.cloudinary.com/dmfzplfra/video/upload/v1711290729/VENICE/VIDEOS/Designer_1_koaqbc.mp4"
        />
        <Player
          className="video-element"
          playsInline
          hideControls={true}
          autoPlay
          muted
          fluid // Hace que el video ocupe todo el espacio disponible
          src="https://res.cloudinary.com/dmfzplfra/video/upload/v1711328297/VENICE/VIDEOS/nike_tgxmuk.mp4"
        />
      </div>
      <div className="video-group">
        <img
          className="video-element"
          src="https://res.cloudinary.com/dmfzplfra/image/upload/v1711329694/VENICE/VIDEOS/Designer_pdgroi_iuzly4.png"
          alt=""
        />
        <Player
          className="video-element"
          playsInline
          hideControls={true}
          autoPlay
          muted
          fluid // Hace que el video ocupe todo el espacio disponible
          src="https://res.cloudinary.com/dmfzplfra/video/upload/v1711328296/VENICE/VIDEOS/levis_f8yulu.mp4"
        />
      </div>
    </div>
  );
}
