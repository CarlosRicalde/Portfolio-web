import { useState } from "react";
import "./Proyectos.css";

const Proyectos = () => {
  const proyectos = [
    {
      titulo: "Liga de Estrellas",
      descripcion:
        "Aplicación web para la gestión integral de torneos de fútbol, con interfaces para Administrador y Usuario. Permite la creación de torneos, temporadas y partidos, así como el registro de equipos, jugadores y entrenadores. Se conecta a una base de datos MySQL para el almacenamiento y gestión de la información. Fue desarrollada junto a un equipo de trabajo utilizando la metodología Scrum. En este trabajo, desarrollé e implementé la mayor parte de la lógica back-end, el diseño y la gestión de la base de datos.",
      imagenes: [
        "/images/PAGINA_INICIO.png",
        "/images/PAGINA_LOGIN.png",
        "/images/PAGINA_RESUMEN.png",
        "/images/PAGINA_EQUIPOS.png",
        "/images/PAGINA_JUGADORES.png",
        "/images/PAGINA_DELEGADOS.png",
        "/images/PAGINA_TORNEOS.png",
        "/images/PAGINA_TEMPORADAS.png",
        "/images/PAGINA_USUARIO_TORNEOS.png",
        "/images/PAGINA_TRASPASOS.png",
        "/images/PAGINA_TORNEOS.png",
        "/images/PAGINA_FECHAS.png",
        "/images/PAGINA_PLANTEL.png",
        "/images/PAGINA_ZONAS.png",
      ],
      github: "https://github.com/CarlosRicalde/Liga-de-Estrellas-App-web",
      botonLabel: "Github",
      botonImg: "images/icons8-github-100.png",
      tecnologias: [
        "/images/icons8-mysql-48.png",
        "/images/icons8-python-48.png",
        "/images/django.png",
        "/images/icons8-html5-48.png",
        "/images/icons8-css3-48.png",
      ],
    },
    {
      titulo: "App Móvil - Liga de Estrellas",
      descripcion:
        "Esta aplicación es simple y es únicamente para la gestión de personas, en este caso jugadores de fútbol, permitiendo registrar perfiles, editarlos y eliminarlos. Aunque es un proyecto más pequeño en comparación con la aplicación web principal, esta aplicación móvil demuestra mi capacidad para desarrollar soluciones prácticas y funcionales en entornos móviles.",
      imagenes: [
        "/images/appmovil_inicioSesion.jpeg",
        "/images/appmovil_listaJugadores.jpeg",
        "/images/appmovil_agregarJugador.jpeg",
        "/images/appmovil_editarYEliminarJugador.jpeg",
      ],
      github: "https://github.com/M4rde21/Proyecto_movil",
      botonLabel: "Github",
      botonImg: "images/icons8-github-100.png",
      tecnologias: [
        "/images/icons8-firebase-48.png",
        "/images/icons8-javascript-48.png",
        "/images/icons8-reaccionar-100.png",
        "/images/icons8-git-48.png",
        "/images/icons8-nodo-js-48.png",
      ],
    },
    {
      titulo: "Pawify",
      descripcion:
        "Aplicacion web orientada a la adopcion de mascotas, cuenta con perfiles de usuarios y administradores, permitiendo registrar mascotas con sus respectivos datos e información, almacenados en una base de datos MySQL. Además, integra servicios de veterinaria, adiestramiento y gestión de animales perdidos. En este proyecto desarrollé parte de la logica back-end y aprendí mucho a trabajar en equipo.",
      imagenes: ["images/pawify.png"],
      github: "https://www.pawify.dev/",
      botonLabel: "Sitio web",
      botonImg: "images/logo_pawify.png",
      tecnologias: [
        "/images/icons8-mysql-48.png",
        "/images/icons8-python-48.png",
        "/images/django.png",
        "/images/icons8-reaccionar-100.png",
      ],
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
