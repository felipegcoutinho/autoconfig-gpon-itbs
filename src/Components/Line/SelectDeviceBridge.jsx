import React from 'react'
import Style from './SelectDeviceBridge.module.css'
import ValueContext from "../../js/ValueContext";
import options from '../../js/DeviceOptions'

export default function SelectDeviceBridge() {
  const { values, handleChange } = React.useContext(ValueContext);

  return (
    <div id="vlan" className={Style.container}>
      <h2>#6 Profile Line</h2>
      <div className={Style.content}>

        <div className={Style.select}>
          <label htmlFor="devicebridge">Escolha o Device para Line Bridge</label>
          <select id='devicebridge' defaultValue={values.device} onChange={handleChange} name="device">
            {options.map((option) => (
              <option key={option.key} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
      </div>

    </div>
  )
}