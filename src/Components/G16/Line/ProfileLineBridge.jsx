import React from 'react'
import Style from './ProfileLine.module.css'
import ValueContext from "../../../JS/ValueContext";
import copyToClip from '../../../JS/BtnCopy';

export default function ProfileLineBridge() {
  const { values, g16 } = React.useContext(ValueContext);

  return (
    <div className={Style.container}>
      <div className={Style.content}>

        <code id="linebridge1" className={Style.code} onClick={() =>
          copyToClip(document.getElementById('linebridge1').innerText)
        }>
          <pre>deploy profile line</pre>
          <pre>aim {values.aimbridge1} name {values.devicebridge}_{values.vlanpon1}</pre>
          <pre>device type {values.devicebridge}</pre>
          <pre>tcont 1 profile dba 1</pre>
          <pre>gemport 1 tcont 1 vlan-profile {values.aimvlanpon1}</pre>
          <pre>mapping mode port-vlan</pre>
          <pre>mapping 1 port eth 1 vlan {values.vlanpon1} gemport 1</pre>
          <pre>flow 1 port eth 1 default vlan {values.vlanpon1}</pre>
          <pre>active</pre>
        </code>
        <hr />
        <code id="linebridge2" className={Style.code} onClick={() =>
          copyToClip(document.getElementById('linebridge2').innerText)
        }>
          <pre>aim {values.aimbridge2} name {values.devicebridge}_{values.vlanpon2}</pre>
          <pre>device type {values.devicebridge}</pre>
          <pre>tcont 1 profile dba 1</pre>
          <pre>gemport 1 tcont 1 vlan-profile {values.aimvlanpon2}</pre>
          <pre>mapping mode port-vlan</pre>
          <pre>mapping 1 port eth 1 vlan {values.vlanpon2} gemport 1</pre>
          <pre>flow 1 port eth 1 default vlan {values.vlanpon2}</pre>
          <pre>active</pre>
        </code>
        <hr />
        <code id="linebridge3" className={Style.code} onClick={() =>
          copyToClip(document.getElementById('linebridge3').innerText)
        }>
          <pre>aim {values.aimbridge3} name {values.devicebridge}_{values.vlanpon3}</pre>
          <pre>device type {values.devicebridge}</pre>
          <pre>tcont 1 profile dba 1</pre>
          <pre>gemport 1 tcont 1 vlan-profile {values.aimvlanpon3}</pre>
          <pre>mapping mode port-vlan</pre>
          <pre>mapping 1 port eth 1 vlan {values.vlanpon3} gemport 1</pre>
          <pre>flow 1 port eth 1 default vlan {values.vlanpon3}</pre>
          <pre>active</pre>
        </code>
        <hr />
        <code id="linebridge4" className={Style.code} onClick={() =>
          copyToClip(document.getElementById('linebridge4').innerText)
        }>
          <pre>aim {values.aimbridge4} name {values.devicebridge}_{values.vlanpon4}</pre>
          <pre>device type {values.devicebridge}</pre>
          <pre>tcont 1 profile dba 1</pre>
          <pre>gemport 1 tcont 1 vlan-profile {values.aimvlanpon4}</pre>
          <pre>mapping mode port-vlan</pre>
          <pre>mapping 1 port eth 1 vlan {values.vlanpon4} gemport 1</pre>
          <pre>flow 1 port eth 1 default vlan {values.vlanpon4}</pre>
          <pre>active</pre>
        </code>
        <hr />
        <code id="linebridge5" className={Style.code} onClick={() =>
          copyToClip(document.getElementById('linebridge5').innerText)
        }>
          <pre>aim {values.aimbridge5} name {values.devicebridge}_{values.vlanpon5}</pre>
          <pre>device type {values.devicebridge}</pre>
          <pre>tcont 1 profile dba 1</pre>
          <pre>gemport 1 tcont 1 vlan-profile {values.aimvlanpon5}</pre>
          <pre>mapping mode port-vlan</pre>
          <pre>mapping 1 port eth 1 vlan {values.vlanpon5} gemport 1</pre>
          <pre>flow 1 port eth 1 default vlan {values.vlanpon5}</pre>
          <pre>active</pre>
        </code>
        <hr />
        <code id="linebridge6" className={Style.code} onClick={() =>
          copyToClip(document.getElementById('linebridge6').innerText)
        }>
          <pre>aim {values.aimbridge6} name {values.devicebridge}_{values.vlanpon6}</pre>
          <pre>device type {values.devicebridge}</pre>
          <pre>tcont 1 profile dba 1</pre>
          <pre>gemport 1 tcont 1 vlan-profile {values.aimvlanpon6}</pre>
          <pre>mapping mode port-vlan</pre>
          <pre>mapping 1 port eth 1 vlan {values.vlanpon6} gemport 1</pre>
          <pre>flow 1 port eth 1 default vlan {values.vlanpon6}</pre>
          <pre>active</pre>
        </code>
        <hr />
        <code id="linebridge7" className={Style.code} onClick={() =>
          copyToClip(document.getElementById('linebridge7').innerText)
        }>
          <pre>aim {values.aimbridge7} name {values.devicebridge}_{values.vlanpon7}</pre>
          <pre>device type {values.devicebridge}</pre>
          <pre>tcont 1 profile dba 1</pre>
          <pre>gemport 1 tcont 1 vlan-profile {values.aimvlanpon7}</pre>
          <pre>mapping mode port-vlan</pre>
          <pre>mapping 1 port eth 1 vlan {values.vlanpon7} gemport 1</pre>
          <pre>flow 1 port eth 1 default vlan {values.vlanpon7}</pre>
          <pre>active</pre>
        </code>
        <hr />
        <code id="linebridge8" className={Style.code} onClick={() =>
          copyToClip(document.getElementById('linebridge8').innerText)
        }>
          <pre>aim {values.aimbridge8} name {values.devicebridge}_{values.vlanpon8}</pre>
          <pre>device type {values.devicebridge}</pre>
          <pre>tcont 1 profile dba 1</pre>
          <pre>gemport 1 tcont 1 vlan-profile {values.aimvlanpon8}</pre>
          <pre>mapping mode port-vlan</pre>
          <pre>mapping 1 port eth 1 vlan {values.vlanpon8} gemport 1</pre>
          <pre>flow 1 port eth 1 default vlan {values.vlanpon8}</pre>
          <pre>active</pre>
        </code>
        {g16 && (
          <>
            <hr />
            <code id="linebridge9" className={Style.code} onClick={() =>
              copyToClip(document.getElementById('linebridge9').innerText)
            }>
              <pre>aim {values.aimbridge9} name {values.devicebridge}_{values.vlanpon9}</pre>
              <pre>device type {values.devicebridge}</pre>
              <pre>tcont 1 profile dba 1</pre>
              <pre>gemport 1 tcont 1 vlan-profile {values.aimvlanpon9}</pre>
              <pre>mapping mode port-vlan</pre>
              <pre>mapping 1 port eth 1 vlan {values.vlanpon9} gemport 1</pre>
              <pre>flow 1 port eth 1 default vlan {values.vlanpon9}</pre>
              <pre>active</pre>
            </code>
            <hr />
            <code id="linebridge10" className={Style.code} onClick={() =>
              copyToClip(document.getElementById('linebridge10').innerText)
            }>
              <pre>aim {values.aimbridge10} name {values.devicebridge}_{values.vlanpon10}</pre>
              <pre>device type {values.devicebridge}</pre>
              <pre>tcont 1 profile dba 1</pre>
              <pre>gemport 1 tcont 1 vlan-profile {values.aimvlanpon10}</pre>
              <pre>mapping mode port-vlan</pre>
              <pre>mapping 1 port eth 1 vlan {values.vlanpon10} gemport 1</pre>
              <pre>flow 1 port eth 1 default vlan {values.vlanpon10}</pre>
              <pre>active</pre>
            </code>
            <hr />
            <code id="linebridge11" className={Style.code} onClick={() =>
              copyToClip(document.getElementById('linebridge11').innerText)
            }>
              <pre>aim {values.aimbridge11} name {values.devicebridge}_{values.vlanpon11}</pre>
              <pre>device type {values.devicebridge}</pre>
              <pre>tcont 1 profile dba 1</pre>
              <pre>gemport 1 tcont 1 vlan-profile {values.aimvlanpon11}</pre>
              <pre>mapping mode port-vlan</pre>
              <pre>mapping 1 port eth 1 vlan {values.vlanpon11} gemport 1</pre>
              <pre>flow 1 port eth 1 default vlan {values.vlanpon11}</pre>
              <pre>active</pre>
            </code>
            <hr />
            <code id="linebridge12" className={Style.code} onClick={() =>
              copyToClip(document.getElementById('linebridge12').innerText)
            }>
              <pre>aim {values.aimbridge12} name {values.devicebridge}_{values.vlanpon12}</pre>
              <pre>device type {values.devicebridge}</pre>
              <pre>tcont 1 profile dba 1</pre>
              <pre>gemport 1 tcont 1 vlan-profile {values.aimvlanpon12}</pre>
              <pre>mapping mode port-vlan</pre>
              <pre>mapping 1 port eth 1 vlan {values.vlanpon12} gemport 1</pre>
              <pre>flow 1 port eth 1 default vlan {values.vlanpon12}</pre>
              <pre>active</pre>
            </code>
            <hr />
            <code id="linebridge13" className={Style.code} onClick={() =>
              copyToClip(document.getElementById('linebridge13').innerText)
            }>
              <pre>aim {values.aimbridge13} name {values.devicebridge}_{values.vlanpon13}</pre>
              <pre>device type {values.devicebridge}</pre>
              <pre>tcont 1 profile dba 1</pre>
              <pre>gemport 1 tcont 1 vlan-profile {values.aimvlanpon13}</pre>
              <pre>mapping mode port-vlan</pre>
              <pre>mapping 1 port eth 1 vlan {values.vlanpon13} gemport 1</pre>
              <pre>flow 1 port eth 1 default vlan {values.vlanpon13}</pre>
              <pre>active</pre>
            </code>
            <hr />
            <code id="linebridge14" className={Style.code} onClick={() =>
              copyToClip(document.getElementById('linebridge14').innerText)
            }>
              <pre>aim {values.aimbridge14} name {values.devicebridge}_{values.vlanpon14}</pre>
              <pre>device type {values.devicebridge}</pre>
              <pre>tcont 1 profile dba 1</pre>
              <pre>gemport 1 tcont 1 vlan-profile {values.aimvlanpon14}</pre>
              <pre>mapping mode port-vlan</pre>
              <pre>mapping 1 port eth 1 vlan {values.vlanpon14} gemport 1</pre>
              <pre>flow 1 port eth 1 default vlan {values.vlanpon14}</pre>
              <pre>active</pre>
            </code>
            <hr />
            <code id="linebridge15" className={Style.code} onClick={() =>
              copyToClip(document.getElementById('linebridge15').innerText)
            }>
              <pre>aim {values.aimbridge15} name {values.devicebridge}_{values.vlanpon15}</pre>
              <pre>device type {values.devicebridge}</pre>
              <pre>tcont 1 profile dba 1</pre>
              <pre>gemport 1 tcont 1 vlan-profile {values.aimvlanpon15}</pre>
              <pre>mapping mode port-vlan</pre>
              <pre>mapping 1 port eth 1 vlan {values.vlanpon15} gemport 1</pre>
              <pre>flow 1 port eth 1 default vlan {values.vlanpon15}</pre>
              <pre>active</pre>
            </code>
            <hr />
            <code id="linebridge16" className={Style.code} onClick={() =>
              copyToClip(document.getElementById('linebridge16').innerText)
            }>
              <pre>aim {values.aimbridge16} name {values.devicebridge}_{values.vlanpon16}</pre>
              <pre>device type {values.devicebridge}</pre>
              <pre>tcont 1 profile dba 1</pre>
              <pre>gemport 1 tcont 1 vlan-profile {values.aimvlanpon16}</pre>
              <pre>mapping mode port-vlan</pre>
              <pre>mapping 1 port eth 1 vlan {values.vlanpon16} gemport 1</pre>
              <pre>flow 1 port eth 1 default vlan {values.vlanpon16}</pre>
              <pre>active</pre>
            </code>
          </>
        )}
      </div>
    </div >
  )
}