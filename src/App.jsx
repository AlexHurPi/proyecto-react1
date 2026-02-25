// App.jsx
import { Routes, Route } from 'react-router-dom';
import Header from './components/header-components/Header.jsx';
import Inicio from './pages/Inicio.jsx';  // ← Importar aquí
import Servicios from './pages/Servicios.jsx';  // ← Importar aquí
import Footer from './components/footer-components/footer.jsx';
import './App.css';

function App() {
  return (
    <>
      <Header />  
      <main className="flex-grow-1">
        <Routes>
           {/* ← ESTO FALTABA: ruta "/" = página inicial */}
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/servicios" element={<Servicios />} />

        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
