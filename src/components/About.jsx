export default function About() {
  return (
    <section id="about" className="my-12 bg-black text-white py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-pink-400">
        Sobre mí
      </h2>

      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Imagen circular */}
        <div className="w-36 h-36 rounded-full overflow-hidden flex-shrink-0 mr-8 mb-6 md:mb-0">
          <img
            src="../static/img/FotoPerfil.png"
            alt="Alejandro Ibañez Samalea"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Texto */}
        <div className="max-w-xl text-left">
          <h1 className="text-3xl font-semibold mb-2 text-white">
            Alejandro Ibañez Samalea
          </h1>
          <h3 className="font-extrabold text-2xl md:text-3xl mb-6">
            Desarrollador web y multiplataforma
          </h3>

          <p className="text-lg mb-4">
            Soy un desarrollador especializado en <strong>.NET y Blazor</strong>, con experiencia en la creación de aplicaciones frontend y backend, utilizando C#, .NET 8 y Entity Framework Core para construir soluciones eficientes y escalables.
          </p>
          <p className="text-lg mb-4">
            Además, cuento con conocimientos sólidos en múltiples tecnologías modernas como Java, JavaScript, Kotlin, Spring Boot, MySQL, MongoDB y más, que me permiten adaptarme a diferentes proyectos y retos tecnológicos.
          </p>
          <p className="text-lg">
            Estoy comprometido con la mejora continua, el trabajo en equipo y la creación de experiencias digitales intuitivas y de alta calidad.
          </p>
        </div>
      </div>
    </section>
  );
}
