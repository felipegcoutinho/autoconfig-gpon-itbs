import React from "react";
import Style from "./ProfileLine.module.css";
import {ValueContext} from "../../../JS/Context";
import copyToClip from "../../../JS/BtnCopy";

export default function ProfileLineRouter() {
  const {values, g16} = React.useContext(ValueContext);

  return (
    <div className={Style.containerRouter}>
      <div className={Style.content}>
        <code
          id="linerouter1"
          className={Style.code}
          onClick={() => copyToClip(document.getElementById("linerouter1").innerText)}>
          <pre>deploy profile line</pre>
          <pre>
            aim {values.aimrouter1} name {values.devicerouter}_{values.vlanpon1}
          </pre>
          <pre>device type {values.devicerouter}</pre>
          <pre>tcont 1 profile dba 1</pre>
          <pre>gemport 1 tcont 1 vlan-profile {values.aimvlanpon1}</pre>
          <pre>mapping mode port-vlan</pre>
          <pre>mapping 1 port veip vlan {values.vlanpon1} gemport 1</pre>
          <pre>flow 1 port veip vlan {values.vlanpon1} keep</pre>
          <pre>active</pre>
        </code>
        <hr />
        <code
          id="linerouter2"
          className={Style.code}
          onClick={() => copyToClip(document.getElementById("linerouter2").innerText)}>
          <pre>
            aim {values.aimrouter2} name {values.devicerouter}_{values.vlanpon2}
          </pre>
          <pre>device type {values.devicerouter}</pre>
          <pre>tcont 1 profile dba 1</pre>
          <pre>gemport 1 tcont 1 vlan-profile {values.aimvlanpon2}</pre>
          <pre>mapping mode port-vlan</pre>
          <pre>mapping 1 port veip vlan {values.vlanpon2} gemport 1</pre>
          <pre>flow 1 port veip vlan {values.vlanpon2} keep</pre>
          <pre>active</pre>
        </code>
        <hr />
        <code
          id="linerouter3"
          className={Style.code}
          onClick={() => copyToClip(document.getElementById("linerouter3").innerText)}>
          <pre>
            aim {values.aimrouter3} name {values.devicerouter}_{values.vlanpon3}
          </pre>
          <pre>device type {values.devicerouter}</pre>
          <pre>tcont 1 profile dba 1</pre>
          <pre>gemport 1 tcont 1 vlan-profile {values.aimvlanpon3}</pre>
          <pre>mapping mode port-vlan</pre>
          <pre>mapping 1 port veip vlan {values.vlanpon3} gemport 1</pre>
          <pre>flow 1 port veip vlan {values.vlanpon3} keep</pre>
          <pre>active</pre>
        </code>
        <hr />
        <code
          id="linerouter4"
          className={Style.code}
          onClick={() => copyToClip(document.getElementById("linerouter4").innerText)}>
          <pre>
            aim {values.aimrouter4} name {values.devicerouter}_{values.vlanpon4}
          </pre>
          <pre>device type {values.devicerouter}</pre>
          <pre>tcont 1 profile dba 1</pre>
          <pre>gemport 1 tcont 1 vlan-profile {values.aimvlanpon4}</pre>
          <pre>mapping mode port-vlan</pre>
          <pre>mapping 1 port veip vlan {values.vlanpon4} gemport 1</pre>
          <pre>flow 1 port veip vlan {values.vlanpon4} keep</pre>
          <pre>active</pre>
        </code>
        <hr />
        <code
          id="linerouter5"
          className={Style.code}
          onClick={() => copyToClip(document.getElementById("linerouter5").innerText)}>
          <pre>
            aim {values.aimrouter5} name {values.devicerouter}_{values.vlanpon5}
          </pre>
          <pre>device type {values.devicerouter}</pre>
          <pre>tcont 1 profile dba 1</pre>
          <pre>gemport 1 tcont 1 vlan-profile {values.aimvlanpon5}</pre>
          <pre>mapping mode port-vlan</pre>
          <pre>mapping 1 port veip vlan {values.vlanpon5} gemport 1</pre>
          <pre>flow 1 port veip vlan {values.vlanpon5} keep</pre>
          <pre>active</pre>
        </code>
        <hr />
        <code
          id="linerouter6"
          className={Style.code}
          onClick={() => copyToClip(document.getElementById("linerouter6").innerText)}>
          <pre>
            aim {values.aimrouter6} name {values.devicerouter}_{values.vlanpon6}
          </pre>
          <pre>device type {values.devicerouter}</pre>
          <pre>tcont 1 profile dba 1</pre>
          <pre>gemport 1 tcont 1 vlan-profile {values.aimvlanpon6}</pre>
          <pre>mapping mode port-vlan</pre>
          <pre>mapping 1 port veip vlan {values.vlanpon6} gemport 1</pre>
          <pre>flow 1 port veip vlan {values.vlanpon6} keep</pre>
          <pre>active</pre>
        </code>
        <hr />
        <code
          id="linerouter7"
          className={Style.code}
          onClick={() => copyToClip(document.getElementById("linerouter7").innerText)}>
          <pre>
            aim {values.aimrouter7} name {values.devicerouter}_{values.vlanpon7}
          </pre>
          <pre>device type {values.devicerouter}</pre>
          <pre>tcont 1 profile dba 1</pre>
          <pre>gemport 1 tcont 1 vlan-profile {values.aimvlanpon7}</pre>
          <pre>mapping mode port-vlan</pre>
          <pre>mapping 1 port veip vlan {values.vlanpon7} gemport 1</pre>
          <pre>flow 1 port veip vlan {values.vlanpon7} keep</pre>
          <pre>active</pre>
        </code>
        <hr />
        <code
          id="linerouter8"
          className={Style.code}
          onClick={() => copyToClip(document.getElementById("linerouter8").innerText)}>
          <pre>
            aim {values.aimrouter8} name {values.devicerouter}_{values.vlanpon8}
          </pre>
          <pre>device type {values.devicerouter}</pre>
          <pre>tcont 1 profile dba 1</pre>
          <pre>gemport 1 tcont 1 vlan-profile {values.aimvlanpon8}</pre>
          <pre>mapping mode port-vlan</pre>
          <pre>mapping 1 port veip vlan {values.vlanpon8} gemport 1</pre>
          <pre>flow 1 port veip vlan {values.vlanpon8} keep</pre>
          <pre>active</pre>
        </code>
        {g16 && (
          <>
            <hr />
            <code
              id="linerouter9"
              className={Style.code}
              onClick={() => copyToClip(document.getElementById("linerouter9").innerText)}>
              <pre>
                aim {values.aimrouter9} name {values.devicerouter}_{values.vlanpon9}
              </pre>
              <pre>device type {values.devicerouter}</pre>
              <pre>tcont 1 profile dba 1</pre>
              <pre>gemport 1 tcont 1 vlan-profile {values.aimvlanpon9}</pre>
              <pre>mapping mode port-vlan</pre>
              <pre>mapping 1 port veip vlan {values.vlanpon9} gemport 1</pre>
              <pre>flow 1 port veip vlan {values.vlanpon9} keep</pre>
              <pre>active</pre>
            </code>
            <hr />
            <code
              id="linerouter10"
              className={Style.code}
              onClick={() => copyToClip(document.getElementById("linerouter10").innerText)}>
              <pre>
                aim {values.aimrouter10} name {values.devicerouter}_{values.vlanpon10}
              </pre>
              <pre>device type {values.devicerouter}</pre>
              <pre>tcont 1 profile dba 1</pre>
              <pre>gemport 1 tcont 1 vlan-profile {values.aimvlanpon10}</pre>
              <pre>mapping mode port-vlan</pre>
              <pre>mapping 1 port veip vlan {values.vlanpon10} gemport 1</pre>
              <pre>flow 1 port veip vlan {values.vlanpon10} keep</pre>
              <pre>active</pre>
            </code>
            <hr />
            <code
              id="linerouter11"
              className={Style.code}
              onClick={() => copyToClip(document.getElementById("linerouter11").innerText)}>
              <pre>
                aim {values.aimrouter11} name {values.devicerouter}_{values.vlanpon11}
              </pre>
              <pre>device type {values.devicerouter}</pre>
              <pre>tcont 1 profile dba 1</pre>
              <pre>gemport 1 tcont 1 vlan-profile {values.aimvlanpon11}</pre>
              <pre>mapping mode port-vlan</pre>
              <pre>mapping 1 port veip vlan {values.vlanpon11} gemport 1</pre>
              <pre>flow 1 port veip vlan {values.vlanpon11} keep</pre>
              <pre>active</pre>
            </code>
            <hr />
            <code
              id="linerouter12"
              className={Style.code}
              onClick={() => copyToClip(document.getElementById("linerouter12").innerText)}>
              <pre>
                aim {values.aimrouter12} name {values.devicerouter}_{values.vlanpon12}
              </pre>
              <pre>device type {values.devicerouter}</pre>
              <pre>tcont 1 profile dba 1</pre>
              <pre>gemport 1 tcont 1 vlan-profile {values.aimvlanpon12}</pre>
              <pre>mapping mode port-vlan</pre>
              <pre>mapping 1 port veip vlan {values.vlanpon12} gemport 1</pre>
              <pre>flow 1 port veip vlan {values.vlanpon12} keep</pre>
              <pre>active</pre>
            </code>
            <hr />
            <code
              id="linerouter13"
              className={Style.code}
              onClick={() => copyToClip(document.getElementById("linerouter13").innerText)}>
              <pre>
                aim {values.aimrouter13} name {values.devicerouter}_{values.vlanpon13}
              </pre>
              <pre>device type {values.devicerouter}</pre>
              <pre>tcont 1 profile dba 1</pre>
              <pre>gemport 1 tcont 1 vlan-profile {values.aimvlanpon13}</pre>
              <pre>mapping mode port-vlan</pre>
              <pre>mapping 1 port veip vlan {values.vlanpon13} gemport 1</pre>
              <pre>flow 1 port veip vlan {values.vlanpon13} keep</pre>
              <pre>active</pre>
            </code>
            <hr />
            <code
              id="linerouter14"
              className={Style.code}
              onClick={() => copyToClip(document.getElementById("linerouter14").innerText)}>
              <pre>
                aim {values.aimrouter14} name {values.devicerouter}_{values.vlanpon14}
              </pre>
              <pre>device type {values.devicerouter}</pre>
              <pre>tcont 1 profile dba 1</pre>
              <pre>gemport 1 tcont 1 vlan-profile {values.aimvlanpon14}</pre>
              <pre>mapping mode port-vlan</pre>
              <pre>mapping 1 port veip vlan {values.vlanpon14} gemport 1</pre>
              <pre>flow 1 port veip vlan {values.vlanpon14} keep</pre>
              <pre>active</pre>
            </code>
            <hr />
            <code
              id="linerouter15"
              className={Style.code}
              onClick={() => copyToClip(document.getElementById("linerouter15").innerText)}>
              <pre>
                aim {values.aimrouter15} name {values.devicerouter}_{values.vlanpon15}
              </pre>
              <pre>device type {values.devicerouter}</pre>
              <pre>tcont 1 profile dba 1</pre>
              <pre>gemport 1 tcont 1 vlan-profile {values.aimvlanpon15}</pre>
              <pre>mapping mode port-vlan</pre>
              <pre>mapping 1 port veip vlan {values.vlanpon15} gemport 1</pre>
              <pre>flow 1 port veip vlan {values.vlanpon15} keep</pre>
              <pre>active</pre>
            </code>
            <hr />
            <code
              id="linerouter16"
              className={Style.code}
              onClick={() => copyToClip(document.getElementById("linerouter16").innerText)}>
              <pre>
                aim {values.aimrouter16} name {values.devicerouter}_{values.vlanpon16}
              </pre>
              <pre>device type {values.devicerouter}</pre>
              <pre>tcont 1 profile dba 1</pre>
              <pre>gemport 1 tcont 1 vlan-profile {values.aimvlanpon16}</pre>
              <pre>mapping mode port-vlan</pre>
              <pre>mapping 1 port veip vlan {values.vlanpon16} gemport 1</pre>
              <pre>flow 1 port veip vlan {values.vlanpon16} keep</pre>
              <pre>active</pre>
            </code>
          </>
        )}
      </div>
    </div>
  );
}
