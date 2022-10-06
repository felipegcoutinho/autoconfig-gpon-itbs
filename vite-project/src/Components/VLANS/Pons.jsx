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
        <Props title="PON 1" defaultValue={values.vlanpon1} vlan="10" onChange={handleChange} idVlan="vlanpon1" idAim="aimpon1" />
        <Props title="PON 2" vlan="11" idVlan="vlanpon2" onChange={handleChange} idAim="aimpon2" />
        <Props title="PON 3" aim="3" vlan="12" idVlan="vlanpon3" idAim="aimpon3" />
        <Props title="PON 4" aim="4" vlan="13" idVlan="vlanpon4" idAim="aimpon4" />
        <Props title="PON 5" aim="5" vlan="14" idVlan="vlanpon5" idAim="aimpon5" />
        <Props title="PON 6" aim="6" vlan="15" idVlan="vlanpon6" idAim="aimpon6" />
        <Props title="PON 7" aim="7" vlan="16" idVlan="vlanpon7" idAim="aimpon7" />
        <Props title="PON 8" aim="8" vlan="17" idVlan="vlanpon8" idAim="aimpon8" />
        <Props title="PON 9" aim="9" vlan="18" idVlan="vlanpon9" idAim="aimpon9" />
        <Props title="PON 10" aim="10" vlan="19" idVlan="vlanpon10" idAim="aimpon10" />
        <Props title="PON 11" aim="11" vlan="21" idVlan="vlanpon11" idAim="aimpon11" />
        <Props title="PON 12" aim="12" vlan="22" idVlan="vlanpon12" idAim="aimpon12" />
        <Props title="PON 13" aim="13" vlan="23" idVlan="vlanpon13" idAim="aimpon13" />
        <Props title="PON 14" aim="14" vlan="24" idVlan="vlanpon14" idAim="aimpon14" />
        <Props title="PON 15" aim="15" vlan="25" idVlan="vlanpon15" idAim="aimpon15" />
        <Props title="PON 16" aim="16" vlan="26" idVlan="vlanpon16" idAim="aimpon16" />
      </div>
      {values.vlanpon1}
    </div>
      <ProfileVlan />
    </>
  )
}

export default Pons

function Props(props) {
  return (
    <div className={Styles.pons}>
      <h5>{props.title}</h5>
      <label >AIM</label>
      <input type="number" id={props.idAim} defaultValue={props.defaultValue} onChange={props.handleChange} />
      <label >VLAN</label>
      <input type="number" id={props.idVlan} defaultValue={props.vlan} onChange={props.handleChange} />
    </div>
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
