export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-10">
      <ul className="flex gap-4 justify-center font-semibold">
        <li><a href="#about">Sobre mí</a></li>
        <li><a href="#projects">Proyectos</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  );
}
