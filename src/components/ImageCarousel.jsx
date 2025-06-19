import React from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function ImageCarousel() {
   const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,  
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 4000,  
    dots: true,  
  };

  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-10">
      <Slider {...settings}>
        <div>
          <a href="#about">
            <img
              src="path_to_image_1.jpg"  // Reemplaza con la ruta de la primera imagen
              alt="Sobre mí"
              className="w-full h-32 object-cover"
            />
          </a>
        </div>
        <div>
          <a href="#projects">
            <img
              src="path_to_image_2.jpg"  // Reemplaza con la ruta de la segunda imagen
              alt="Proyectos"
              className="w-full h-32 object-cover"
            />
          </a>
        </div>
        <div>
          <a href="#contact">
            <img
              src="path_to_image_3.jpg"  // Reemplaza con la ruta de la tercera imagen
              alt="Contacto"
              className="w-full h-32 object-cover"
            />
          </a>
        </div>
      </Slider>
     
    </nav>
  );
}