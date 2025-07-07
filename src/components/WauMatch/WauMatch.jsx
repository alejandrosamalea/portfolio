// src/components/WauMatch/WauMatch.jsx
import React from "react";
import "./wauMatchs.css";

const WauMatch = () => {
  return (
    <div className="pt-0 px-4 pb-10">
      {/* Navbar */}
      <nav className="hidden md:flex bg-black text-white p-4 sticky top-0 z-10 items-center">
        <div className="flex-shrink-0">
          <a href="/" className="navbar-links text-xl text-pink-400 font-semibold hover:text-white">
            Regresar
          </a>
        </div>
        <ul className="flex gap-6 justify-center flex-grow navbar-links text-xl">
          <li><a href="#home">Home</a></li>
          <li><a href="#perfil">Perfil</a></li>
          <li><a href="#resenas">Reseñas</a></li>
          <li><a href="#chat">Chat</a></li>
          <li><a href="#anuncios">Anuncios</a></li>
          <li><a href="#acciones">Acciones</a></li>
        </ul>
      </nav>

      <header className="mb-12 text-center">
        <h1 id="home" className="text-4xl font-bold section-title">Pantallas de WauMatch</h1>
        <p className="text-gray-400 mt-2">Explora las distintas pantallas de la aplicación</p>
      </header>

      <main className="space-y-16 max-w-6xl mx-auto">
        {/* Secciones con imágenes */}
        {[
          {
            id: "home",
            title: "Home y Favoritos",
            images: ["home.webp", "favoritos.webp"],
          },
          {
            id: "perfil",
            title: "Perfil de usuario",
            images: ["perfil1.webp", "perfil2.webp", "perfil3.webp"],
          },
          {
            id: "resenas",
            title: "Reseñas , lista de mascotas y mis anuncios",
            images: ["resenas.webp", "listamascotas.webp", "misanuncios.webp"],
          },
          {
            id: "chat",
            title: "Chat y Chat detallado",
            images: ["listaChats.webp", "chatDetallado.webp"],
          },
          {
            id: "anuncios",
            title: "Creación de anuncios",
            images: ["crearAnuncio1.webp", "crarAnuncio2.webp"],
          },
        ].map(({ id, title, images }) => (
          <section key={id} id={id}>
            <h2 className="text-2xl font-semibold section-title text-center mb-6">{title}</h2>
            <div className="image-row">
              {images.map((img, idx) => (
                <img
                  key={idx}
                  src={`/static/img/imgWauMatch/${img}`}
                  alt={`${title} ${idx + 1}`}
                  className="screenshot"
                />
              ))}
            </div>
          </section>
        ))}

        {/* Acciones */}
        <section id="acciones" className="text-center mt-16 space-y-6">
          <h3 className="text-2xl font-semibold section-title">Acciones</h3>
          <div className="flex justify-center gap-8 mt-4">
            <a href="https://github.com/alejandrosamalea/WauMatch" target="_blank" rel="noopener noreferrer" className="action-link">
              <i className="devicon-github-original text-3xl"></i>
              <span>Ver en GitHub</span>
            </a>
            <a href="/static/apks/WauMatchapk.apk" download className="action-link">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
              </svg>
              <span>Descargar APK</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="text-sm mt-20 text-center text-gray-500">
        <p>© 2025 Alejandro Ibañez Samalea</p>
      </footer>
    </div>
  );
};

export default WauMatch;
