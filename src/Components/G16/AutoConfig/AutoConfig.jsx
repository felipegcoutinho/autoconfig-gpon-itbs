import React from "react";
import Style from "./AutoConfig.module.css";
import {ValueContext} from "../../../JS/Context";
import copyToClip from "../../../JS/BtnCopy";
import {DeviceNameBridge, DeviceNameRouter} from "../../../JS/DeviceNames";

export default function AutoConfig() {
  const {values, g16} = React.useContext(ValueContext);

  return (
    <div id="autoconfig" className={Style.container}>
      <h2> Auto Config</h2>
      <div className={Style.content}>
        <code
          id="auto"
          className={Style.code}
          onClick={() => copyToClip(document.getElementById("auto").innerText)}>
          <pre>ont auto-config</pre>
          <pre>ont-find interface gpon all</pre>
          <pre>ont-find list-age time 60 interface gpon all</pre>
        </code>
        <hr />
        <p className={Style.title}>Bridge</p>
        <code
          id="auto1"
          className={Style.code}
          onClick={() => copyToClip(document.getElementById("auto1").innerText)}>
          <pre>
            ont auto-config name {DeviceNameBridge()}-VLAN-{values.vlanpon1} device-type{" "}
            {values.devicebridge} line {values.aimbridge1} interface gpon 0/1
          </pre>
          <pre>
            ont auto-config name {DeviceNameBridge()}-VLAN-{values.vlanpon2} device-type{" "}
            {values.devicebridge} line {values.aimbridge2} interface gpon 0/2
          </pre>
          <pre>
            ont auto-config name {DeviceNameBridge()}-VLAN-{values.vlanpon3} device-type{" "}
            {values.devicebridge} line {values.aimbridge3} interface gpon 0/3
          </pre>
          <pre>
            ont auto-config name {DeviceNameBridge()}-VLAN-{values.vlanpon4} device-type{" "}
            {values.devicebridge} line {values.aimbridge4} interface gpon 0/4
          </pre>
          <pre>
            ont auto-config name {DeviceNameBridge()}-VLAN-{values.vlanpon5} device-type{" "}
            {values.devicebridge} line {values.aimbridge5} interface gpon 0/5
          </pre>
          <pre>
            ont auto-config name {DeviceNameBridge()}-VLAN-{values.vlanpon6} device-type{" "}
            {values.devicebridge} line {values.aimbridge6} interface gpon 0/6
          </pre>
          <pre>
            ont auto-config name {DeviceNameBridge()}-VLAN-{values.vlanpon7} device-type{" "}
            {values.devicebridge} line {values.aimbridge7} interface gpon 0/7
          </pre>
          <pre>
            ont auto-config name {DeviceNameBridge()}-VLAN-{values.vlanpon8} device-type{" "}
            {values.devicebridge} line {values.aimbridge8} interface gpon 0/8
          </pre>
          {g16 && (
            <>
              <pre>
                ont auto-config name {DeviceNameBridge()}-VLAN-{values.vlanpon9} device-type{" "}
                {values.devicebridge} line {values.aimbridge9} interface gpon 0/9
              </pre>
              <pre>
                ont auto-config name {DeviceNameBridge()}-VLAN-{values.vlanpon10} device-type{" "}
                {values.devicebridge} line {values.aimbridge10} interface gpon 0/10
              </pre>
              <pre>
                ont auto-config name {DeviceNameBridge()}-VLAN-{values.vlanpon11} device-type{" "}
                {values.devicebridge} line {values.aimbridge11} interface gpon 0/11
              </pre>
              <pre>
                ont auto-config name {DeviceNameBridge()}-VLAN-{values.vlanpon12} device-type{" "}
                {values.devicebridge} line {values.aimbridge12} interface gpon 0/12
              </pre>
              <pre>
                ont auto-config name {DeviceNameBridge()}-VLAN-{values.vlanpon13} device-type{" "}
                {values.devicebridge} line {values.aimbridge13} interface gpon 0/13
              </pre>
              <pre>
                ont auto-config name {DeviceNameBridge()}-VLAN-{values.vlanpon14} device-type{" "}
                {values.devicebridge} line {values.aimbridge14} interface gpon 0/14
              </pre>
              <pre>
                ont auto-config name {DeviceNameBridge()}-VLAN-{values.vlanpon15} device-type{" "}
                {values.devicebridge} line {values.aimbridge15} interface gpon 0/15
              </pre>
              <pre>
                ont auto-config name {DeviceNameBridge()}-VLAN-{values.vlanpon16} device-type{" "}
                {values.devicebridge} line {values.aimbridge16} interface gpon 0/16
              </pre>
            </>
          )}
        </code>
        <p className={Style.subTitle}>Terceiros</p>
        <code
          id="auto2"
          className={Style.code}
          onClick={() => copyToClip(document.getElementById("auto2").innerText)}>
          <pre>
            ont auto-config name TERCEIROS-1 all-ont line {values.aimbridge1} interface gpon 0/1
          </pre>
          <pre>
            ont auto-config name TERCEIROS-2 all-ont line {values.aimbridge2} interface gpon 0/2
          </pre>
          <pre>
            ont auto-config name TERCEIROS-3 all-ont line {values.aimbridge3} interface gpon 0/3
          </pre>
          <pre>
            ont auto-config name TERCEIROS-4 all-ont line {values.aimbridge4} interface gpon 0/4
          </pre>
          <pre>
            ont auto-config name TERCEIROS-5 all-ont line {values.aimbridge5} interface gpon 0/5
          </pre>
          <pre>
            ont auto-config name TERCEIROS-6 all-ont line {values.aimbridge6} interface gpon 0/6
          </pre>
          <pre>
            ont auto-config name TERCEIROS-7 all-ont line {values.aimbridge7} interface gpon 0/7
          </pre>
          <pre>
            ont auto-config name TERCEIROS-8 all-ont line {values.aimbridge8} interface gpon 0/8
          </pre>
          {g16 && (
            <>
              <pre>
                ont auto-config name TERCEIROS-9 all-ont line {values.aimbridge9} interface gpon 0/9
              </pre>
              <pre>
                ont auto-config name TERCEIROS-10 all-ont line {values.aimbridge10} interface gpon
                0/10
              </pre>
              <pre>
                ont auto-config name TERCEIROS-11 all-ont line {values.aimbridge11} interface gpon
                0/11
              </pre>
              <pre>
                ont auto-config name TERCEIROS-12 all-ont line {values.aimbridge12} interface gpon
                0/12
              </pre>
              <pre>
                ont auto-config name TERCEIROS-13 all-ont line {values.aimbridge13} interface gpon
                0/13
              </pre>
              <pre>
                ont auto-config name TERCEIROS-14 all-ont line {values.aimbridge14} interface gpon
                0/14
              </pre>
              <pre>
                ont auto-config name TERCEIROS-15 all-ont line {values.aimbridge15} interface gpon
                0/15
              </pre>
              <pre>
                ont auto-config name TERCEIROS-16 all-ont line {values.aimbridge16} interface gpon
                0/16
              </pre>
            </>
          )}
        </code>
        <hr />
        <p className={Style.title}>Router</p>
        <code
          id="auto3"
          className={Style.code}
          onClick={() => copyToClip(document.getElementById("auto3").innerText)}>
          <pre>
            ont auto-config name {DeviceNameRouter()}-VLAN-{values.vlanpon1} device-type{" "}
            {values.devicerouter} line {values.aimrouter1} interface gpon 0/1
          </pre>
          <pre>
            ont auto-config name {DeviceNameRouter()}-VLAN-{values.vlanpon2} device-type{" "}
            {values.devicerouter} line {values.aimrouter2} interface gpon 0/2
          </pre>
          <pre>
            ont auto-config name {DeviceNameRouter()}-VLAN-{values.vlanpon3} device-type{" "}
            {values.devicerouter} line {values.aimrouter3} interface gpon 0/3
          </pre>
          <pre>
            ont auto-config name {DeviceNameRouter()}-VLAN-{values.vlanpon4} device-type{" "}
            {values.devicerouter} line {values.aimrouter4} interface gpon 0/4
          </pre>
          <pre>
            ont auto-config name {DeviceNameRouter()}-VLAN-{values.vlanpon5} device-type{" "}
            {values.devicerouter} line {values.aimrouter5} interface gpon 0/5
          </pre>
          <pre>
            ont auto-config name {DeviceNameRouter()}-VLAN-{values.vlanpon6} device-type{" "}
            {values.devicerouter} line {values.aimrouter6} interface gpon 0/6
          </pre>
          <pre>
            ont auto-config name {DeviceNameRouter()}-VLAN-{values.vlanpon7} device-type{" "}
            {values.devicerouter} line {values.aimrouter7} interface gpon 0/7
          </pre>
          <pre>
            ont auto-config name {DeviceNameRouter()}-VLAN-{values.vlanpon8} device-type{" "}
            {values.devicerouter} line {values.aimrouter8} interface gpon 0/8
          </pre>
          {g16 && (
            <>
              <pre>
                ont auto-config name {DeviceNameRouter()}-VLAN-{values.vlanpon9} device-type{" "}
                {values.devicerouter} line {values.aimrouter9} interface gpon 0/9
              </pre>
              <pre>
                ont auto-config name {DeviceNameRouter()}-VLAN-{values.vlanpon10} device-type{" "}
                {values.devicerouter} line {values.aimrouter10} interface gpon 0/10
              </pre>
              <pre>
                ont auto-config name {DeviceNameRouter()}-VLAN-{values.vlanpon11} device-type{" "}
                {values.devicerouter} line {values.aimrouter11} interface gpon 0/11
              </pre>
              <pre>
                ont auto-config name {DeviceNameRouter()}-VLAN-{values.vlanpon12} device-type{" "}
                {values.devicerouter} line {values.aimrouter12} interface gpon 0/12
              </pre>
              <pre>
                ont auto-config name {DeviceNameRouter()}-VLAN-{values.vlanpon13} device-type{" "}
                {values.devicerouter} line {values.aimrouter13} interface gpon 0/13
              </pre>
              <pre>
                ont auto-config name {DeviceNameRouter()}-VLAN-{values.vlanpon14} device-type{" "}
                {values.devicerouter} line {values.aimrouter14} interface gpon 0/14
              </pre>
              <pre>
                ont auto-config name {DeviceNameRouter()}-VLAN-{values.vlanpon15} device-type{" "}
                {values.devicerouter} line {values.aimrouter15} interface gpon 0/15
              </pre>
              <pre>
                ont auto-config name {DeviceNameRouter()}-VLAN-{values.vlanpon16} device-type{" "}
                {values.devicerouter} line {values.aimrouter16} interface gpon 0/16
              </pre>
            </>
          )}
        </code>
        <p className={Style.subTitle}>Terceiros</p>
        <code
          id="auto4"
          className={Style.code}
          onClick={() => copyToClip(document.getElementById("auto4").innerText)}>
          <pre>
            ont auto-config name TERCEIROS-1 all-ont line {values.aimrouter1} interface gpon 0/1
          </pre>
          <pre>
            ont auto-config name TERCEIROS-2 all-ont line {values.aimrouter2} interface gpon 0/2
          </pre>
          <pre>
            ont auto-config name TERCEIROS-3 all-ont line {values.aimrouter3} interface gpon 0/3
          </pre>
          <pre>
            ont auto-config name TERCEIROS-4 all-ont line {values.aimrouter4} interface gpon 0/4
          </pre>
          <pre>
            ont auto-config name TERCEIROS-5 all-ont line {values.aimrouter5} interface gpon 0/5
          </pre>
          <pre>
            ont auto-config name TERCEIROS-6 all-ont line {values.aimrouter6} interface gpon 0/6
          </pre>
          <pre>
            ont auto-config name TERCEIROS-7 all-ont line {values.aimrouter7} interface gpon 0/7
          </pre>
          <pre>
            ont auto-config name TERCEIROS-8 all-ont line {values.aimrouter8} interface gpon 0/8
          </pre>
          {g16 && (
            <>
              <pre>
                ont auto-config name TERCEIROS-9 all-ont line {values.aimrouter9} interface gpon 0/9
              </pre>
              <pre>
                ont auto-config name TERCEIROS-10 all-ont line {values.aimrouter10} interface gpon
                0/10
              </pre>
              <pre>
                ont auto-config name TERCEIROS-11 all-ont line {values.aimrouter11} interface gpon
                0/11
              </pre>
              <pre>
                ont auto-config name TERCEIROS-12 all-ont line {values.aimrouter12} interface gpon
                0/12
              </pre>
              <pre>
                ont auto-config name TERCEIROS-13 all-ont line {values.aimrouter13} interface gpon
                0/13
              </pre>
              <pre>
                ont auto-config name TERCEIROS-14 all-ont line {values.aimrouter14} interface gpon
                0/14
              </pre>
              <pre>
                ont auto-config name TERCEIROS-15 all-ont line {values.aimrouter15} interface gpon
                0/15
              </pre>
              <pre>
                ont auto-config name TERCEIROS-16 all-ont line {values.aimrouter16} interface gpon
                0/16
              </pre>
            </>
          )}
        </code>
      </div>
    </div>
  );
}
