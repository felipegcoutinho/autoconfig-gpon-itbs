import React from 'react'
import Style from './Select.module.css'
import ValueContext from "../../js/ValueContext";
import { Link } from "react-router-dom";

export default function Select() {
  const { setChecked, handleChangeSelected } = React.useContext(ValueContext);

  function Hide() {
    const element = document.getElementById("modoContainer");
    element.style.display = "none";
  }

  const G16 = () => setChecked(true);
  const G08 = () => setChecked(false);

  return (
    <div className={Style.content}>
      <h2 className={Style.h2}>Escolha o Concentrador que será configurado:</h2>
      <nav className={Style.containerBtn}>
        <Link to="/8820i"><button className={Style.btn}>OLT 8820i</button></Link>
        <Link to="/G08" onClick={G08}><button onClick={Hide} className={Style.btn}>OLT G08</button></Link>
        <Link to="/G16" onClick={G16}><button onClick={Hide} className={Style.btn}>OLT G16</button></Link>
      </nav>

      <div className={Style.modoContainer} id="modoContainer">
        <h3 className={Style.h3}>Escolha o tipo de configuração da 8820i:</h3>
        <select className={Style.select} onChange={handleChangeSelected} >
          <option>Uma VLAN por PON</option>
          <option>Apenas uma VLAN por PON</option>
        </select>
      </div>
    </div>
  )
}