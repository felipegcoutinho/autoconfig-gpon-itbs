import React from 'react';
import initialValues from '../../../js/initialValues.js';
import copyToClip from '../../../js/BtnCopy';
import Style from './ProvisManual.module.css';

export default function ProvisManual() {

  const [values, setValues] = React.useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <div className={Style.container}>
      <h2> Provisionamento Manual - Router</h2>
      <form className={Style.content} onChange={handleChange} >

        <div className={Style.pons}>
          <h5 className={Style.h5}>PON</h5>
          <label>ID</label>
          <input type="number" name="aimvlanpon1" defaultValue={values.aimvlanpon10} onChange={handleChange} />
          <label>SLOT</label>
          <input type="number" name="aimvlanpon1" defaultValue={values.aimvlanpon10} onChange={handleChange} />
        </div>

        <div className={Style.pons}>
          <h5 className={Style.h5}>ONU/ONT</h5>
          <label>Serial Number</label>
          <input type="number" onChange={handleChange} />
          <label>Device Type</label>
          <select type="number" onChange={handleChange} />
          <label>Descrição</label>
          <input type="number" onChange={handleChange} />
        </div>

        <div className={Style.pons}>
          <h5 className={Style.h5}>PROFILES</h5>
          <label>DBA</label>
          <input type="number" onChange={handleChange} />
          <label>VLAN</label>
          <select type="number" onChange={handleChange} />
          <label>Line</label>
          <input type="number" onChange={handleChange} />
        </div>

        <div className={Style.pons}>
          <h5 className={Style.h5}>VLAN</h5>
          <label>VLAN</label>
          <input type="number" onChange={handleChange} />
        </div>

      </form>

      <div className={Style.contentCode}>
        <code id="bloco" className={Style.code} onClick={() =>
          copyToClip(document.getElementById('bloco').innerText)
        }>
          <pre>deploy profile dba</pre>
          <pre>aim 1 name DBA-DEFAULT</pre>
          <pre>type 4 max 1200000</pre>
          <pre>active</pre>
          <pre>exit</pre>
        </code>
        <hr />
        <code id="bloco" className={Style.code} onClick={() =>
          copyToClip(document.getElementById('bloco').innerText)
        }>
          <pre>deploy profile vlan</pre>
          <pre>aim 200</pre>
          <pre>translate old - vlan 200 new- vlan 200</pre>
          <pre>translate old - vlan 7 new- vlan 7</pre>
          <pre>active</pre>
          <pre>exit</pre>
        </code>
        <hr />
        <code id="bloco" className={Style.code} onClick={() =>
          copyToClip(document.getElementById('bloco').innerText)
        }>
          <pre>deploy profile line</pre>
          <pre>aim name</pre>
          <pre>device type i40-211</pre>
          <pre>tcont 1 profile dba name padrao</pre>
          <pre>gemport 1 tcont 1 vlan-profile 200</pre>
          <pre>gemport 2 tcont 1 vlan-profile 200</pre>
          <pre>mapping mode port-vlan</pre>
          <pre>mapping 1 port veip vlan 200 gemport 1</pre>
          <pre>mapping 2 port veip vlan 7 gemport 2</pre>
          <pre>flow 1 port veip vlan 200 keep</pre>
          <pre>flow 2 port veip vlan 7 keep</pre>
          <pre>active</pre>
          <pre>exit</pre>
        </code>
        <hr />
        <code id="bloco" className={Style.code} onClick={() =>
          copyToClip(document.getElementById('bloco').innerText)
        }>
          <pre>deploy profile rule</pre>
          <pre>aim 0/1/3</pre>
          <pre>permit sn string-hex ZTEG-c4ac0320 line name  default line name</pre>
          <pre>active</pre>
        </code>
      </div>
    </div>
  )
}					