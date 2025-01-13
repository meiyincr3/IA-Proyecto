import React from 'react';
import {Users, MapPin, Calendar, Star, Navigation } from 'lucide-react';
import { useLocation } from "react-router-dom";



function TourismDashboard() {
  const location = useLocation();
  const { originalImageUrl, processedImageUrl, processedImageBase64, dataPeople } = location.state || {};
  console.log("Contenido de dataPeople:", dataPeople);

  return (
    <div className="min-h-screen bg-white text-orange-400 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header with Photo Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Left - Photo Display */}
          <div className="bg-orange-100/50 backdrop-blur-sm rounded-xl p-4 shadow-xl">
            <div className="aspect-video relative overflow-hidden rounded-lg mb-4">
              <img 
                src={processedImageBase64} 
                alt="Group analyzed"
                className="w-full h-full object-cover"
              />
              {/* Face Detection Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-400" />
                  <span className="text-black font-medium">{dataPeople ? `${dataPeople.length} Personas detectadas` : "No se detectaron personas"}</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between items-center p-2">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-500">Análisis completo</span>
              </div>
            </div>
          </div>

          {/* Right - Group Analysis */}
          <div className="space-y-4">
            <div className="bg-orange-100/50 backdrop-blur-sm rounded-xl p-6 shadow-xl">
              <h2 className="text-2xl font-bold mb-4">Resultados del Análisis</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-stone-100/50 border-2  rounded-lg">
                  <div className="flex items-center gap-3">
                    <Users className="w-6 h-6 text-blue-400" />
                    <span>Tamaño del grupo</span>
                  </div>
                  <span className="text-2xl font-bold">{dataPeople ? dataPeople.length : 0}</span>
                </div>
                
              </div>
            </div>
          </div>
        </div>

        {/* Recommendations Grid */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {/* Activity Cards */}
          {['Adventure Park', 'Local Food Tour', 'Beach Activities'].map((activity, index) => (
            <div key={index} className="bg-orange-100/50 backdrop-blur-sm rounded-xl p-4 shadow-xl hover:bg-orange-400/50 transition-all cursor-pointer group">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100/50 p-2 rounded-lg group-hover:bg-blue-600 transition-colors">
                  <Navigation className="w-6 h-6" />
                </div>
                <span className="text-lg font-medium">{activity}</span>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between text-gray-400">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>poner ciudad</span>
                  </div>
                </div>
                
                <div className="text-sm text-gray-400">
                  Perfect for groups of poner rango desde hasta people
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default TourismDashboard;