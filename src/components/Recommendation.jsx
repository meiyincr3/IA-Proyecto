import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Recommendation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { photo } = location.state || {}; // Obtener la foto desde el estado

  return (
    <div className="h-screen flex flex-col md:flex-row bg-gray-900 text-white">
      {/* Sección izquierda: Foto capturada */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 bg-gray-800">
        <h1 className="text-3xl font-bold mb-4">Analysis</h1>
        {photo ? (
          <img
            src={photo}
            alt="Captured"
            className="rounded-xl shadow-lg w-3/4 h-auto mb-4"
          />
        ) : (
          <p className="text-gray-400">No photo available</p>
        )}
        <p className="text-center text-lg text-gray-300">
          Facial analysis and group detection complete.
        </p>
      </div>

      {/* Sección derecha: Detalles y recomendaciones */}
      <div className="flex-1 flex flex-col p-6 bg-gray-900">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Recommendations</h2>
          <button
            onClick={() => navigate("/")}
            className="bg-orange-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-orange-400"
          >
            Back to Camera
          </button>
        </div>

        {/* Bloque de detalle principal */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-4">
          <h3 className="text-xl font-semibold mb-2">Detected Issue</h3>
          <p className="text-gray-300">
            High inflammatory processes detected in the cheekbones area. Please
            consult a specialist.
          </p>
        </div>

        {/* Lista de pruebas programadas */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-4">
          <h3 className="text-xl font-semibold mb-2">Scheduled Tests</h3>
          <ul className="text-gray-300 space-y-2">
            <li>🩸 Full Blood Test - 23.02</li>
            <li>🧠 NCCT Brain Scan - 23.02</li>
          </ul>
        </div>

        {/* Información adicional */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-4">
          <h3 className="text-xl font-semibold mb-2">Additional Notes</h3>
          <p className="text-gray-300">
            Ensure to hydrate well and follow the prescribed skincare routine.
          </p>
        </div>

        {/* Botón para finalizar */}
        <button
          onClick={() => navigate("/")}
          className="w-full bg-purple-600 text-white px-4 py-3 rounded-lg shadow-lg mt-auto hover:bg-purple-500"
        >
          Schedule Next Appointment
        </button>
      </div>
    </div>
  );
}

export default Recommendation;