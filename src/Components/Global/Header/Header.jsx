import React from "react";
import {NavLink} from "react-router-dom";
import Style from "./Header.module.css";

export default function header() {
  return (
    <div id="start" className={Style.container}>
      <nav className={Style.menu}>
        <ul>
          <li>
            <a className={Style.title}>
              GPON ITBS <span className={Style.version}>v1.1</span>{" "}
            </a>
          </li>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#">
              8820i <i className="fa-solid fa-caret-down"></i>
            </a>
            <ul>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://backend.intelbras.com/sites/default/files/2021-02/Datasheet%20OLT%208820%20I%2001.2021%20V2.pdf">
                  <i className="fa-solid fa-sm fa-arrow-up-right-from-square"></i> Datasheet
                </a>
              </li>

              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://backend.intelbras.com/sites/default/files/2021-07/Manual_OLT_8820_I_02-21.pdf">
                  <i className="fa-solid fa-sm fa-arrow-up-right-from-square"></i> Manual
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://backend.intelbras.com/sites/default/files/2021-01/Guia_OLT_8820_I_portugues_01-20_site.pdf">
                  <i className="fa-solid fa-sm fa-arrow-up-right-from-square"></i> Guia
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">
              {" "}
              G08 <i className="fa-solid fa-caret-down"></i>
            </a>
            <ul>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://backend.intelbras.com/sites/default/files/2022-09/Datasheet%20OLT%20G8%20Edit%C3%A1vel%20V2.pdf">
                  <i className="fa-solid fa-sm fa-arrow-up-right-from-square"></i> Datasheet
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://olts-guias-e-manuais.intelbras.com.br/G08/index.html">
                  <i className="fa-solid fa-sm fa-arrow-up-right-from-square"></i> Manual e Guia
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">
              {" "}
              G16 <i className="fa-solid fa-caret-down"></i>
            </a>
            <ul>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://backend.intelbras.com/sites/default/files/2022-09/Datasheet%20OLTG16%20V3.pdf">
                  <i className="fa-solid fa-sm fa-arrow-up-right-from-square"></i> Datasheet
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://olts-guias-e-manuais.intelbras.com.br/G16/index.html">
                  <i className="fa-solid fa-sm fa-arrow-up-right-from-square"></i> Manual e Guia
                </a>
              </li>
            </ul>
          </li>

          <li>
            <NavLink to="/ProvisionamentoManual">Provisionamento Manual</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
