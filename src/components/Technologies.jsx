import React from "react";

const Technologies = () => {
  const sections = [
    {
      title: "🖥️ Frontend",
      items: ["html5", "css3", "javascript", "angular", "bootstrap", "react"],
    },
    {
      title: "🛠️ Backend",
      items: ["java", "csharp", "kotlin", "php", "spring", "dotnet8", "blazor"],
    },
    {
      title: "🛢️ Bases de datos",
      items: ["mysql", "microsoftsqlserver", "mongodb", "firebase"],
    },
    {
      title: "🧰 Herramientas",
      items: ["git", "github", "docker", "intellij", "vscode", "visualstudio", "androidstudio"],
    },
  ];

  const getIconClass = (name) => {
    const mapping = {
      html5: "devicon-html5-plain",
      css3: "devicon-css3-plain",
      javascript: "devicon-javascript-plain",
      angular: "devicon-angularjs-plain",
      bootstrap: "devicon-bootstrap-plain",
      react: "devicon-react-original",
      java: "devicon-java-plain",
      csharp: "devicon-csharp-line",
      kotlin: "devicon-kotlin-plain",
      php: "devicon-php-plain",
      spring: "devicon-spring-plain",
      dotnet8: "devicon-dotnetcore-plain",
      blazor: "devicon-dotnetcore-plain",
      xampp: "devicon-xampp-plain",
      mysql: "devicon-mysql-plain",
      microsoftsqlserver: "devicon-microsoftsqlserver-plain",
      mongodb: "devicon-mongodb-plain",
      git: "devicon-git-plain",
      github: "devicon-github-original",
      docker: "devicon-docker-plain",
      firebase: "devicon-firebase-plain",
      intellij: "devicon-intellij-plain",
      vscode: "devicon-vscode-plain",
      visualstudio: "devicon-visualstudio-plain",
      androidstudio: "devicon-androidstudio-plain",
    };
    return mapping[name] || "devicon-devicon-plain";
  };

  const getIconStyle = (name) => {
    if (name === "github") return { color: "white" };
    return {};
  };

  const getDisplayName = (name) => {
    const mapping = {
      csharp: "C#",
      dotnet8: ".NET 8",
      javascript: "JavaScript",
      html5: "HTML5",
      css3: "CSS3",
      mysql: "MySQL",
      microsoftsqlserver: "SQL Server",
      vscode: "VS Code",
      visualstudio: "Visual Studio",
      androidstudio: "Android Studio",
      intellij: "IntelliJ",
      firebase: "Firebase",
      spring: "Spring Boot",
      blazor: "Blazor",
      kotlin: "Kotlin",
      php: "PHP",
      react: "React",
      java: "Java",
      git: "Git",
      github: "GitHub",
      docker: "Docker",
      mongodb: "MongoDB",
      angular: "Angular",
      bootstrap: "Bootstrap",
    };
    return mapping[name] || name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <section id="technologies" className="my-12 bg-black text-white py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-pink-400">Tecnologías</h2>
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {sections.map((section) => (
            <div
              key={section.title}
              className="relative bg-neutral-900 p-6 rounded-xl group overflow-hidden"
            >
              <div className="absolute inset-0 rounded-xl border border-gray-700" />
              <div className="border-animator" />
              <div className="relative z-0">
                <h3 className="text-2xl font-semibold mb-4">
                  {section.title}
                </h3>
                <div className="flex flex-wrap gap-4 justify-center">
                  {section.items.map((tech) => (
                    <div
                      key={tech}
                      className="flex flex-col items-center"
                    >
                      <div className="w-[80px] h-[80px] flex items-center justify-center transition-transform duration-300 hover:scale-110">
                        <i
                          className={`${getIconClass(tech)} text-4xl colored`}
                          style={getIconStyle(tech)}
                        ></i>
                      </div>
                      <span className="text-sm mt-2 text-center">{getDisplayName(tech)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;