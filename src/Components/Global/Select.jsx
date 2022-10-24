import React from 'react'
import Style from './Select.module.css'
import ValueContext from "../../js/ValueContext";
import { NavLink } from "react-router-dom";

export default function Select() {
  const { setChecked } = React.useContext(ValueContext);

  const G16 = () => setChecked(true);
  const G08 = () => setChecked(false);

  return (
    <div className={Style.content}>
      <h2 className={Style.h2}>Escolha o Concentrador que será configurado:</h2>
      <nav className={Style.containerBtn}>
        <NavLink to="/G08" onClick={G08} className={Style.btn}
          style={({ isActive }) => ({
            color: isActive ? '#fff' : '#2a2f37',
            background: isActive ? '#2a2f37' : '#f0f0f0',
            border: isActive ? '2px solid #f0f0f0' : '2px solid #f0f0f0',
          })}>OLT G08</NavLink>

        <NavLink to="/G16" onClick={G16} className={Style.btn}
          style={({ isActive }) => ({
            color: isActive ? '#fff' : '#2a2f37',
            background: isActive ? '#2a2f37' : '#f0f0f0',
            border: isActive ? '2px solid #f0f0f0' : '2px solid #f0f0f0',
          })}>OLT G16</NavLink>
      </nav>
    </div >
  )
}