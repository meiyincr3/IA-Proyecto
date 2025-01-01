import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function CameraScreen() {
  const videoRef = useRef(null);
  const [photo, setPhoto] = useState(null);
  const [cameraStarted, setCameraStarted] = useState(false); // Estado para verificar si la cámara está activa
  const navigate = useNavigate();

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      setCameraStarted(true); // Indicar que la cámara ha comenzado
    } catch (error) {
      console.error("Error accessing the camera:", error);
    }
  };

  const capturePhoto = () => {
    if (!cameraStarted || !videoRef.current || !videoRef.current.srcObject) {
      console.error("Camera not initialized or video stream not available.");
      return;
    }

    const canvas = document.createElement("canvas");
    const video = videoRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const dataUrl = canvas.toDataURL("image/png");
    setPhoto(dataUrl);

    // Pausa la cámara después de tomar la foto
    video.srcObject.getTracks().forEach((track) => track.stop());
    setCameraStarted(false); // La cámara ya no está activa
  };

  const handleContinue = () => {
    navigate("/recommendation", { state: { photo } });
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Capture Photo</h1>
      {photo ? (
        <img
          src={photo}
          alt="Captured"
          className="border rounded-lg shadow-lg w-3/4 h-auto mb-4"
        />
      ) : (
        <video
          ref={videoRef}
          autoPlay
          className="border rounded-lg shadow-lg w-3/4 h-3/4 mb-4"
        />
      )}
      <div className="flex gap-4">
        {!cameraStarted && !photo && (
          <button
            onClick={startCamera}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-2"
          >
            Start Camera
          </button>
        )}
        {cameraStarted && !photo && (
          <button
            onClick={capturePhoto}
            className="bg-green-500 text-white px-4 py-2 rounded-lg mb-2"
          >
            Capture Photo
          </button>
        )}
        {photo && (
          <>
            <button
              onClick={() => setPhoto(null)}
              className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
            >
              Retake Photo
            </button>
            <button
              onClick={handleContinue}
              className="bg-green-500 text-white px-4 py-2 rounded-lg"
            >
              Continue
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default CameraScreen;