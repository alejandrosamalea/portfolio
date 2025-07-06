import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "alejandro.ibanez.samalea@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="my-12 text-center">
      <h2 className="text-2xl font-bold mb-6 text-pink-400">Contacto</h2>

      <div className="flex justify-center gap-8 text-white text-lg">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/alejandro-ibañez-samalea-2b7a66228"
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

        {/* Gmail */}
        <button
          onClick={copyEmail}
          className="flex flex-col items-center hover:text-pink-400 transition relative"
        >
          <i className="devicon-google-plain text-4xl"></i>
          <span className="mt-1 text-sm">Copiar correo</span>

          {copied && (
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs bg-gray-800 text-white px-2 py-1 rounded shadow">
              ¡Copiado!
            </span>
          )}
        </button>
      </div>
    </section>
  );
}
