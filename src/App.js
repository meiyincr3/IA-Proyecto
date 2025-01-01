import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CameraScreen from "./components/CameraScreen";
import Recommendation from "./components/Recommendation";

const App = () => {
  return (
    <Router>
      <div className="h-screen bg-gray-50">
        {/* Puedes agregar aquí una barra de navegación o un layout común */}
        <Routes>
          {/* Ruta para la pantalla inicial donde se captura la foto */}
          <Route path="/" element={<CameraScreen/>} />
          {/* Ruta para la pantalla de resultados */}
          <Route path="/recommendation" element={<Recommendation/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;