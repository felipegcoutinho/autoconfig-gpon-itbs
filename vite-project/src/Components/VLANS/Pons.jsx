import React from 'react'
import Styles from './Pons.module.css'
import ProfileVlan from './ProfileVlan.jsx'

function Pons() {
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

      {/* <div className={Styles.uplinkselect}>
      interface ethernet 2/2
      switchport mode hybrid
      switchport hybrid tagged vlan 100-65
      exit
    </div> */}

      <div className={Styles.gpon}>
        <Props title="PON 1" aim="1" vlan="10" idVlan="vlanpon1" idAim="aimpon1" />
        <Props title="PON 2" aim="2" vlan="11" idVlan="vlanpon2" idAim="aimpon2" />
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
      <label for={props.idAim}>AIM</label>
      <input type="number" id={props.idAim} value={props.aim} />
      <label for={props.idVlan}>VLAN</label>
      <input type="number" id={props.idVlan} value={props.vlan} />
    </div>
  )
}
