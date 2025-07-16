import React, { useState } from "react";
import "./TFGPoke.css";

const TFGPoke = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (img) => {
    if (window.innerWidth >= 768) setSelectedImage(img);
  };
  const closeModal = () => setSelectedImage(null);

  return (
    <div className="pt-0 px-4 pb-10">
      {/* Navbar */}
    <nav className="hidden lg:flex bg-black text-white p-4 sticky top-0 z-10 items-center">
        <div className="flex-shrink-0">
          <a href="/" className="navbar-links text-xl text-pink-400 font-semibold hover:text-white">
            Regresar
          </a>
        </div>
        <ul className="flex gap-6 justify-center flex-grow navbar-links text-xl">
          <li><a href="#inicioApp">Inicio</a></li>
          <li><a href="#administracion">Admin</a></li>
          <li><a href="#registro">Registro</a></li>
          <li><a href="#personaje">Personaje</a></li>
          <li><a href="#inicioaventura">Aventura</a></li>
          <li><a href="#mapa">Mapa</a></li>
          <li><a href="#combate">Combate</a></li>
          <li><a href="#acciones">Acciones</a></li>
        </ul>
      </nav>

      {/* Header */}
      <header className="mb-12 text-center">
        <h1 id="inicioApp" className="text-4xl font-bold section-title">TFG Pokémon</h1>
        <p className="text-white-400 mt-2 max-w-3xl mx-auto">
          Proyecto de fin de grado basado en un videojuego tipo Pokémon. Permite a administradores gestionar entrenadores, Pokémon, ataques y tipos. Los jugadores pueden iniciar sesión, crear un personaje, elegir un inicial y vivir una aventura completa con combates, exploración, capturas y narrativa propia.
        </p>
      </header>

      <main className="space-y-16 max-w-6xl mx-auto">
        {[
          {
            id: "inicioApp",
            title: "Pantalla de inicio",
            images: ["portada.webp"],
          },
          {
            id: "administracion",
            title: "Panel de administración",
            images: ["editarPokemon.webp", "editarAtaques.webp", "editarTipos.webp", "editarEntrenador.webp"],
          },
          {
            id: "registro",
            title: "Registro e inicio",
            images: ["registro1.webp", "registro2.webp", "inicio.webp"],
          },
          {
            id: "personaje",
            title: "Selección de personaje",
            images: ["seleccionarChicooChica.webp", "seleccionarNombre.webp"],
          },
          {
            id: "inicioaventura",
            title: "Inicio de la aventura",
            images: ["historia1.webp", "mapa1.webp"],
          },
          {
            id: "mapa",
            title: "Exploración del mapa",
            images: ["gimnasio.webp", "casa1.webp", "casa2.webp"],
          },
          {
            id: "combate",
            title: "Combate Pokémon",
            images: ["combateSalvaje.webp"],
          },
        ].map(({ id, title, images }) => (
          <section key={id} id={id}>
            <h2 className="text-2xl font-semibold section-title text-center mb-6">{title}</h2>
            <div className="image-row flex flex-wrap gap-4 justify-center">
              {images.map((img, idx) => (
                <React.Fragment key={idx}>
                  <img
                    src={`/static/img/imgTFGPoke/${img}`}
                    alt={`${title} ${idx + 1}`}
                    className="screenshot transition duration-200 hover:scale-105 cursor-pointer hidden md:inline-block"
                    onClick={() => openModal(`/static/img/imgTFGPoke/${img}`)}
                  />
                  <img
                    src={`/static/img/imgTFGPoke/${img}`}
                    alt={`${title} ${idx + 1}`}
                    className="screenshot md:hidden"
                  />
                </React.Fragment>
              ))}
            </div>
          </section>
        ))}

        {/* Acciones */}
        <section id="acciones" className="text-center mt-16 space-y-6">
          <h3 className="text-2xl font-semibold section-title">Acciones</h3>
          <div className="flex justify-center gap-8 mt-4">
            <a
              href="https://github.com/alejandrosamalea/TFGPoke"
              target="_blank"
              rel="noopener noreferrer"
              className="action-link"
            >
              <i className="devicon-github-original text-3xl"></i>
              <span>Ver en GitHub</span>
            </a>
          </div>
        </section>
      </main>

      {/* Modal de imagen ampliada (solo escritorio) */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <img
            src={selectedImage}
            alt="ampliada"
            className="max-w-4xl max-h-[90vh] rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default TFGPoke;
