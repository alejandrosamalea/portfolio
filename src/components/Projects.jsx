const projects = [
  {
    title: "Mi Portfolio",
    description: "Portfolio hecho en React y Tailwind CSS.",
    link: "https://tulink.vercel.app",
  },
  {
    title: "Proyecto Python",
    description: "App de análisis de datos con Streamlit.",
    link: "https://github.com/tuusuario/proyecto-python",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="my-12">
      <h2 className="text-2xl font-bold text-center mb-4">Proyectos</h2>
      <div className="grid gap-4 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="p-4 bg-white rounded-xl shadow">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="text-blue-600 underline" target="_blank">Ver más</a>
          </div>
        ))}
      </div>
    </section>
  );
}
