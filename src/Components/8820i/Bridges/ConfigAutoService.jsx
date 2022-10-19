import React from 'react'
import Style from './ConfigAutoService.module.css'
import ValueContext from "../../../js/ValueContext";
import copyToClip from "../../../js/BtnCopy";


export default function ConfigAutoService() {
  const { values } = React.useContext(ValueContext);

  return (
    <div className={Style.container}>
      <h2> CONFIGURAÇÕES DO AUTO-SERVICE</h2>
      <div className={Style.content}>
        <code id="linebridge1" className={Style.code} onClick={() =>
          copyToClip(document.getElementById('linebridge1').innerText)
        }>

          <pre>bridge add eth 1 uplink vlan 101 tagged</pre>
          <pre>bridge add eth 1 uplink vlan 102 tagged</pre>
          <pre>bridge add eth 1 uplink vlan 103 tagged</pre>
          <pre>bridge add eth 1 uplink vlan 104 tagged</pre>
          <pre>bridge add eth 1 uplink vlan 105 tagged</pre>
          <pre>bridge add eth 1 uplink vlan 106 tagged</pre>
          <pre>bridge add eth 1 uplink vlan 107 tagged</pre>
          <pre>bridge add eth 1 uplink vlan 108 tagged</pre>
        </code>
        <hr />
        <code id="linebridge2" className={Style.code} onClick={() =>
          copyToClip(document.getElementById('linebridge2').innerText)
        }>
          <pre>bridge-profile add gpon1-default downlink vlan 101 tagged eth 1</pre>
          <pre>bridge-profile add gpon2-default downlink vlan 102 tagged eth 1</pre>
          <pre>bridge-profile add gpon3-default downlink vlan 103 tagged eth 1</pre>
          <pre>bridge-profile add gpon4-default downlink vlan 104 tagged eth 1</pre>
          <pre>bridge-profile add gpon5-default downlink vlan 105 tagged eth 1</pre>
          <pre>bridge-profile add gpon6-default downlink vlan 106 tagged eth 1</pre>
          <pre>bridge-profile add gpon7-default downlink vlan 107 tagged eth 1</pre>
          <pre>bridge-profile add gpon8-default downlink vlan 108 tagged eth 1</pre>
        </code>
        <hr />
        <code id="linebridge3" className={Style.code} onClick={() =>
          copyToClip(document.getElementById('linebridge3').innerText)
        }>
          <pre>bridge-profile add gpon1-default-router downlink vlan 101 tagged router</pre>
          <pre>bridge-profile add gpon2-default-router downlink vlan 102 tagged router</pre>
          <pre>bridge-profile add gpon3-default-router downlink vlan 103 tagged router</pre>
          <pre>bridge-profile add gpon4-default-router downlink vlan 104 tagged router</pre>
          <pre>bridge-profile add gpon5-default-router downlink vlan 105 tagged router</pre>
          <pre>bridge-profile add gpon6-default-router downlink vlan 106 tagged router</pre>
          <pre>bridge-profile add gpon7-default-router downlink vlan 107 tagged router</pre>
          <pre>bridge-profile add gpon8-default-router downlink vlan 108 tagged router</pre>
        </code>
        <hr />
        <code id="linebridge4" className={Style.code} onClick={() =>
          copyToClip(document.getElementById('linebridge4').innerText)
        }>
          <pre>bridge-profile bind add gpon1-default device intelbras-110 gpon 3</pre>
          <pre>bridge-profile bind add gpon1-default device intelbras-110b gpon 3</pre>
          <pre>bridge-profile bind add gpon1-default device intelbras-110g gpon 3</pre>
          <pre>bridge-profile bind add gpon1-default device intelbras-default gpon 3</pre>
          <pre>bridge-profile bind add gpon1-default-router device intelbras-r1 gpon 3</pre>
          <pre>bridge-profile bind add gpon1-default-router device intelbras-121w gpon 3</pre>
          <pre>bridge-profile bind add gpon1-default-router device intelbras-142ng gpon 3</pre>
          <pre>bridge-profile bind add gpon1-default-router device intelbras-142nw gpon 3</pre>
          <pre>bridge-profile bind add gpon1-default-router device intelbras-1420g gpon 3</pre>
          <pre>bridge-profile bind add gpon1-default-router device intelbras-121ac gpon 3</pre>
          <pre>bridge-profile bind add gpon1-default-router device intelbras-1200r gpon 3</pre>
          <pre>bridge-profile bind add gpon1-default-router device intelbras-120ac gpon 3</pre>
        </code>
        <hr />
        <code id="linebridge5" className={Style.code} onClick={() =>
          copyToClip(document.getElementById('linebridge5').innerText)
        }>
          <pre>bridge-profile bind add gpon2-default device intelbras-110 gpon 2</pre>
          <pre>bridge-profile bind add gpon2-default device intelbras-110b gpon 2</pre>
          <pre>bridge-profile bind add gpon2-default device intelbras-110g gpon 2</pre>
          <pre>bridge-profile bind add gpon2-default device intelbras-default gpon 2</pre>
          <pre>bridge-profile bind add gpon2-default-router device intelbras-r1 gpon 2</pre>
          <pre>bridge-profile bind add gpon2-default-router device intelbras-121w gpon 2</pre>
          <pre>bridge-profile bind add gpon2-default-router device intelbras-142ng gpon 2</pre>
          <pre>bridge-profile bind add gpon2-default-router device intelbras-142nw gpon 2</pre>
          <pre>bridge-profile bind add gpon2-default-router device intelbras-1420g gpon 2</pre>
          <pre>bridge-profile bind add gpon2-default-router device intelbras-121ac gpon 2</pre>
          <pre>bridge-profile bind add gpon2-default-router device intelbras-1200r gpon 2</pre>
          <pre>bridge-profile bind add gpon2-default-router device intelbras-120ac gpon 2</pre>
        </code>
        <hr />
        <code id="linebridge6" className={Style.code} onClick={() =>
          copyToClip(document.getElementById('linebridge6').innerText)
        }>
          <pre>bridge-profile bind add gpon3-default device intelbras-110 gpon 3</pre>
          <pre>bridge-profile bind add gpon3-default device intelbras-110b gpon 3</pre>
          <pre>bridge-profile bind add gpon3-default device intelbras-110g gpon 3</pre>
          <pre>bridge-profile bind add gpon3-default device intelbras-default gpon 3</pre>
          <pre>bridge-profile bind add gpon3-default-router device intelbras-r1 gpon 3</pre>
          <pre>bridge-profile bind add gpon3-default-router device intelbras-121w gpon 3</pre>
          <pre>bridge-profile bind add gpon3-default-router device intelbras-142ng gpon 3</pre>
          <pre>bridge-profile bind add gpon3-default-router device intelbras-142nw gpon 3</pre>
          <pre>bridge-profile bind add gpon3-default-router device intelbras-1420g gpon 3</pre>
          <pre>bridge-profile bind add gpon3-default-router device intelbras-121ac gpon 3</pre>
          <pre>bridge-profile bind add gpon3-default-router device intelbras-1200r gpon 3</pre>
          <pre>bridge-profile bind add gpon3-default-router device intelbras-120ac gpon 3</pre>
        </code>
        <hr />
        <code id="linebridge7" className={Style.code} onClick={() =>
          copyToClip(document.getElementById('linebridge7').innerText)
        }>
          <pre>bridge-profile bind add gpon4-default device intelbras-110 gpon 3</pre>
          <pre>bridge-profile bind add gpon4-default device intelbras-110b gpon 3</pre>
          <pre>bridge-profile bind add gpon4-default device intelbras-110g gpon 3</pre>
          <pre>bridge-profile bind add gpon4-default device intelbras-default gpon 3</pre>
          <pre>bridge-profile bind add gpon4-default-router device intelbras-r1 gpon 3</pre>
          <pre>bridge-profile bind add gpon4-default-router device intelbras-121w gpon 3</pre>
          <pre>bridge-profile bind add gpon4-default-router device intelbras-142ng gpon 3</pre>
          <pre>bridge-profile bind add gpon4-default-router device intelbras-142nw gpon 3</pre>
          <pre>bridge-profile bind add gpon4-default-router device intelbras-1420g gpon 3</pre>
          <pre>bridge-profile bind add gpon4-default-router device intelbras-121ac gpon 3</pre>
          <pre>bridge-profile bind add gpon4-default-router device intelbras-1200r gpon 3</pre>
          <pre>bridge-profile bind add gpon4-default-router device intelbras-120ac gpon 3</pre>
        </code>
        <hr />
        <code id="linebridge8" className={Style.code} onClick={() =>
          copyToClip(document.getElementById('linebridge8').innerText)
        }>
          <pre>bridge-profile bind add gpon5-default device intelbras-110 gpon 3</pre>
          <pre>bridge-profile bind add gpon5-default device intelbras-110b gpon 3</pre>
          <pre>bridge-profile bind add gpon5-default device intelbras-110g gpon 3</pre>
          <pre>bridge-profile bind add gpon5-default device intelbras-default gpon 3</pre>
          <pre>bridge-profile bind add gpon5-default-router device intelbras-r1 gpon 3</pre>
          <pre>bridge-profile bind add gpon5-default-router device intelbras-121w gpon 3</pre>
          <pre>bridge-profile bind add gpon5-default-router device intelbras-142ng gpon 3</pre>
          <pre>bridge-profile bind add gpon5-default-router device intelbras-142nw gpon 3</pre>
          <pre>bridge-profile bind add gpon5-default-router device intelbras-1420g gpon 3</pre>
          <pre>bridge-profile bind add gpon5-default-router device intelbras-121ac gpon 3</pre>
          <pre>bridge-profile bind add gpon5-default-router device intelbras-1200r gpon 3</pre>
          <pre>bridge-profile bind add gpon5-default-router device intelbras-120ac gpon 3</pre>
        </code>

        <>
          <hr />
          <code id="linebridge9" className={Style.code} onClick={() =>
            copyToClip(document.getElementById('linebridge9').innerText)
          }>
            <pre>bridge-profile bind add gpon6-default device intelbras-110 gpon 3</pre>
            <pre>bridge-profile bind add gpon6-default device intelbras-110b gpon 3</pre>
            <pre>bridge-profile bind add gpon6-default device intelbras-110g gpon 3</pre>
            <pre>bridge-profile bind add gpon6-default device intelbras-default gpon 3</pre>
            <pre>bridge-profile bind add gpon6-default-router device intelbras-r1 gpon 3</pre>
            <pre>bridge-profile bind add gpon6-default-router device intelbras-121w gpon 3</pre>
            <pre>bridge-profile bind add gpon6-default-router device intelbras-142ng gpon 3</pre>
            <pre>bridge-profile bind add gpon6-default-router device intelbras-142nw gpon 3</pre>
            <pre>bridge-profile bind add gpon6-default-router device intelbras-1420g gpon 3</pre>
            <pre>bridge-profile bind add gpon6-default-router device intelbras-121ac gpon 3</pre>
            <pre>bridge-profile bind add gpon6-default-router device intelbras-1200r gpon 3</pre>
            <pre>bridge-profile bind add gpon6-default-router device intelbras-120ac gpon 3</pre>
          </code>
          <hr />
          <code id="linebridge10" className={Style.code} onClick={() =>
            copyToClip(document.getElementById('linebridge10').innerText)
          }>
            <pre>bridge-profile bind add gpon7-default device intelbras-110 gpon 3</pre>
            <pre>bridge-profile bind add gpon7-default device intelbras-110b gpon 3</pre>
            <pre>bridge-profile bind add gpon7-default device intelbras-110g gpon 3</pre>
            <pre>bridge-profile bind add gpon7-default device intelbras-default gpon 3</pre>
            <pre>bridge-profile bind add gpon7-default-router device intelbras-r1 gpon 3</pre>
            <pre>bridge-profile bind add gpon7-default-router device intelbras-121w gpon 3</pre>
            <pre>bridge-profile bind add gpon7-default-router device intelbras-142ng gpon 3</pre>
            <pre>bridge-profile bind add gpon7-default-router device intelbras-142nw gpon 3</pre>
            <pre>bridge-profile bind add gpon7-default-router device intelbras-1420g gpon 3</pre>
            <pre>bridge-profile bind add gpon7-default-router device intelbras-121ac gpon 3</pre>
            <pre>bridge-profile bind add gpon7-default-router device intelbras-1200r gpon 3</pre>
            <pre>bridge-profile bind add gpon7-default-router device intelbras-120ac gpon 3</pre>
          </code>
          <hr />
          <code id="linebridge11" className={Style.code} onClick={() =>
            copyToClip(document.getElementById('linebridge11').innerText)
          }>
            <pre>bridge-profile bind add gpon8-default device intelbras-110 gpon 3</pre>
            <pre>bridge-profile bind add gpon8-default device intelbras-110b gpon 3</pre>
            <pre>bridge-profile bind add gpon8-default device intelbras-110g gpon 3</pre>
            <pre>bridge-profile bind add gpon8-default device intelbras-default gpon 3</pre>
            <pre>bridge-profile bind add gpon8-default-router device intelbras-r1 gpon 3</pre>
            <pre>bridge-profile bind add gpon8-default-router device intelbras-121w gpon 3</pre>
            <pre>bridge-profile bind add gpon8-default-router device intelbras-142ng gpon 3</pre>
            <pre>bridge-profile bind add gpon8-default-router device intelbras-142nw gpon 3</pre>
            <pre>bridge-profile bind add gpon8-default-router device intelbras-1420g gpon 3</pre>
            <pre>bridge-profile bind add gpon8-default-router device intelbras-121ac gpon 3</pre>
            <pre>bridge-profile bind add gpon8-default-router device intelbras-1200r gpon 3</pre>
            <pre>bridge-profile bind add gpon8-default-router device intelbras-120ac gpon 3</pre>
          </code>

        </>

      </div>
    </div >
  )
}