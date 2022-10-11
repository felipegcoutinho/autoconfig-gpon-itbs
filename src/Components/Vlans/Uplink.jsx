import React from 'react'
import options from '../../js/UplinkOptions'
import Style from './Uplink.module.css'
import ValueContext from "../../js/ValueContext";

export default function Uplink() {

  const { values, handleChange } = React.useContext(ValueContext);

  return (
    <div id="two" className={Style.container}>
      <h2>#3 Configuração da Porta Uplink e criação das VLANs</h2>
      <div className={Style.content}>
        <h4>#3.1 DEFINIR PORTA UPLINK</h4>

        <select defaultValue={values.uplink} onChange={handleChange} name="uplink">
          {options.map((option) => (
            <option key={option.key} value={option.value}>{option.label}</option>
          ))}
        </select>

        <h4>#3.2 CRIAR VLAN</h4>
        <pre>vlan {values.vlanpon1}-{values.vlanpon16}</pre>
        <h4>#3.3 CRIAR UPLINK</h4>
        <pre>interface {values.uplink}</pre>
        <pre>switchport mode hybrid</pre>
        <pre>switchport hybrid tagged vlan {values.vlanpon1}-{values.vlanpon16}</pre>
        <pre>exit</pre>
      </div>
    </div>
  )
}