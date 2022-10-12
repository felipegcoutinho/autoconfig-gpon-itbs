import React from 'react'
import Style from './SelectDeviceRouter.module.css'
import ValueContext from "../../js/ValueContext";
import { DeviceOptionsRouter } from '../../js/DeviceOptions'

export default function SelectDeviceRouter() {
  const { values, handleChange } = React.useContext(ValueContext);

  return (
    <div className={Style.container}>
      <div className={Style.content}>
        <div className={Style.select}>
          <label htmlFor="devicerouter">Escolha o Device para Line Router</label>
          <select id='devicerouter' defaultValue={values.devicerouter} onChange={handleChange} name="devicerouter">
            {DeviceOptionsRouter.map((option) => (
              <option key={option.key} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
      </div>

    </div>
  )
}