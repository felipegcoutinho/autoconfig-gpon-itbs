import React from 'react'
import Style from './Pons.module.css'
import ValueContext from "../../js/ValueContext";
import initialValues from '../../js/Values.js'

export default function Pons() {
  const { values, handleChange, checked } = React.useContext(ValueContext);

  return (
    <div id="aim" className={Style.container}>
      <h2> Definição dos AIMs do Profile VLAN</h2>

      <div className={Style.content}>
        <div className={Style.pons}>
          <Aim name="aimvlanpon1" value={values.aimvlanpon1} title="PON 1" handleChange={handleChange} />
          <Vlans name="vlanpon1" value={values.vlanpon1} handleChange={handleChange} />
        </div>
        <div className={Style.pons}>
          <Aim name="aimvlanpon2" value={values.aimvlanpon2} title="PON 2" handleChange={handleChange} />
          <Vlans name="vlanpon2" value={values.vlanpon2} handleChange={handleChange} />
        </div>
        <div className={Style.pons}>
          <Aim name="aimvlanpon3" value={values.aimvlanpon3} title="PON 3" handleChange={handleChange} />
          <Vlans name="vlanpon3" value={values.vlanpon3} handleChange={handleChange} />
        </div>
        <div className={Style.pons}>
          <Aim name="aimvlanpon4" value={values.aimvlanpon4} title="PON 4" handleChange={handleChange} />
          <Vlans name="vlanpon4" value={values.vlanpon4} handleChange={handleChange} />
        </div>
        <div className={Style.pons}>
          <Aim name="aimvlanpon5" value={values.aimvlanpon5} title="PON 5" handleChange={handleChange} />
          <Vlans name="vlanpon5" value={values.vlanpon5} handleChange={handleChange} />
        </div>
        <div className={Style.pons}>
          <Aim name="aimvlanpon6" value={values.aimvlanpon6} title="PON 6" handleChange={handleChange} />
          <Vlans name="vlanpon6" value={values.vlanpon6} handleChange={handleChange} />
        </div>
        <div className={Style.pons}>
          <Aim name="aimvlanpon7" value={values.aimvlanpon7} title="PON 7" handleChange={handleChange} />
          <Vlans name="vlanpon7" value={values.vlanpon7} handleChange={handleChange} />
        </div>
        <div className={Style.pons}>
          <Aim name="aimvlanpon8" value={values.aimvlanpon8} title="PON 8" handleChange={handleChange} />
          <Vlans name="vlanpon8" value={values.vlanpon8} handleChange={handleChange} />
        </div>
        {checked && (
          <>
            <div className={Style.pons}>
              <Aim name="aimvlanpon9" value={values.aimvlanpon9} title="PON 9" handleChange={handleChange} />
              <Vlans name="vlanpon9" value={values.vlanpon9} handleChange={handleChange} />
            </div>
            <div className={Style.pons}>
              <Aim name="aimvlanpon10" value={values.aimvlanpon10} title="PON 10" handleChange={handleChange} />
              <Vlans name="vlanpon10" value={values.vlanpon10} handleChange={handleChange} />
            </div>
            <div className={Style.pons}>
              <Aim name="aimvlanpon11" value={values.aimvlanpon11} title="PON 11" handleChange={handleChange} />
              <Vlans name="vlanpon11" value={values.vlanpon11} handleChange={handleChange} />
            </div>
            <div className={Style.pons}>
              <Aim name="aimvlanpon12" value={values.aimvlanpon12} title="PON 12" handleChange={handleChange} />
              <Vlans name="vlanpon12" value={values.vlanpon12} handleChange={handleChange} />
            </div>
            <div className={Style.pons}>
              <Aim name="aimvlanpon13" value={values.aimvlanpon13} title="PON 13" handleChange={handleChange} />
              <Vlans name="vlanpon13" value={values.vlanpon13} handleChange={handleChange} />
            </div>
            <div className={Style.pons}>
              <Aim name="aimvlanpon14" value={values.aimvlanpon14} title="PON 14" handleChange={handleChange} />
              <Vlans name="vlanpon14" value={values.vlanpon14} handleChange={handleChange} />
            </div>
            <div className={Style.pons}>
              <Aim name="aimvlanpon15" value={values.aimvlanpon15} title="PON 15" handleChange={handleChange} />
              <Vlans name="vlanpon15" value={values.vlanpon15} handleChange={handleChange} />
            </div>
            <div className={Style.pons}>
              <Aim name="aimvlanpon16" value={values.aimvlanpon16} title="PON 16" handleChange={handleChange} />
              <Vlans name="vlanpon16" value={values.vlanpon16} handleChange={handleChange} />
            </div>
          </>
        )}
      </div>
    </div >
  )
}

function Aim({ handleChange, teste, ...props }) {
  return (
    <>
      <h5 className={Style.h5}>{props.title}</h5>
      <label>AIM</label>
      <input type="number" onChange={handleChange} onBlur={teste} {...props} />
    </>
  )
}

function Vlans({ handleChange, ...props }) {
  return (
    <>
      <label>VLAN</label>
      <input type="number" onChange={handleChange} {...props} />
    </>
  )
}