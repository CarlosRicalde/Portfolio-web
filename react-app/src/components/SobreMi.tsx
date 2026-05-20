import "./SobreMi.css";
import { useEffect, useState } from "react";

const SobreMi = () => {
  const texto = "Desarrollador Full Stack ";

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
          Hola!👋Apasionado por transformar ideas en soluciones tecnológicas.
          Combino una sólida base como analista de sistemas con habilidades de
          desarrollo full-stack para crear aplicaciones web robustas y
          eficientes. Tengo experiencia trabajando con la metodología Scrum,
          disfruto del trabajo en equipo con una comunicación fluida. Me
          entusiasma aplicar mis conocimientos e ideas en su equipo de trabajo,
          a la vez que sigo aprendiendo y creciendo.
        </p>

        <div className="cuentas">
          <a href="/CV_CarlosRicalde2.pdf" className="cv" download>
            Descargar CV
          </a>

          <a
            href="https://www.linkedin.com/in/carlos-daniel-ricalde-378442338/"
            target="_blank"
          >
            <img className="linkedin" src="/images/icons8-linkedin-48.png" />
          </a>

          <a href="https://github.com/CarlosRicalde" target="_blank">
            <img className="github" src="/images/icons8-github-100.png" />
          </a>
        </div>
      </div>

      <div className="foto-yo">
        <img src="/images/paraPortfolio3-Photoroom.jpg" alt="" />
      </div>
    </div>
  );
};

export default SobreMi;
