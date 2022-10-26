import React from 'react'
import Style from './Menu.module.css'
import ValueContext from "../../js/ValueContext";
import { NavLink } from "react-router-dom";

export default function Menu() {
  const { setChecked, checked } = React.useContext(ValueContext);

  const G16 = () => setChecked(true);
  const G08 = () => setChecked(false);

  return (
    <div className={Style.container}>

      <h1 className={Style.h1}>Configurações de Auto Provisionamento - {checked ? "G16" : "G08"}</h1>

      <h2 className={Style.h2}>Escolha o Concentrador que será configurado:</h2>
      <nav className={Style.containerBtn}>

        <NavLink to="/G08" onClick={G08} className={({ isActive }) => (isActive ? Style.btnActive : Style.btnNotActive)}>
          OLT G08
        </NavLink>

        <NavLink to="/G16" onClick={G16} className={({ isActive }) => (isActive ? Style.btnActive : Style.btnNotActive)}>
          OLT G16
        </NavLink>

      </nav>
    </div >
  )
}
