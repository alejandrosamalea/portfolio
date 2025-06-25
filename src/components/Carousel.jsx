import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const sliderRef = useRef(null); // Crear una referencia para el slider

  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false, // Deshabilitar flechas por defecto de react-slick (usaremos las personalizadas)
    dots: false,
    pauseOnHover: true,
    beforeChange: (oldIndex, newIndex) => setCurrent(newIndex), // Actualizar el estado al cambiar de slide
    swipeToSlide: true,
  };

  // Función para cambiar de slide manualmente
  const changeSlide = (index) => {
    setCurrent(index);
    sliderRef.current.slickGoTo(index); // Cambiar al slide correspondiente usando la ref
  };

  // Función para ir al slide anterior
  const goToPrev = () => {
    const newIndex = current === 0 ? 3 : current - 1;
    setCurrent(newIndex);
    sliderRef.current.slickGoTo(newIndex);
  };

  // Función para ir al slide siguiente
  const goToNext = () => {
    const newIndex = current === 3 ? 0 : current + 1;
    setCurrent(newIndex);
    sliderRef.current.slickGoTo(newIndex);
  };

  return (
    <div className="w-full max-w-4xl mx-auto overflow-hidden relative">
      <div className="h-80 cursor-grab active:cursor-grabbing">
        <Slider {...settings} ref={sliderRef}>
<div className="bg-black text-white px-6 [@media(min-width:681px)]:pl-16 [@media(min-width:681px)]:pr-8 flex flex-col [@media(min-width:681px)]:flex-row items-start [@media(min-width:681px)]:items-center justify-center gap-4 relative overflow-hidden h-auto [@media(min-width:681px)]:h-80 py-6 [@media(min-width:681px)]:py-0">
  {/* Contenido textual */}
  <div className="z-10 flex flex-col items-start text-left order-1">
    <h2 className="text-3xl [@media(min-width:681px)]:text-4xl font-bold">Waumatch</h2>
    <p className="text-base [@media(min-width:681px)]:text-lg max-w-md mt-1">
      Un espacio donde las mascotas encuentran compañía para sus paseos.
    </p>
    <button className="mt-3 px-5 [@media(min-width:681px)]:px-6 py-2 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition">
      Ver proyecto
    </button>
  </div>

  {/* Imagen */}
  <img
    src="../static/img/FotoConPerro.png"
    alt="Waumatch"
    className="w-44 [@media(min-width:681px)]:w-auto h-40 [@media(min-width:681px)]:h-full object-contain transition-all duration-300 order-2 [@media(min-width:681px)]:order-none [@media(min-width:681px)]:absolute [@media(min-width:681px)]:right-10 [@media(min-width:681px)]:bottom-0"
  />
</div>
          <div className="h-80 bg-green-500 flex items-center justify-center text-white text-3xl font-bold">
            PROYECTOS
          </div>
          <div className="h-80 bg-blue-500 flex items-center justify-center text-white text-3xl font-bold">
            CONTACTO
          </div>
          <div className="h-80 bg-yellow-500 flex items-center justify-center text-white text-3xl font-bold">
            OTRO
          </div>
        </Slider>
      </div>

      {/* Flechas de navegación */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 text-4xl text-white cursor-pointer">
        <button onClick={goToPrev} className="p-2">
          &lt;
        </button>
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 text-4xl text-white cursor-pointer">
        <button onClick={goToNext} className="p-2">
          &gt;
        </button>
      </div>

      {/* Indicadores de navegación */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`h-1 w-12 rounded-full transition-all duration-300 cursor-pointer ${
              current === i ? "w-12 bg-white" : "w-4 bg-gray-300"
            }`}
            onClick={() => changeSlide(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
