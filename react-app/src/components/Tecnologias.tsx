import "./Tecnologias.css";
import htmlIcon from "../assets/icons8-html5-48.png";
import css3Icon from "../assets/icons8-css3-48.png";
import jsIcon from "../assets/icons8-javascript-48.png";
import bootstrapIcon from "../assets/icons8-oreja-48.png";
import reactIcon from "../assets/icons8-reaccionar-100.png";
import pythonIcon from "../assets/icons8-python-48.png";
import djangoIcon from "../assets/icons8-django-a-high-level-python-web-framework-that-encourages-rapid-development-24.png";
import mysqlIcon from "../assets/icons8-mysql-48.png";
import typescriptIcon from "../assets/icons8-mecanografiado-48.png";
import firebaseIcon from "../assets/icons8-firebase-48.png";
import gitIcon from "../assets/icons8-git-48.png";
import githubIcon from "../assets/icons8-github-100.png";

const tecnologias = [
  { nombre: "HTML5", img: htmlIcon },
  { nombre: "CSS3", img: css3Icon },
  { nombre: "JavaScript", img: jsIcon },
  { nombre: "Bootstrap5", img: bootstrapIcon },
  { nombre: "React/RNative", img: reactIcon },
  { nombre: "Python", img: pythonIcon },
  {
    nombre: "Django",
    img: djangoIcon,
  },
  { nombre: "MySQL", img: mysqlIcon },
  { nombre: "TypeScript", img: typescriptIcon },
  { nombre: "Firebase", img: firebaseIcon },
];

const herramientas = [
  { nombre: "Git", img: gitIcon },
  { nombre: "Github", img: githubIcon },
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
