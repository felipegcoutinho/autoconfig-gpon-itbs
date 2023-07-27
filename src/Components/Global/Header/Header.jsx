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
              GPON ITBS <span className={Style.version}>v1.1</span>
            </a>
          </li>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <NavLink to="/provisionamentomanual">Provisionamento Manual G08/G16</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
