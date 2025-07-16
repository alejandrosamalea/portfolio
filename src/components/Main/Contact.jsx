export default function Contact() {
  return (
    <section id="contact" className="my-12 text-center">
      <h2 className="text-2xl font-bold mb-6 text-pink-400">Contacto</h2>

      <div className="flex justify-center gap-8 text-white text-lg">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/alejandro-ibanez-samalea-2b7a66228"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center hover:text-pink-400 transition"
        >
          <i className="devicon-linkedin-plain text-4xl"></i>
          <span className="mt-1 text-sm">Visitar LinkedIn</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/alejandrosamalea"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center hover:text-pink-400 transition"
        >
          <i className="devicon-github-original text-4xl"></i>
          <span className="mt-1 text-sm">Visitar GitHub</span>
        </a>

 {/* Descargar CV */}
        <a
          href="/cvAlejandroIbanez.pdf"
          download
          className="flex flex-col items-center hover:text-pink-400 transition"
        >
          {/* Icono tipo archivo */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z"
            />
          </svg>
          <span className="mt-1 text-sm">Descargar CV</span>
        </a>
      </div>
    </section>
  );
}
