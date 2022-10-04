import React from 'react'
import Styles from './Pons.module.css'

function Pons() {
  return (
    <div className={Styles.container}>
      <h3>Configuração de VLANs das PONs</h3>
      <div className={Styles.teste}>
        <h4>PON1</h4>
        <label>AIM</label>
        <input className={Styles.aim} type="number" value="1" />
        <label>ID</label>
        <input type="number" value={1190} />
      </div>






      <div className={Styles.teste}>
        <h4>PON2</h4>
        <label>AIM <input type="number" value="2" /></label>
        <label> VLAN ID <input type="number" value="111" /></label>
      </div>
      <div className={Styles.teste}>
        <h4>PON2</h4>
        <label>AIM <input type="number" value="2" /></label>
        <label> VLAN ID <input type="number" value="111" /></label>
      </div>
      <div>
        <h4>PON2</h4>
        <label>AIM <input type="number" value="2" /></label>
        <label> VLAN ID <input type="number" value="111" /></label>
      </div>
      <div>
        <h4>PON2</h4>
        <label>AIM <input type="number" value="2" /></label>
        <label> VLAN ID <input type="number" value="111" /></label>
      </div>
      <div>
        <h4>PON2</h4>
        <label>AIM <input type="number" value="2" /></label>
        <label> VLAN ID <input type="number" value="111" /></label>
      </div>
      <div>
        <h4>PON2</h4>
        <label>AIM <input type="number" value="2" /></label>
        <label> VLAN ID <input type="number" value="111" /></label>
      </div>
      <div>
        <h4>PON2</h4>
        <label>AIM <input type="number" value="2" /></label>
        <label> VLAN ID <input type="number" value="111" /></label>
      </div>
      <div>
        <h4>PON2</h4>
        <label>AIM <input type="number" value="2" /></label>
        <label> VLAN ID <input type="number" value="111" /></label>
      </div>
      <div>
        <h4>PON2</h4>
        <label>AIM <input type="number" value="2" /></label>
        <label> VLAN ID <input type="number" value="111" /></label>
      </div>
      <div>
        <h4>PON2</h4>
        <label>AIM <input type="number" value="2" /></label>
        <label> VLAN ID <input type="number" value="111" /></label>
      </div>
      <div>
        <h4>PON2</h4>
        <label>AIM <input type="number" value="2" /></label>
        <label> VLAN ID <input type="number" value="111" /></label>
      </div>
      <div>
        <h4>PON2</h4>
        <label>AIM <input type="number" value="2" /></label>
        <label> VLAN ID <input type="number" value="111" /></label>
      </div>
      <div>
        <h4>PON2</h4>
        <label>AIM <input type="number" value="2" /></label>
        <label> VLAN ID <input type="number" value="111" /></label>
      </div>
      <div>
        <h4>PON2</h4>
        <label>AIM <input type="number" value="2" /></label>
        <label> VLAN ID <input type="number" value="111" /></label>
      </div>
      <div>
        <h4>PON2</h4>
        <label>AIM <input type="number" value="2" /></label>
        <label> VLAN ID <input type="number" value="111" /></label>
      </div>
      <br />
      <label>UPLINK <input type="text" value="Ethernet 1/2" /></label>
    </div>
  )
}

export default Pons

function Props(props) {
  return (
    <div>Pons</div>
  )
}
