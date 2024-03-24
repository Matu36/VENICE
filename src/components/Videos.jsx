import React, { useState } from "react";

export default function Videos() {
  const [played, setPlayed] = useState(false);

  const handleVideoPlay = () => {
    setPlayed(true);
  };

  return (
    <div className="video-container">
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
        <img
          className="image-element"
          src="https://res.cloudinary.com/dmfzplfra/image/upload/v1711293978/VENICE/VIDEOS/My_first_design_10_m2wrlj.png"
          alt=""
        />
      </div>
      <div className="video-group">
        <video
          className="video-element"
          autoPlay
          muted
          loop={!played}
          onPlay={handleVideoPlay}
        >
          <source
            src="https://res.cloudinary.com/dmfzplfra/video/upload/v1711293717/VENICE/VIDEOS/Designer_2_acwclu.mp4"
            type="video/mp4"
          />
          Tu navegador no soporta el elemento de vídeo.
        </video>
        <img
          className="image-element"
          src="https://res.cloudinary.com/dmfzplfra/image/upload/v1711293801/VENICE/VIDEOS/Designer_pdgroi.png"
          alt=""
        />
      </div>
    </div>
  );
}
