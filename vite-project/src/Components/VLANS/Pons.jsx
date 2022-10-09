import React from 'react'
import Styles from './Pons.module.css'
import initialValues from '../../js/values.js'
import Style from './ProfileVlan.module.css'

export function Pons() {
  const [values, setValues] = React.useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };


  return (
    <><div className={Styles.container}>
      <h3>Configuração de VLANs das PONs</h3>

      <div className={Styles.uplinkselect}>
        <label>UPLINK</label>

        <select name="uplinkpon1">
          <option value="eth 1">eth 1</option>
          <option value="eth 2">eth 2</option>
          <option value="eth 3">eth 3</option>
          <option value="eth 4">eth 4</option>
          <option value="eth 5">eth 5</option>
          <option value="eth 6">eth 6</option>
          <option value="eth 7">eth 7</option>
          <option value="eth 8">eth 8</option>
          <option value="xeth 1">xeth 1</option>
          <option value="xeth 2">xeth 2</option>
        </select>

      </div>

      <div className={Styles.gpon}>
        <div className={Styles.pons}>
          <Aim name="aimpon1" defaultValue="999" title="PON 1" handleChange={handleChange} />
          <Vlans name="vlanpon1" defaultValue={values.vlanpon1} handleChange={handleChange} />
        </div>
        <div className={Styles.pons}>
          <Aim title="PON 2" handleChange={handleChange} />
          <Vlans name="vlanpon2" handleChange={handleChange} />
        </div>

        {/* <Forms title="PON 1" defaultValue={values.vlanpon1} name="vlanpon1" handleChange={handleChange} />
        <Vlans />
        <Forms title="PON 2" name="vlanpon2" handleChange={handleChange} />
        <Forms title="PON 2" name="vlanpon3" handleChange={handleChange} />
        <Forms title="PON 4" name="vlanpon4" handleChange={handleChange} />
        <Forms title="PON 5" name="vlanpon5" handleChange={handleChange} />
        <Forms title="PON 6" name="vlanpon6" handleChange={handleChange} />
        <Forms title="PON 7" name="vlanpon7" handleChange={handleChange} />
        <Forms title="PON 8" name="vlanpon8" handleChange={handleChange} />
        <Forms title="PON 9" name="vlanpon9" handleChange={handleChange} />
        <Forms title="PON 10" name="vlanpon10" handleChange={handleChange} />
        <Forms title="PON 11" name="vlanpon11" handleChange={handleChange} />
        <Forms title="PON 12" name="vlanpon12" handleChange={handleChange} />
        <Forms title="PON 13" name="vlanpon13" handleChange={handleChange} />
        <Forms title="PON 14" name="vlanpon14" handleChange={handleChange} />
        <Forms title="PON 15" name="vlanpon15" handleChange={handleChange} />
        <Forms title="PON 16" name="vlanpon16" handleChange={handleChange} /> */}
        {/* <Props title="PON 16" aim="16" vlan="26" idVlan="vlanpon16" idAim="aimpon16" /> */}
      </div>
      PON 1 <br />
      AIM - {values.aimpon1}<br />
      VLAN -{values.vlanpon1}<br />
    </div>
      <ProfileVlan />
    </>
  )
}

export default Pons

function Aim({ handleChange, ...props }) {
  return (
    <>
      <h5>{props.title}</h5>
      <label>AIM</label>
      <input type="number" onChange={handleChange} {...props} />
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

function ProfileVlan() {
  return (
    <div className={Style.container}>
      <h2>Profile VLAN</h2>
      <p>deploy profile vlan</p>
      <p>aim 1 name vlan101
        translate old-vlan 101 new-vlan 101
        active</p>
      <p>aim 2 name vlan102
        translate old-vlan 102 new-vlan 102
        active</p>
      <p>aim 3 name vlan103
        translate old-vlan 103 new-vlan 103
        active</p>
      <p>aim 4 name vlan104
        translate old-vlan 104 new-vlan 104
        active</p>
      <p>aim 5 name vlan105
        translate old-vlan 105 new-vlan 105
        active</p>
      <p>aim 6 name vlan106
        translate old-vlan 106 new-vlan 106
        active</p>
      <p> aim 7 name vlan107
        translate old-vlan 107 new-vlan 107
        active</p>
      <p>aim 8 name vlan108
        translate old-vlan 108 new-vlan 108
        active</p>
      <p>aim 9 name vlan109
        translate old-vlan 109 new-vlan 109
        active</p>
      <p>aim 10 name vlan110
        translate old-vlan 110 new-vlan 110
        active</p>
      <p> aim 11 name vlan111
        translate old-vlan 111 new-vlan 111
        active</p>
      <p> aim 12 name vlan112
        translate old-vlan 112 new-vlan 112
        active</p>
      <p> aim 13 name vlan113
        translate old-vlan 113 new-vlan 113
        active</p>
      <p> aim 14 name vlan114
        translate old-vlan 114 new-vlan 114
        active</p>
      <p> aim 15 name vlan115
        translate old-vlan 115 new-vlan 115
        active</p>
      <p> aim 16 name vlan116
        translate old-vlan 116 new-vlan 116
        active</p>
      exit
    </div>
  )
}
