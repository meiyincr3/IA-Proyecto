import React from 'react';
import {Users, MapPin, Calendar, Star, Navigation } from 'lucide-react';
import { useLocation } from "react-router-dom";



function TourismDashboard() {
  const location = useLocation();
  const { originalImageUrl, processedImageUrl, processedImageBase64, dataPeople } = location.state || {};
  console.log("Contenido de dataPeople:", dataPeople);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-gray-900 to-black text-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header with Photo Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Left - Photo Display */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 shadow-xl">
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
                  <span className="text-white font-medium">{dataPeople ? `${dataPeople.length} Personas detectadas` : "No se detectaron personas"}</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between items-center p-2">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-500">Análisis completo</span>
              </div>
              <span className="text-gray-400">Group Type: Friends</span>
            </div>
          </div>

          {/* Right - Group Analysis */}
          <div className="space-y-4">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-xl">
              <h2 className="text-2xl font-bold mb-4">Resultados del Análisis</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Users className="w-6 h-6 text-blue-400" />
                    <span>Tamaño del grupo</span>
                  </div>
                  <span className="text-2xl font-bold">{dataPeople ? dataPeople.length : 0}</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Star className="w-6 h-6 text-yellow-400" />
                    <span>Actividades recomendadas</span>
                  </div>
                  <span className="text-blue-400">View All</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recommendations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {/* Activity Cards */}
          {['Adventure Park', 'Local Food Tour', 'Beach Activities'].map((activity, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 shadow-xl hover:bg-gray-700/50 transition-all cursor-pointer group">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-600/50 p-2 rounded-lg group-hover:bg-blue-600 transition-colors">
                  <Navigation className="w-6 h-6" />
                </div>
                <span className="text-lg font-medium">{activity}</span>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between text-gray-400">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>2.5 km away</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>4.8</span>
                  </div>
                </div>
                
                <div className="text-sm text-gray-400">
                  Perfect for groups of 3-5 people
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Schedule Section */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Calendar className="w-6 h-6 text-blue-400" />
              <h2 className="text-xl font-bold">Suggested Schedule</h2>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
              Create Itinerary
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { time: 'Morning', activity: 'Adventure Park Visit' },
              { time: 'Afternoon', activity: 'Local Food Tour' },
              { time: 'Evening', activity: 'Beach Sunset Activities' }
            ].map((slot, index) => (
              <div key={index} className="bg-gray-700/50 p-4 rounded-lg">
                <div className="text-gray-400 text-sm mb-1">{slot.time}</div>
                <div className="font-medium">{slot.activity}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourismDashboard;