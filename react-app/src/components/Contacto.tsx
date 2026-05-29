import { useState } from "react";
import "./Contacto.css";
import emailIcono from "../assets/email_icono.png";
import emailImage from "../assets/email.png";

const Contacto = () => {
  const email = "c.ricalde19@gmail.com";
  const [copiado, setCopiado] = useState(false);

  const copiarEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiado(true);

    setTimeout(() => {
      setCopiado(false);
    }, 2000);
  };

  return (
    <>
      <h2 className="sub" id="contacto">
        CONTACTO
      </h2>

      <footer className="pie">
        <div className="contact">
          <img src={emailIcono} alt="" className="email-icono" />

          <img src={emailImage} alt={email} className="email" />

          <div className="boton-titulo">
            <button className="copy-email" onClick={copiarEmail}>
              Copiar
            </button>

            {copiado && <span className="tilde-copiado">✔</span>}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contacto;
