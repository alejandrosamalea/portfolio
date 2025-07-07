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
            src="../static/img/FotoPerfil.webp"
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
            Desarrollador Web y Multiplataforma
          </h3>

        <p className="text-lg mb-4">
  Soy un desarrollador apasionado por la tecnología y especializado en el desarrollo backend con <strong>Java y Spring Boot</strong>. Trabajo en la construcción de aplicaciones sólidas y mantenibles utilizando herramientas como JPA/Hibernate y bases de datos como MySQL o MongoDB.
</p>
          <p className="text-lg mb-4">
            También tengo experiencia en el ecosistema <strong>.NET</strong>, incluyendo <strong>Blazor</strong>, C# y Entity Framework Core, lo que me permite desenvolverme en entornos multiplataforma y adaptarme fácilmente a distintos stacks tecnológicos.
          </p>
          <p className="text-lg mb-4">
            A lo largo de mi carrera he trabajado tanto en el frontend como en el backend, usando tecnologías como JavaScript, Kotlin, y frameworks modernos para construir soluciones completas y escalables.
          </p>
          <p className="text-lg">
            Me defino como una persona proactiva, orientada a la calidad del código y al trabajo en equipo, siempre en búsqueda de seguir aprendiendo y aportar valor en cada proyecto.
          </p>
        </div>
      </div>
    </section>
  );
}