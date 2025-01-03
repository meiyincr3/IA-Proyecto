import React from 'react';
import ImageSlider from './ImageSlider';
import { useNavigate } from "react-router-dom";
import { Camera } from "lucide-react";

const Layout = () => {
  const navigate = useNavigate();

  const handleActivateCamera = () => {
    navigate("/take-picture");
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* Lado Izquierdo: Image Slider */}
      <div className="w-1/2 p-4">
        <ImageSlider />
      </div>

      {/* Lado Derecho: Botón para ir a pantalla completa */}
      <div className="w-1/2 p-4 flex items-center justify-center">
      <div className="flex flex-col text-center mb-6 justify-center items-center">
        <h1 className="text-4xl font-bold text-orange-400">Sistema de Recomendaciones Turísticas</h1>
        <p className="text-orange-200 p-2">
          Toma una foto de tu grupo y recibe recomendaciones personalizadas
        </p>
        <div className="flex relative w-full max-w-3xl aspect-video bg-black/50 rounded-xl overflow-hidden shadow-lg border border-orange-400 p-2">
      </div>
        <button
               onClick={handleActivateCamera}
            className=" flex bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-transform transform hover:scale-105 w-1/3 mt-4 justify-center"
          >
            <Camera className="w-5 h-5" />
            Activar Cámara
          </button>
      </div>
        
      </div>
    </div>
  );
};
  
  export default Layout;

