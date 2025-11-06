import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Semblanza from './pages/Semblanza';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/semblanza" element={<Semblanza />} />
        {/* Agrega más rutas aquí según necesites */}
      </Routes>
    </Router>
  );
}

export default App;
