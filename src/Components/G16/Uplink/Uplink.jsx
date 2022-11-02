import React from 'react'
import options from '../../../JS/UplinkOptions'
import Style from './Uplink.module.css'
import ValueContext from "../../../JS/ValueContext";
import copyToClip from '../../../JS/BtnCopy';

export default function Uplink() {
  const { values, handleChange, g16 } = React.useContext(ValueContext);

  return (
    <div id="uplink" className={Style.container}>
      <h2> Configuração da interface Uplink e criação das VLANs na OLT</h2>
      <div className={Style.content}>
        <h4 className={Style.h4}>3.1 DEFINA A PORTA UPLINK:</h4>

        <select defaultValue={values.uplink} onChange={handleChange} name="uplink">
          {options.map((option) => (
            <option key={option.key} value={option.value}>{option.label}</option>
          ))}
        </select>

        <h4 className={Style.h4}>3.2 CRIAR VLAN</h4>
        <code id="criarVlan" className={Style.code} onClick={() =>
          copyToClip(document.getElementById('criarVlan').innerText)
        }>
          {g16 ? <pre>vlan {values.vlanpon1},{values.vlanpon2},{values.vlanpon3},{values.vlanpon4},
            {values.vlanpon5},{values.vlanpon6},{values.vlanpon7},{values.vlanpon8},{values.vlanpon9},
            {values.vlanpon10},{values.vlanpon11},{values.vlanpon12},{values.vlanpon13},
            {values.vlanpon14},{values.vlanpon15},{values.vlanpon16}</pre> :
            <pre>vlan {values.vlanpon1},{values.vlanpon2},{values.vlanpon3},{values.vlanpon4},
              {values.vlanpon5},{values.vlanpon6},{values.vlanpon7},{values.vlanpon8}</pre>}
        </code>

        <h4 className={Style.h4}>3.3 CRIAR UPLINK</h4>
        <code id="bloco2" className={Style.code} onClick={() =>
          copyToClip(document.getElementById('bloco2').innerText)
        }>
          <pre>interface {values.uplink}</pre>
          <pre>switchport mode hybrid</pre>
          {g16 ? <pre>switchport hybrid tagged vlan {values.vlanpon1},{values.vlanpon2},{values.vlanpon3},{values.vlanpon4},
            {values.vlanpon5},{values.vlanpon6},{values.vlanpon7},{values.vlanpon8},{values.vlanpon9},
            {values.vlanpon10},{values.vlanpon11},{values.vlanpon12},{values.vlanpon13},
            {values.vlanpon14},{values.vlanpon15},{values.vlanpon16}</pre>
            : <pre>switchport hybrid tagged vlan {values.vlanpon1},{values.vlanpon2},{values.vlanpon3},{values.vlanpon4},
              {values.vlanpon5},{values.vlanpon6},{values.vlanpon7},{values.vlanpon8}</pre>}
          <pre>exit</pre>
        </code>
      </div>
    </div>
  )
}