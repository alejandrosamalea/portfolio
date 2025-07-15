import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 680);
    };

    handleResize(); // check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: isSmallScreen ? 3000 : 5000,
    arrows: false,
    dots: false,
    pauseOnHover: true,
    beforeChange: (_, newIndex) => setCurrent(newIndex),
    swipeToSlide: true,
  };

  const changeSlide = (index) => {
    setCurrent(index);
    sliderRef.current.slickGoTo(index);
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <section id="projects" className="my-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-pink-400">
        Proyectos Personales
      </h2>
      <div className="w-full max-w-4xl mx-auto overflow-hidden relative">
        <div className="h-80 cursor-grab active:cursor-grabbing">
          <Slider {...settings} ref={sliderRef}>
            {/* Waumatch */}
            <div className="bg-black text-white px-6 md:pl-16 md:pr-8 flex flex-col md:flex-row items-start md:items-center justify-center gap-4 relative overflow-hidden h-auto md:h-80 py-6 md:py-0">
              <div className="z-10 flex flex-col items-start text-left order-1 pl-6 md:pl-0">
                <h2 className="text-3xl md:text-4xl font-bold">Waumatch</h2>
                <p className="text-base md:text-lg max-w-md mt-1">
                  Una App para el cuidado de mascotas desarrollada en Kotlin y Firebase
                </p>
                <Link to="/projects/waumatch">
                  <button className="mt-3 px-5 md:px-6 py-2 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition">
                    Ver proyecto
                  </button>
                </Link>
              </div>
              <img
                src="../static/img/FotoConPerro.webp"
                alt="Waumatch"
                className="w-44 md:w-auto h-40 md:h-full object-contain transition-all duration-300 order-2 md:order-none md:absolute md:right-10 md:bottom-0"
              />
            </div>

            {/* TFGPOKE */}
            <div className="bg-black text-white px-6 md:pl-16 md:pr-8 flex flex-col md:flex-row items-start md:items-center justify-center gap-4 relative overflow-hidden h-auto md:h-80 py-6 md:py-0">
              <div className="z-10 flex flex-col items-start text-left order-1 pl-6 md:pl-0">
                <h2 className="text-3xl md:text-4xl font-bold">TFGPOKE</h2>
                <p className="text-base md:text-lg max-w-md mt-1">
                  Un pequeño juego de combate Pokémon desarrollado con Java, JavaScript, HTML y CSS.
                </p>
               <Link to="/projects/tfgpoke">
                  <button className="mt-3 px-5 md:px-6 py-2 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition">
                    Ver proyecto
                  </button>
                </Link>
              </div>
              <img
                src="../static/img/fotoPokemon.webp"
                alt="TFGPOKE"
                className="w-44 md:w-auto h-40 md:h-full object-contain transition-all duration-300 order-2 md:order-none md:absolute md:right-10 md:bottom-0"
              />
            </div>

            {/* Portfolio */}
            <div className="bg-black text-white px-6 md:pl-16 md:pr-8 flex flex-col md:flex-row items-start md:items-center justify-center gap-4 relative overflow-hidden h-auto md:h-80 py-6 md:py-0">
              <div className="z-10 flex flex-col items-start text-left order-1 pl-6 md:pl-0">
                <h2 className="text-3xl md:text-4xl font-bold">Portfolio</h2>
                <p className="text-base md:text-lg max-w-md mt-1">
                  Este portfolio está construido con React, utilizando componentes reutilizables, diseño responsive y librerías modernas como Tailwind y React Slick.
                </p>
                <a
                  href="https://github.com/alejandrosamalea/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 px-5 md:px-6 py-2 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition inline-block"
                >
                  Ver en GitHub
                </a>
              </div>
              <img
                src="../static/img/imagenPortfolio.webp"
                alt="Portfolio Personal"
                className="w-44 md:w-auto h-40 md:h-full object-contain transition-all duration-300 order-2 md:order-none md:absolute md:right-10 md:bottom-0"
              />
            </div>
          </Slider>
        </div>

        {!isSmallScreen && (
          <>
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
          </>
        )}

        {/* barras del carrusel */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`
                rounded-full cursor-pointer transition-all duration-300
                ${current === i ? "bg-white" : "bg-gray-300"}
                h-1 [@media(max-width:680px)]:h-[2px]
                ${current === i ? "w-12 [@media(max-width:680px)]:w-4" : "w-4 [@media(max-width:680px)]:w-2"}
              `}
              onClick={() => changeSlide(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
