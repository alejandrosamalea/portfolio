import React from "react";

const projects = [
  {
    title: "WauMatch",
    description: "Proyecto que une personas para el cuidado de animales",
    link: "https://tulink.vercel.app",
  },
  {
    title: "Proyecto TFGPoke",
    description: "Pequeño juego Pokemon hecho en SpringBoot utilizando Java, JavaScript, Css y MySQL",
    link: "https://github.com/tuusuario/proyecto-python",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="my-12 bg-black text-white py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Proyectos</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative p-6 bg-neutral-900 rounded-xl text-white overflow-hidden group"
          >
            {/* Borde estático */}
            <div className="absolute inset-0 rounded-xl border border-gray-700" />
            <div className="border-animator" />

            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-3">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                className="text-pink-400 underline hover:text-pink-300 transition"
              >
                Ver más
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}