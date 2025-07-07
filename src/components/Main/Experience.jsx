import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="my-12 bg-black text-white py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-pink-400">Experiencia</h2>

      <div className="max-w-5xl mx-auto px-4">
        <div className="space-y-8">
          {/* Experiencia GEOLIZA */}
          <div className="relative bg-neutral-900 p-6 rounded-xl group overflow-hidden">
            {/* Borde estático */}
            <div className="absolute inset-0 rounded-xl border border-gray-700" />
            <div className="border-animator" />

            <h3 className="text-2xl font-semibold mb-2">GEOLIZA</h3>
            <p className="text-lg font-medium mb-2">Marzo 2025 - Julio 2025</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Desarrollo de aplicaciones utilizando **.NET 8** y **Blazor** para la creación de interfaces dinámicas.</li>
              <li>Realización de la **migración de una aplicación de .NET MVC a Blazor**, mejorando la escalabilidad y rendimiento.</li>
              <li>Optimización de la **experiencia de usuario** durante la transición a **Blazor Server**.</li>
              <li>Implementación de nuevas funcionalidades y consumo de **APIs REST** para integraciones con otros servicios.</li>
              <li>Colaboración con otros equipos en proyectos internos, ayudando a integrar nuevas tecnologías y mejorar el rendimiento de las aplicaciones.</li>
            </ul>
          </div>

          {/* Experiencia ASGIF */}
          <div className="relative bg-neutral-900 p-6 rounded-xl group overflow-hidden">
            {/* Borde estático */}
            <div className="absolute inset-0 rounded-xl border border-gray-700" />
            <div className="border-animator" />
            
            <h3 className="text-2xl font-semibold mb-2">ASGIF</h3>
            <p className="text-lg font-medium mb-2">Marzo 2024 - Junio 2024</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Realicé mantenimiento y soporte de páginas web usando **WordPress** y la plantilla **Divi**.</li>
              <li>Creación de nuevas páginas web, integradas con el sitio principal, utilizando **HTML**, **CSS**, y **WordPress**.</li>
              <li>Gestión de actualizaciones, plugins y contenido, mejorando la estabilidad y el rendimiento del sitio.</li>
              <li>Diseño de páginas y gestión de la experiencia del usuario para una **academia de oposiciones**.</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
