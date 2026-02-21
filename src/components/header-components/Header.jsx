import React, { useState, useEffect, useRef } from 'react';
import './style.css';  // Importa el CSS

const Header = () => {
  return (
    <div className="header-container">  {/* Cambia 'header' por 'Header' */}
      <header className="header">
        <h1 className="header-title">Mi Sitio Web React</h1>
      </header>
    </div>
  );
};

export default Header;
