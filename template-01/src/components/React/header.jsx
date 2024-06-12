import { useState } from "react";
import "./header.css";
export default function header({
  home,
  about,
  contact,
  notices,
  testimonios,
  equipo,
}) {
  const [on, setOn] = useState(false);
  const handleNav = () => {
    setOn(!on);
  };

  return (
    <header className="header-principal">
      <a href="/" className="header-principal_logo">
        <img src="../../../../images/temp/logo-temp-01.svg" alt="logo-temp" />
        <div className="">
          <strong>Estudio Jurídico</strong>
          <p>Nombre estudio</p>
        </div>
      </a>
      <span className="menu-hamburguesa" onClick={handleNav}>
        <span
          className={
            on ? "menu-hamburguesa_span child-1 " : "menu-hamburguesa_span"
          }
        ></span>
        <span
          className={
            on ? "menu-hamburguesa_span child-2 " : "menu-hamburguesa_span"
          }
        ></span>
        <span
          className={
            on ? "menu-hamburguesa_span child-3 " : "menu-hamburguesa_span"
          }
        ></span>
      </span>
      <nav
        className={
          on
            ? "header-principal_nav header-principal_nav-on"
            : "header-principal_nav"
        }
      >
        <ul>
          <li>
            <a href={home}>Home</a>
          </li>
          <li>
            <a href={about}>Sobre Nosotros</a>
          </li>
          <li>
            <a href={notices}>Noticias</a>
          </li>
          <li>
            <a href={equipo}>Nuestro Equipo</a>
          </li>
          <li>
            <a href={testimonios}>Testimonios</a>
          </li>
          <li>
            <a href={contact}>Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
