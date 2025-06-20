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
  autoplaySpeed: 2000,
  dots: true,
  customPaging: (i) => (
    <div className="dot-custom">_</div>
  ),
  dotsClass: 'slick-dots custom-dots',
  arrows: true,
  prevArrow: (
    <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full shadow-md z-10">
      <FaArrowLeft />
    </button>
  ),
  nextArrow: (
    <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full shadow-md z-10">
      <FaArrowRight />
    </button>
  ),
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