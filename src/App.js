import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Principal from "./components/Principal"; // Página principal
import AdmiView from "./components/AdmiView"; // Administrador de recomendaciones
import Layout from "./components/Layout"; // Página principal de turistas (mitad y mitad)
import CameraScreen from "./components/CameraScreen"; // Pantalla para tomar fotos
import RecommendationForm from "./components/RecommendationForm"; // Crear nueva recomendación
import Recommendation from "./components/Recommendation"; 

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<Principal />} />

        {/* Rutas para Administrador */}
        <Route path="/admin-view" element={<AdmiView />} />

        {/* Rutas para turistas */}
        <Route path="/layout" element={<Layout />} />
        <Route path="/take-picture" element={<CameraScreen fullScreen autoStart />} />
        <Route path="/recommendation" element={<Recommendation/>} />


        {/* Rutas adicionales */}
        <Route
          path="/create-recommendation"
          element={<RecommendationForm />} // Esta ruta puede usarse si quieres que el formulario sea accesible directamente.
        />
      </Routes>
    </Router>
  );
}

export default App;