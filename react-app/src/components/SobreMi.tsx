import "./SobreMi.css";
import { useEffect, useState } from "react";
import paraPortfolio3Photoroom from "../assets/paraPortfolio3-Photoroom.jpg";
import linkedinIcon from "../assets/icons8-linkedin-48.png";
import githubIcon from "../assets/icons8-github-100.png";

const SobreMi = () => {
  const texto = "Desarrollador Back-end ";

  const [textoActual, setTextoActual] = useState("");
  const [subIndex, setSubIndex] = useState(0);
  const [borrando, setBorrando] = useState(false);

  useEffect(() => {
    if (!borrando && subIndex === texto.length) {
      setTimeout(() => setBorrando(true), 1000);
      return;
    }

    if (borrando && subIndex === 0) {
      setBorrando(false);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (borrando ? -1 : 1));
        setTextoActual(texto.substring(0, subIndex));
      },
      borrando ? 50 : 100,
    );

    return () => clearTimeout(timeout);
  }, [subIndex, borrando]);

  return (
    <div className="sobremi-container" id="sobre-mi">
      <div className="sobremi">
        <h1 className="name">Carlos Ricalde</h1>

        {/* después hacemos animación */}
        <h2 className="work">
          {textoActual}
          <span className="cursor"></span>
        </h2>

        <p className="present">
          Hola 👋 Soy Técnico en Análisis de Sistemas, orientado principalmente
          al desarrollo Back-end y apasionado por transformar ideas en
          soluciones tecnológicas. Trabajé bajo metodología Scrum, destacándome
          por el trabajo en equipo y la comunicación fluida. Me entusiasma
          seguir aprendiendo, creciendo profesionalmente y aportar mis
          conocimientos e ideas en nuevos desafíos.
        </p>

        <div className="cuentas">
          <a href="/CV_CarlosRicalde2.pdf" className="cv" download>
            Descargar CV
          </a>

          <a
            href="https://www.linkedin.com/in/carlos-daniel-ricalde-378442338/"
            target="_blank"
          >
            <img className="linkedin" src={linkedinIcon} />
          </a>

          <a href="https://github.com/CarlosRicalde" target="_blank">
            <img className="github" src={githubIcon} />
          </a>
        </div>
      </div>

      <div className="foto-yo">
        <img src={paraPortfolio3Photoroom} alt="" />
      </div>
    </div>
  );
};

export default SobreMi;
