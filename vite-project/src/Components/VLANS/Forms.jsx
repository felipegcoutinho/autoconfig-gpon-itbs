import React from 'react'
import initialValues from '../../js/values.js'
import Styles from './Pons.module.css'


function Forms(props) {
  return (
    <>
      <div className={Styles.pons}>
        <h5>PON1</h5>
        <label>AIM</label>
        <input type="number" id="1" defaultValue={initialValues.vlanpon1} name={initialValues.vlanpon1} />
        <label>VLAN</label>
        <input type="number" defaultValue={initialValues.vlanpon1} />
      </div>
      <div className={Styles.pons}>
        <h5>PON2</h5>
        <label>AIM</label>
        <input type="number" id="2" defaultValue={initialValues.vlanpon2} name={initialValues.vlanpon2} />
        <label>VLAN</label>
        <input type="number" defaultValue={initialValues.vlanpon1} />
      </div>
      <div className={Styles.pons}>
        <h5>PON2</h5>
        <label>AIM</label>
        <input type="number" id="2" defaultValue={initialValues.vlanpon2} name={initialValues.vlanpon2} />
        <label>VLAN</label>
        <input type="number" defaultValue={initialValues.vlanpon1} />
      </div>


    </>
  )
}

export default Forms