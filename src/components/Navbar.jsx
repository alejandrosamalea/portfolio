export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4 sticky top-0 z-10 max-[680px]:hidden">
      <ul className="flex gap-6 justify-center navbar-links text-xl">
        <li>
          <a href="#about">Sobre mí</a>
        </li>
        <li>
          <a href="#projects">Proyectos</a>
        </li>
        <li>
          <a href="#experience">Experiencia</a>
        </li>
        <li>
          <a href="#technologies">Tecnologías</a>
        </li>
        <li>
          <a href="#contact">Contacto</a>
        </li>
      </ul>
    </nav>
  );
}