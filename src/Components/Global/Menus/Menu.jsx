import React from 'react'
import Style from './Menu.module.css'
import ValueContext from "../../../js/ValueContext";
import { NavLink } from "react-router-dom";

export default function Menu() {
  const { g16, setG16, setG08, i8820, setI8820, handleChangeSelected } = React.useContext(ValueContext);

  const G16 = () => setG16(true) || setG08(false) || setI8820(false);
  const G08 = () => setG08(true) || setG16(false) || setI8820(false);
  const I8820 = () => setI8820(true) || setG16(false) || setG08(false);

  console.log("handleChangeSelected:", handleChangeSelected)

  return (
    <div className={Style.container}>

      {i8820 ? <h1 className={Style.h1}>Configuração de Auto Provisionamento - 8820i</h1> :
        <h1 className={Style.h1}>Configuração de Auto Provisionamento - {g16 ? "G16" : "G08"}</h1>}

      <h2 className={Style.h2}>Escolha o Concentrador que será configurado:</h2>
      <nav className={Style.containerBtn}>
        <NavLink to="/8820i" onClick={I8820} className={({ isActive }) => isActive ? Style.btnActive : Style.btnNotActive}>
          8820i
        </NavLink>

        <NavLink to="/G08" onClick={G08} className={({ isActive }) => (isActive ? Style.btnActive : Style.btnNotActive)}>
          OLT G08
        </NavLink>

        <NavLink to="/G16" onClick={G16} className={({ isActive }) => (isActive ? Style.btnActive : Style.btnNotActive)}>
          OLT G16
        </NavLink>
      </nav>

      {i8820 &&
        <div className={Style.modoContainer} id="modoContainer">
          <h3 className={Style.h3}>Escolha o tipo de configuração da 8820i:</h3>
          <select className={Style.select} onChange={handleChangeSelected} >
            <option>Uma VLAN por PON</option>
            <option>Apenas uma VLAN</option>
          </select>
        </div>
      }
    </div >
  )
}
