import React, { useState } from "react";

export default function Videos() {
  const [played, setPlayed] = useState(false);

  const handleVideoPlay = () => {
    setPlayed(true);
  };

  return (
    <div className="video-container">
      <img
        className="full-width-image"
        src="https://res.cloudinary.com/dmfzplfra/image/upload/v1711327019/VENICE/VIDEOS/remeras_u7zrms.jpg"
        alt=""
      />
      <div className="video-group">
        <video
          className="video-element"
          autoPlay
          muted
          loop={!played}
          onPlay={handleVideoPlay}
        >
          <source
            src="https://res.cloudinary.com/dmfzplfra/video/upload/v1711290729/VENICE/VIDEOS/Designer_1_koaqbc.mp4"
            type="video/mp4"
          />
          Tu navegador no soporta el elemento de vídeo.
        </video>
        <video
          className="video-element"
          src="https://res.cloudinary.com/dmfzplfra/video/upload/v1711328297/VENICE/VIDEOS/nike_tgxmuk.mp4"
          alt=""
          autoPlay
          muted
          loop={!played}
          onPlay={handleVideoPlay}
        />
      </div>
      <div className="video-group">
        <img
          className="video-element"
          src="https://res.cloudinary.com/dmfzplfra/image/upload/v1711329694/VENICE/VIDEOS/Designer_pdgroi_iuzly4.png"
          alt=""
        />
        <video
          className="video-element"
          src="https://res.cloudinary.com/dmfzplfra/video/upload/v1711328296/VENICE/VIDEOS/levis_f8yulu.mp4"
          alt=""
          autoPlay
          muted
          loop={!played}
          onPlay={handleVideoPlay}
        />
      </div>
    </div>
  );
}
