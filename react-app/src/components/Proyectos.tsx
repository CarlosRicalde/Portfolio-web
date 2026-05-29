import { useState } from "react";
import "./Proyectos.css";
import paginaInicio from "../assets/PAGINA_INICIO.png";
import paginaLogin from "../assets/PAGINA_LOGIN.png";
import paginaResumen from "../assets/PAGINA_RESUMEN.png";
import paginaEquipos from "../assets/PAGINA_EQUIPOS.png";
import paginaJugadores from "../assets/PAGINA_JUGADORES.png";
import paginaDelegados from "../assets/PAGINA_DELEGADOS.png";
import paginaTorneos from "../assets/PAGINA_TORNEOS.png";
import paginaTemporadas from "../assets/PAGINA_TEMPORADAS.png";
import paginaUsuarioTorneos from "../assets/PAGINA_USUARIO_TORNEOS.png";
import paginaTraspasos from "../assets/PAGINA_TRASPASOS.png";
import paginaTorneos2 from "../assets/PAGINA_TORNEOS.png";
import paginaFechas from "../assets/PAGINA_FECHAS.png";
import paginaPlantel from "../assets/PAGINA_PLANTEL.png";
import paginaZonas from "../assets/PAGINA_ZONAS.png";
import htmlIcon from "../assets/icons8-html5-48.png";
import css3Icon from "../assets/icons8-css3-48.png";
import jsIcon from "../assets/icons8-javascript-48.png";
import bootstrapIcon from "../assets/icons8-oreja-48.png";
import reactIcon from "../assets/icons8-reaccionar-100.png";
import pythonIcon from "../assets/icons8-python-48.png";
import djangoIcon from "../assets/icons8-django-a-high-level-python-web-framework-that-encourages-rapid-development-24.png";
import mysqlIcon from "../assets/icons8-mysql-48.png";
import firebaseIcon from "../assets/icons8-firebase-48.png";
import gitIcon from "../assets/icons8-git-48.png";
import githubIcon from "../assets/icons8-github-100.png";
import agregarJugador from "../assets/appmovil_agregarJugador.jpeg";
import editarYEliminarJugador from "../assets/appmovil_editarYEliminarJugador.jpeg";
import listaJugadores from "../assets/appmovil_listaJugadores.jpeg";
import inicioSesion from "../assets/appmovil_inicioSesion.jpeg";
import nodeIcon from "../assets/icons8-nodo-js-48.png";
import logoPawify from "../assets/logo_pawify.png";
import pawify from "../assets/pawify.png";

const Proyectos = () => {
  const proyectos = [
    {
      titulo: "Liga de Estrellas",
      descripcion:
        "Aplicación web para la gestión integral de torneos de fútbol, con interfaces para Administrador y Usuario. Permite la creación de torneos, temporadas y partidos, así como el registro de equipos, jugadores y entrenadores. Se conecta a una base de datos MySQL para el almacenamiento y gestión de la información. Fue desarrollada junto a un equipo de trabajo utilizando la metodología Scrum. En este trabajo, desarrollé e implementé la mayor parte de la lógica back-end, el diseño y la gestión de la base de datos.",
      imagenes: [
        paginaInicio,
        paginaLogin,
        paginaResumen,
        paginaEquipos,
        paginaJugadores,
        paginaDelegados,
        paginaTorneos,
        paginaTemporadas,
        paginaUsuarioTorneos,
        paginaTraspasos,
        paginaTorneos2,
        paginaFechas,
        paginaPlantel,
        paginaZonas,
      ],
      github: "https://github.com/CarlosRicalde/Liga-de-Estrellas-App-web",
      botonLabel: "Github",
      botonImg: githubIcon,
      tecnologias: [
        mysqlIcon,
        pythonIcon,
        djangoIcon,
        htmlIcon,
        css3Icon,
        jsIcon,
        bootstrapIcon,
        reactIcon,
        gitIcon,
      ],
    },
    {
      titulo: "App Móvil - Liga de Estrellas",
      descripcion:
        "Esta aplicación es simple y es únicamente para la gestión de personas, en este caso jugadores de fútbol, permitiendo registrar perfiles, editarlos y eliminarlos. Aunque es un proyecto más pequeño en comparación con la aplicación web principal, esta aplicación móvil demuestra mi capacidad para desarrollar soluciones prácticas y funcionales en entornos móviles.",
      imagenes: [
        inicioSesion,
        listaJugadores,
        agregarJugador,
        editarYEliminarJugador,
      ],
      github: "https://github.com/M4rde21/Proyecto_movil",
      botonLabel: "Github",
      botonImg: githubIcon,
      tecnologias: [firebaseIcon, jsIcon, reactIcon, gitIcon, nodeIcon],
    },
    {
      titulo: "Pawify",
      descripcion:
        "Aplicacion web orientada a la adopcion de mascotas, cuenta con perfiles de usuarios y administradores, permitiendo registrar mascotas con sus respectivos datos e información, almacenados en una base de datos MySQL. Además, integra servicios de veterinaria, adiestramiento y gestión de animales perdidos. En este proyecto desarrollé parte de la logica back-end y aprendí mucho a trabajar en equipo.",
      imagenes: [pawify],
      github: "https://www.pawify.dev/",
      botonLabel: "Sitio web",
      botonImg: logoPawify,
      tecnologias: [mysqlIcon, pythonIcon, djangoIcon, reactIcon, gitIcon],
    },
  ];

  // 🔥 estado: un índice por proyecto
  const [indices, setIndices] = useState(proyectos.map(() => 0));

  const siguiente = (i: number) => {
    const nuevos = [...indices];
    nuevos[i] = (nuevos[i] + 1) % proyectos[i].imagenes.length;
    setIndices(nuevos);
  };

  const anterior = (i: number) => {
    const nuevos = [...indices];
    nuevos[i] =
      nuevos[i] === 0 ? proyectos[i].imagenes.length - 1 : nuevos[i] - 1;
    setIndices(nuevos);
  };

  return (
    <>
      <h2 className="sub">PROYECTOS</h2>

      <div className="proyectos">
        {proyectos.map((proyecto, i) => (
          <div className="proyecto-web" key={i}>
            {/* IZQUIERDA */}
            <div className="carrusel">
              <div className="imagen-carrusel">
                <button
                  className="flecha-izquierda"
                  onClick={() => anterior(i)}
                >
                  &#10094;
                </button>

                <img src={proyecto.imagenes[indices[i]]} alt="proyecto" />

                <button className="flecha-derecha" onClick={() => siguiente(i)}>
                  &#10095;
                </button>
              </div>

              <div className="boton-git">
                <a href={proyecto.github} target="_blank">
                  <button>
                    <img
                      src={proyecto.botonImg}
                      className={
                        proyecto.botonLabel === "Sitio web" ? "img-sitio" : ""
                      }
                    />
                    {proyecto.botonLabel}
                  </button>
                </a>
              </div>
            </div>

            {/* DERECHA */}
            <div className="title-p">
              <h2>{proyecto.titulo}</h2>

              <p className="descripcion-p">{proyecto.descripcion}</p>

              <div className="tec-usadas">
                {proyecto.tecnologias.map((tec, index) => (
                  <img key={index} src={tec} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Proyectos;
