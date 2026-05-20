import { useState } from "react";
import "./Contacto.css";

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
          <img src="/images/email_icono.png" alt="" className="email-icono" />

          <img src="/images/email.png" alt={email} className="email" />

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
