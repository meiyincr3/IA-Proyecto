import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserShield, faUser } from "@fortawesome/free-solid-svg-icons";

function Principal() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen">
      {/* Lado izquierdo: Opciones de acceso */}
      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Tipo de Acceso
          </h1>
          <div className="space-y-8">
            {/* Opción Administrador */}
            <button
              onClick={() => navigate("/admin-view")}
              className="w-80 p-6 border rounded-lg flex items-center gap-4 hover:shadow-lg transition transform hover:scale-105 mx-auto"
              style={{ backgroundColor: "#f9f9f9" }}
            >
              <FontAwesomeIcon
                icon={faUserShield}
                className="text-orange-500 text-3xl"
              />
              <div>
                <p className="text-lg font-semibold text-gray-800">
                  Soy administrador
                </p>
                <p className="text-sm text-gray-500">
                  Acceso para gestionar el sistema
                </p>
              </div>
            </button>

            {/* Opción Turista */}
            <button
              onClick={() => navigate("/layout")}
              className="w-80 p-6 border rounded-lg flex items-center gap-4 hover:shadow-lg transition transform hover:scale-105 mx-auto"
              style={{ backgroundColor: "#f9f9f9" }}
            >
              <FontAwesomeIcon
                icon={faUser}
                className="text-blue-500 text-3xl"
              />
              <div>
                <p className="text-lg font-semibold text-gray-800">
                  Soy turista
                </p>
                <p className="text-sm text-gray-500">
                  Acceso para recibir recomendaciones
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Lado derecho: Imagen */}
      <div className="w-1/2 relative">
        <img
          src="/main_images/main.png"
          alt="Imagen Principal"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Principal;