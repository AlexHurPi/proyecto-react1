import React from "react";
import "./section-image-text.css";
import imagen1 from "../../assets/imagen1.jpg";

const ImageTextSection = () => {
  return (
    <section className="image-text-section">
      <p className="section-subtitle">Subtítulo de la sección</p>

      <div className="image-text-wrapper">
        <div className="image-container">
          <img
            src={imagen1}
            alt="imagen1"
          />
        </div>

        <div className="text-container">
          <h2 className="section-title">Título atractivo del bloque</h2>
          <p>
            Este es un texto descriptivo donde puedes explicar tu producto,
            servicio o cualquier información relevante. El diseño es moderno,
            limpio y se adapta a distintos tamaños de pantalla.
          </p>
          <p>
            En pantallas grandes el texto se muestra al lado de la imagen, y en
            dispositivos móviles se apilan uno encima del otro para mejorar la
            legibilidad.
          </p>
          <button className="primary-button">Llamada a la acción</button>
        </div>
      </div>
    </section>
  );
};

export default ImageTextSection;
