import React from 'react'
import Style from './AutoConfig.module.css'
import ValueContext from "../../js/ValueContext";
import copyToClip from '../../js/BtnCopy';

export default function AutoConfig() {
  const { values } = React.useContext(ValueContext);

  return (
    <div id="autoconfig" className={Style.container}>
      <h2>#7 Auto Config</h2>
      <div className={Style.content}>
        <code id="auto" className={Style.code} onClick={() =>
          copyToClip(document.getElementById('auto').innerText)
        }>
          <pre>ont auto-config</pre>
          <pre>ont-find interface gpon all</pre>
          <pre>ont-find list-age time 60 interface gpon all</pre>
        </code>
        <hr />
        <code id="auto1" className={Style.code} onClick={() =>
          copyToClip(document.getElementById('auto1').innerText)
        }>
          <pre>ont auto-config name i30-100-VLAN-3001 device-type i30-100 line 1 interface gpon 0/1</pre>
          <pre>ont auto-config name i30-100-VLAN-3002 device-type i30-100 line 2 interface gpon 0/2</pre>
          <pre>ont auto-config name i30-100-VLAN-3003 device-type i30-100 line 3 interface gpon 0/3</pre>
          <pre>ont auto-config name i30-100-VLAN-3004 device-type i30-100 line 4 interface gpon 0/4</pre>
          <pre>ont auto-config name i30-100-VLAN-3005 device-type i30-100 line 5 interface gpon 0/5</pre>
          <pre>ont auto-config name i30-100-VLAN-3006 device-type i30-100 line 6 interface gpon 0/6</pre>
          <pre>ont auto-config name i30-100-VLAN-3007 device-type i30-100 line 7 interface gpon 0/7</pre>
          <pre>ont auto-config name i30-100-VLAN-3008 device-type i30-100 line 8 interface gpon 0/8</pre>
          <pre>ont auto-config name i30-100-VLAN-3009 device-type i30-100 line 9 interface gpon 0/9</pre>
          <pre>ont auto-config name i30-100-VLAN-3010 device-type i30-100 line 10 interface gpon 0/10</pre>
          <pre>ont auto-config name i30-100-VLAN-3011 device-type i30-100 line 11 interface gpon 0/11</pre>
          <pre>ont auto-config name i30-100-VLAN-3012 device-type i30-100 line 12 interface gpon 0/12</pre>
          <pre>ont auto-config name i30-100-VLAN-3013 device-type i30-100 line 13 interface gpon 0/13</pre>
          <pre>ont auto-config name i30-100-VLAN-3014 device-type i30-100 line 14 interface gpon 0/14</pre>
          <pre>ont auto-config name i30-100-VLAN-3015 device-type i30-100 line 15 interface gpon 0/15</pre>
          <pre>ont auto-config name i30-100-VLAN-3016 device-type i30-100 line 16 interface gpon 0/16</pre>
        </code>
        <hr />
        <code id="auto2" className={Style.code} onClick={() =>
          copyToClip(document.getElementById('auto2').innerText)
        }>
          <pre>ont auto-config name i41-421-VLAN-3001 device-type i41-421 line 17 interface gpon 0/1</pre>
          <pre>ont auto-config name i41-421-VLAN-3002 device-type i41-421 line 18 interface gpon 0/2</pre>
          <pre>ont auto-config name i41-421-VLAN-3003 device-type i41-421 line 19 interface gpon 0/3</pre>
          <pre>ont auto-config name i41-421-VLAN-3004 device-type i41-421 line 20 interface gpon 0/4</pre>
          <pre>ont auto-config name i41-421-VLAN-3005 device-type i41-421 line 21 interface gpon 0/5</pre>
          <pre>ont auto-config name i41-421-VLAN-3006 device-type i41-421 line 22 interface gpon 0/6</pre>
          <pre>ont auto-config name i41-421-VLAN-3007 device-type i41-421 line 23 interface gpon 0/7</pre>
          <pre>ont auto-config name i41-421-VLAN-3008 device-type i41-421 line 24 interface gpon 0/8</pre>
          <pre>ont auto-config name i41-421-VLAN-3009 device-type i41-421 line 25 interface gpon 0/9</pre>
          <pre>ont auto-config name i41-421-VLAN-3010 device-type i41-421 line 26 interface gpon 0/10</pre>
          <pre>ont auto-config name i41-421-VLAN-3011 device-type i41-421 line 27 interface gpon 0/11</pre>
          <pre>ont auto-config name i41-421-VLAN-3012 device-type i41-421 line 28 interface gpon 0/12</pre>
          <pre>ont auto-config name i41-421-VLAN-3013 device-type i41-421 line 29 interface gpon 0/13</pre>
          <pre>ont auto-config name i41-421-VLAN-3014 device-type i41-421 line 30 interface gpon 0/14</pre>
          <pre>ont auto-config name i41-421-VLAN-3015 device-type i41-421 line 31 interface gpon 0/15</pre>
          <pre>ont auto-config name i41-421-VLAN-3016 device-type i41-421 line 32 interface gpon 0/16</pre>
        </code>
      </div>
    </div>
  )
}