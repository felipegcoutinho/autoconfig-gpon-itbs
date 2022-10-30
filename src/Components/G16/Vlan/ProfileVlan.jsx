import React from 'react'
import Style from './ProfileVlan.module.css'
import ValueContext from "../../../js/ValueContext";
import copyToClip from '../../../js/BtnCopy';

export default function ProfileVlan() {
  const { values, g16, handleCpemgr, cpemgr } = React.useContext(ValueContext);

  return (
    <div id="vlan" className={Style.container}>
      <h2> Profile Vlan</h2>
      <div className={Style.content}>
        <div className={Style.ContainerCpemgr}>
          <label>Habilitar CPEMGR:
            <select type="checkbox" className={Style.cpemgr} onChange={handleCpemgr} >
              <option>Não</option>
              <option>Sim</option>
            </select>
          </label>
        </div>



        <code id="blocovlan1" className={Style.code} onClick={() =>
          copyToClip(document.getElementById('blocovlan1').innerText)
        }>
          <pre>deploy profile vlan</pre>
          <pre>aim {values.aimvlanpon1} name vlan{values.vlanpon1}</pre><pre>translate old-vlan {values.vlanpon1} new-vlan {values.vlanpon1}</pre>{cpemgr ? <pre>translate old-vlan 7 new-vlan 7</pre> : null}<pre>active</pre>
          <pre>aim {values.aimvlanpon2} name vlan{values.vlanpon2}</pre><pre>translate old-vlan {values.vlanpon2} new-vlan {values.vlanpon2}</pre>{cpemgr ? <pre>translate old-vlan 7 new-vlan 7</pre> : null}<pre>active</pre>
          <pre>aim {values.aimvlanpon3} name vlan{values.vlanpon3}</pre><pre>translate old-vlan {values.vlanpon3} new-vlan {values.vlanpon3}</pre>{cpemgr ? <pre>translate old-vlan 7 new-vlan 7</pre> : null}<pre>active</pre>
          <pre>aim {values.aimvlanpon4} name vlan{values.vlanpon4}</pre><pre>translate old-vlan {values.vlanpon4} new-vlan {values.vlanpon4}</pre>{cpemgr ? <pre>translate old-vlan 7 new-vlan 7</pre> : null}<pre>active</pre>
        </code>
        <hr></hr>
        <code id="blocovlan2" className={Style.code} onClick={() =>
          copyToClip(document.getElementById('blocovlan2').innerText)
        }>
          <pre>aim {values.aimvlanpon5} name vlan{values.vlanpon5}</pre><pre>translate old-vlan {values.vlanpon5} new-vlan {values.vlanpon5}</pre>{cpemgr ? <pre>translate old-vlan 7 new-vlan 7</pre> : null}<pre>active</pre>
          <pre>aim {values.aimvlanpon6} name vlan{values.vlanpon6}</pre><pre>translate old-vlan {values.vlanpon6} new-vlan {values.vlanpon6}</pre>{cpemgr ? <pre>translate old-vlan 7 new-vlan 7</pre> : null}<pre>active</pre>
          <pre>aim {values.aimvlanpon7} name vlan{values.vlanpon7}</pre><pre>translate old-vlan {values.vlanpon7} new-vlan {values.vlanpon7}</pre>{cpemgr ? <pre>translate old-vlan 7 new-vlan 7</pre> : null}<pre>active</pre>
          <pre>aim {values.aimvlanpon8} name vlan{values.vlanpon8}</pre><pre>translate old-vlan {values.vlanpon8} new-vlan {values.vlanpon8}</pre>{cpemgr ? <pre>translate old-vlan 7 new-vlan 7</pre> : null}<pre>active</pre>
        </code>
        {g16 && (
          <>

            <hr></hr>
            <code id="blocovlan3" className={Style.code} onClick={() =>
              copyToClip(document.getElementById('blocovlan3').innerText)
            }>
              <pre>aim {values.aimvlanpon9} name vlan{values.vlanpon9}</pre><pre>translate old-vlan {values.vlanpon9} new-vlan {values.vlanpon9}</pre>{cpemgr ? <pre>translate old-vlan 7 new-vlan 7</pre> : null}<pre>active</pre>
              <pre>aim {values.aimvlanpon10} name vlan{values.vlanpon10}</pre><pre>translate old-vlan {values.vlanpon10} new-vlan {values.vlanpon10}</pre>{cpemgr ? <pre>translate old-vlan 7 new-vlan 7</pre> : null}<pre>active</pre>
              <pre>aim {values.aimvlanpon11} name vlan{values.vlanpon11}</pre><pre>translate old-vlan {values.vlanpon11} new-vlan {values.vlanpon11}</pre>{cpemgr ? <pre>translate old-vlan 7 new-vlan 7</pre> : null}<pre>active</pre>
              <pre>aim {values.aimvlanpon12} name vlan{values.vlanpon12}</pre><pre>translate old-vlan {values.vlanpon12} new-vlan {values.vlanpon12}</pre>{cpemgr ? <pre>translate old-vlan 7 new-vlan 7</pre> : null}<pre>active</pre>
            </code>
            <hr></hr>
            <code id="blocovlan4" className={Style.code} onClick={() =>
              copyToClip(document.getElementById('blocovlan4').innerText)
            }>
              <pre>aim {values.aimvlanpon13} name vlan{values.vlanpon13}</pre><pre>translate old-vlan {values.vlanpon13} new-vlan {values.vlanpon13}</pre>{cpemgr ? <pre>translate old-vlan 7 new-vlan 7</pre> : null}<pre>active</pre>
              <pre>aim {values.aimvlanpon14} name vlan{values.vlanpon14}</pre><pre>translate old-vlan {values.vlanpon14} new-vlan {values.vlanpon14}</pre>{cpemgr ? <pre>translate old-vlan 7 new-vlan 7</pre> : null}<pre>active</pre>
              <pre>aim {values.aimvlanpon15} name vlan{values.vlanpon15}</pre><pre>translate old-vlan {values.vlanpon15} new-vlan {values.vlanpon15}</pre>{cpemgr ? <pre>translate old-vlan 7 new-vlan 7</pre> : null}<pre>active</pre>
              <pre>aim {values.aimvlanpon16} name vlan{values.vlanpon16}</pre><pre>translate old-vlan {values.vlanpon16} new-vlan {values.vlanpon16}</pre>{cpemgr ? <pre>translate old-vlan 7 new-vlan 7</pre> : null}<pre>active</pre>
              <pre>exit</pre>
            </code>
          </>
        )}
      </div>

    </div >

  )
}