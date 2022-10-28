import React from 'react'
import Style from './Menu.module.css'
import ValueContext from "../../js/ValueContext";
import { NavLink } from "react-router-dom";

export default function Menu() {
  const { setChecked, checked, handleChangeSelected, GPON_I, setGPON_I } = React.useContext(ValueContext);

  const G16 = () => setChecked(true);
  const G08 = () => setChecked(false);


  return (
    <div className={Style.container}>

      {GPON_I ? <h1 className={Style.h1}>Configurações de Auto Provisionamento - 8820i</h1> :
        <h1 className={Style.h1}>Configurações de Auto Provisionamento - {checked ? "G16" : "G08"}</h1>}


      <h2 className={Style.h2}>Escolha o Concentrador que será configurado:</h2>
      <nav className={Style.containerBtn}>
        <NavLink to="/8820i" className={({ isActive }) => isActive ? Style.btnActive : Style.btnNotActive}>
          8820i
        </NavLink>

        <NavLink to="/G08" onClick={G08} className={({ isActive }) => (isActive ? Style.btnActive : Style.btnNotActive)}>
          OLT G08
        </NavLink>

        <NavLink to="/G16" onClick={G16} className={({ isActive }) => (isActive ? Style.btnActive : Style.btnNotActive)}>
          OLT G16
        </NavLink>
      </nav>

      {GPON_I &&
        <div className={Style.modoContainer} id="modoContainer">
          <h3 className={Style.h3}>Escolha o tipo de configuração da 8820i:</h3>
          <select className={Style.select} onChange={handleChangeSelected} >
            <option>Uma VLAN por PON</option>
            <option>Apenas uma VLAN por PON</option>
          </select>
        </div>
      }
    </div >
  )
}
