import React from 'react'
import Style from './Select.module.css'
import ValueContext from "../../js/ValueContext";
import { Link } from "react-router-dom";

export default function Select() {

  const { setChecked } = React.useContext(ValueContext);

  return (
    <div className={Style.content}>
      <h2 className={Style.h2}>Escolha o Concentrador que será configurado:</h2>
      <div className={Style.buttons}>
        <Link to="/G16"><button onClick={() => setChecked(true)}>OLT G16</button></Link>
        <Link to="/G08"><button onClick={() => setChecked(false)}>OLT G08</button></Link>
        <Link to="/8820i"><button >OLT 8820i</button></Link>
      </div>
    </div>
  )
}