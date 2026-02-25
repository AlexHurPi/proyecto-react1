// pages/Inicio.jsx
import React from 'react';
import ImageTextSection from '../components/section-components/Section-image-text';


const Inicio = () => {
  return (
    <div className="container py-3">
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <h1 className="display-4 fw-bold mb-4">¡Bienvenido a Inicio!</h1>
          <p className="lead mb-5">
            Esta es tu página de inicio. Aquí va el contenido principal.
          </p>
          <ImageTextSection />          
        </div>
      </div>
    </div>
  );
};

export default Inicio;
