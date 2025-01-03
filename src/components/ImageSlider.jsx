import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  // Dinámicamente importar todas las imágenes desde la carpeta 'src/images'
  const importAll = (r) => r.keys().map(r);
  const images = importAll(require.context("../images", false, /\.(png|jpe?g|webp)$/));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="w-full h-screen">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="flex justify-center items-center h-[90vh]">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;