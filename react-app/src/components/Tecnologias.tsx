import "./Tecnologias.css";

const tecnologias = [
  { nombre: "HTML5", img: "/images/icons8-html5-48.png" },
  { nombre: "CSS3", img: "/images/icons8-css3-48.png" },
  { nombre: "JavaScript", img: "/images/icons8-javascript-48.png" },
  { nombre: "Bootstrap5", img: "/images/icons8-oreja-48.png" },
  { nombre: "React/RNative", img: "/images/icons8-reaccionar-100.png" },
  { nombre: "Python", img: "/images/icons8-python-48.png" },
  {
    nombre: "Django",
    img: "/images/icons8-django-a-high-level-python-web-framework-that-encourages-rapid-development-24.png",
  },
  { nombre: "MySQL", img: "/images/icons8-mysql-48.png" },
  { nombre: "TypeScript", img: "/images/icons8-mecanografiado-48.png" },
  { nombre: "Firebase", img: "/images/icons8-firebase-48.png" },
];

const herramientas = [
  { nombre: "Git", img: "/images/icons8-git-48.png" },
  { nombre: "Github", img: "/images/icons8-github-100.png" },
];

const Tecnologias = () => {
  return (
    <>
      <hr className="space-line" id="tecnologias" />

      <h2 className="sub">TECNOLOGÍAS</h2>

      <div className="tecnologias-grid">
        <div className="grid-container">
          {tecnologias.map((tec, index) => (
            <div className="grid-item" key={index}>
              <img src={tec.img} alt={tec.nombre} />
              <p>{tec.nombre}</p>
            </div>
          ))}
        </div>
      </div>

      <br />
      <br />

      <h2 className="sub">HERRAMIENTAS</h2>

      <div className="herramientas-flex">
        <div className="herramientas-contain">
          {herramientas.map((tool, index) => (
            <div className="h-item" key={index}>
              <img src={tool.img} alt={tool.nombre} />
              <p>{tool.nombre}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tecnologias;
