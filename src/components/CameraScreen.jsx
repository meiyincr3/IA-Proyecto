import React, { useRef, useState, useEffect } from "react";
import { Camera, RefreshCw, Check, Loader } from "lucide-react";
import { useNavigate } from "react-router-dom";

function CameraScreen({ fullScreen = false, autoStart = false }) {
  const videoRef = useRef(null);
  const [photo, setPhoto] = useState(null);
  const [cameraStarted, setCameraStarted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user", width: { ideal: 1280 }, height: { ideal: 720 } },
      });
      videoRef.current.srcObject = stream;
      setCameraStarted(true);
    } catch (error) {
      console.error("Error accessing the camera:", error);
    }
  };

  useEffect(() => {
    if (autoStart) {
      startCamera();
    }
  }, [autoStart]);

  const capturePhoto = () => {
    if (!cameraStarted || !videoRef.current) return;

    const canvas = document.createElement("canvas");
    const video = videoRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL("image/png");
    setPhoto(dataUrl);

    video.srcObject.getTracks().forEach((track) => track.stop());
    setCameraStarted(false);
  };

  const handleRetake = () => {
    setPhoto(null);
    startCamera();
  };

  const handleContinue = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate("/recommendation", { state: { photo } });
    }, 1500);
  };

  return (
    <div className={`flex flex-col items-center justify-center ${fullScreen ? "min-h-screen" : "h-full"}`}>
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-orange-400">Sistema de Recomendaciones Turísticas</h1>
        <p className="text-orange-200 mt-2">
          Toma una foto de tu grupo y recibe recomendaciones personalizadas
        </p>
      </div>

      <div className="relative w-full max-w-3xl aspect-video bg-black/50 rounded-xl overflow-hidden shadow-lg border border-orange-400">
        {photo ? (
          <img src={photo} alt="Captured" className="w-full h-full object-cover" />
        ) : (
          <video ref={videoRef} autoPlay className="w-full h-full object-cover" />
        )}
      </div>

      <div className="flex justify-center gap-4 mt-8">
        {!photo && cameraStarted && (
          <button
            onClick={capturePhoto}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-transform transform hover:scale-105"
          >
            <Camera className="w-5 h-5" />
            Tomar Foto
          </button>
        )}
        {photo && (
          <div className="flex gap-4">
            <button
              onClick={handleRetake}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-transform transform hover:scale-105"
            >
              <RefreshCw className="w-5 h-5" />
              Retomar
            </button>
            <button
              onClick={handleContinue}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-transform transform hover:scale-105"
            >
              <Check className="w-5 h-5" />
              Continuar
            </button>
          </div>
        )}
        {isLoading && (
          <div className="flex items-center gap-3 text-orange-200">
            <Loader className="w-6 h-6 animate-spin" />
            Analizando imagen...
          </div>
        )}
      </div>
    </div>
  );
}

export default CameraScreen;