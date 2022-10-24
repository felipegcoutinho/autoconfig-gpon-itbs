import React from 'react';
import Style from './Pons_i.module.css';
import ValueContext from "../../../js/ValueContext";
import { UplinkOptions, BridgeOptions, ModoVlanOptions, OnuOptions } from '../js/Options';

export default function Pons_i() {
  const { values, handleChange, selected } = React.useContext(ValueContext);

  return (
    <div className={Style.container}>
      <h2> UMA VLAN POR PORTA PON</h2>
      <form className={Style.content} onChange={handleChange} >
        <div className={Style.pons}>
          {selected ? <Vlan name="vlanpon1" defaultValue={values.vlanpon1} title="PON 1" />
            : <Vlan name="vlanpon1" defaultValue={values.vlanpon1} title="Todas as PONs" />
          }
          <Uplink name="vlanpon1" defaultValue={values.vlanpon1} />
          <Bridge name="aimvlanpon1" defaultValue={values.vlanpon1} />
          <ModoVlan name="vlanpon1" defaultValue={values.vlanpon1} />
        </div>
        {selected && (
          <>
            <div className={Style.pons}>
              <Vlan name="vlanpon2" defaultValue={values.vlanpon2} title="PON 2" />
              <Uplink name="vlanpon1" defaultValue={values.vlanpon1} />
              <Bridge name="aimvlanpon1" defaultValue={values.vlanpon1} />
              <ModoVlan name="vlanpon1" defaultValue={values.vlanpon1} />
            </div>
            <div className={Style.pons}>
              <Vlan name="aimvlanpon1" defaultValue={values.vlanpon1} title="PON 3" />
              <Uplink name="vlanpon1" defaultValue={values.vlanpon1} />
              <Bridge name="aimvlanpon1" defaultValue={values.vlanpon1} />
              <ModoVlan name="vlanpon1" defaultValue={values.vlanpon1} />
            </div>
            <div className={Style.pons}>
              <Vlan name="aimvlanpon1" defaultValue={values.vlanpon1} title="PON 4" />
              <Uplink name="vlanpon1" defaultValue={values.vlanpon1} />
              <Bridge name="aimvlanpon1" defaultValue={values.vlanpon1} />
              <ModoVlan name="vlanpon1" defaultValue={values.vlanpon1} />
            </div>
            <div className={Style.pons}>
              <Vlan name="aimvlanpon1" defaultValue={values.vlanpon1} title="PON 5" />
              <Uplink name="vlanpon1" defaultValue={values.vlanpon1} />
              <Bridge name="aimvlanpon1" defaultValue={values.vlanpon1} />
              <ModoVlan name="vlanpon1" defaultValue={values.vlanpon1} />
            </div>
            <div className={Style.pons}>
              <Vlan name="aimvlanpon1" defaultValue={values.vlanpon1} title="PON 6" />
              <Uplink name="vlanpon1" defaultValue={values.vlanpon1} />
              <Bridge name="aimvlanpon1" defaultValue={values.vlanpon1} />
              <ModoVlan name="vlanpon1" defaultValue={values.vlanpon1} />
            </div>
            <div className={Style.pons}>
              <Vlan name="aimvlanpon1" defaultValue={values.vlanpon1} title="PON 7" />
              <Uplink name="vlanpon1" defaultValue={values.vlanpon1} />
              <Bridge name="aimvlanpon1" defaultValue={values.vlanpon1} />
              <ModoVlan name="vlanpon1" defaultValue={values.vlanpon1} />
            </div>
            <div className={Style.pons}>
              <Vlan name="aimvlanpon1" defaultValue={values.vlanpon1} title="PON 8" />
              <Uplink name="vlanpon1" defaultValue={values.vlanpon1} />
              <Bridge name="aimvlanpon1" defaultValue={values.vlanpon1} />
              <ModoVlan name="vlanpon1" defaultValue={values.vlanpon1} />
            </div>
          </>
        )}
        <div className={Style.contentOnus}>
          <div className={Style.pons}>
            <Onus name="aimvlanpon1" defaultValue={values.vlanpon1} title="ONU R1" />
          </div>
          <div className={Style.pons}>
            <Onus name="aimvlanpon1" defaultValue={values.vlanpon1} title="ONU 110" />
          </div>
          <div className={Style.pons}>
            <Onus name="aimvlanpon1" defaultValue={values.vlanpon1} title="Default" />
          </div>
        </div>
      </form>
    </div>
  )
}

function Onus({ handleChange, ...props }) {
  return (
    <>
      <h5 className={Style.h5Onu}>{props.title}</h5>
      <label>Modo de Operação</label>
      <select onChange={handleChange} {...props} >
        {OnuOptions.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </>
  )
}


function Vlan({ handleChange, ...props }) {
  return (
    <>
      <h5 className={Style.h5}>{props.title}</h5>
      <label>Vlan ID</label>
      <input type="number" onChange={handleChange} {...props} />
    </>
  )
}

function Uplink({ handleChange, ...props }) {
  return (
    <>
      <label>Uplink</label>
      <select onChange={handleChange} {...props} >
        {UplinkOptions.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </>
  )
}
function Bridge({ handleChange, ...props }) {
  return (
    <>
      <label>Bridge</label>
      <select onChange={handleChange} {...props}>
        {BridgeOptions.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </>
  )
}

function ModoVlan({ handleChange, ...props }) {
  return (
    <>
      <label>Modo Vlan</label>
      <select onChange={handleChange} {...props}>
        {ModoVlanOptions.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </>
  )
}