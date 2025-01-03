import React, { useState } from "react";
import RecommendationForm from "./RecommendationForm";
import { useNavigate } from "react-router-dom";

function AdmiView() {
  const [recommendations, setRecommendations] = useState([]);
  const [selectedRecommendation, setSelectedRecommendation] = useState(null);
  const [isCreating, setIsCreating] = useState(false);
  const navigate = useNavigate();

  const handleCreateRecommendation = (newRecommendation) => {
    setRecommendations([...recommendations, newRecommendation]);
    setIsCreating(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 px-8 py-6">
      {/* Encabezado */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-600">Gestión de Recomendaciones</h1>
        <a
          href="#"
          onClick={() => navigate("/")}
          className="text-lg text-blue-500 underline hover:text-blue-700 transition"
        >
          Cambiar tipo de usuario
        </a>
      </div>

      <div className="flex flex-1 gap-6">
        {/* Panel de la Tabla */}
        <div className="flex-1 bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-700">Recomendaciones</h2>
            <button
              onClick={() => setIsCreating(true)}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
            >
              + Crear Atracción
            </button>
          </div>

          <table className="w-full border-collapse rounded-lg overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="text-left p-4 text-blue-700">Nombre</th>
                <th className="text-left p-4 text-blue-700">Ciudad</th>
                <th className="text-left p-4 text-blue-700">Duración</th>
              </tr>
            </thead>
            <tbody>
              {recommendations.map((rec, index) => (
                <tr
                  key={index}
                  className={`cursor-pointer ${
                    selectedRecommendation === index ? "bg-green-100" : ""
                  } hover:bg-blue-50`}
                  onClick={() =>
                    setSelectedRecommendation(
                      selectedRecommendation === index ? null : index
                    )
                  }
                >
                  <td className="p-4 text-gray-700">{rec.name}</td>
                  <td className="p-4 text-gray-700">{rec.city}</td>
                  <td className="p-4 text-gray-700">{rec.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Panel de Detalles */}
        {selectedRecommendation !== null && (
          <div className="flex-1 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              {recommendations[selectedRecommendation].name}
            </h2>
            <p className="text-lg text-gray-600 mb-2">
              <strong>Ciudad:</strong> {recommendations[selectedRecommendation].city}
            </p>
            <p className="text-lg text-gray-600 mb-2">
              <strong>Duración:</strong> {recommendations[selectedRecommendation].duration}
            </p>
            <p className="text-lg text-gray-600 mb-2">
              <strong>Categoría:</strong> {recommendations[selectedRecommendation].category}
            </p>
            <p className="text-lg text-gray-600">
              <strong>Descripción:</strong> {recommendations[selectedRecommendation].description}
            </p>
          </div>
        )}
      </div>

      {/* Modal Crear Recomendación */}
      {isCreating && (
        <RecommendationForm
          onCreate={handleCreateRecommendation}
          onClose={() => setIsCreating(false)}
        />
      )}
    </div>
  );
}

export default AdmiView;