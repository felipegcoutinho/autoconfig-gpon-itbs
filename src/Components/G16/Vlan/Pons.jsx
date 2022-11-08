import React from "react";
import {ValueContext} from "../../../JS/Context";
import Style from "./Pons.module.css";

export default function Pons() {
  const {values, handleChange, g16} = React.useContext(ValueContext);

  return (
    <div id="aim" className={Style.container}>
      <h2> Definição dos AIMs do Profile VLAN</h2>
      <form className={Style.content} onChange={handleChange}>
        <div className={Style.pons}>
          <Aim name="aimvlanpon1" defaultValue={values.aimvlanpon1} title="PON 1" />
          <Vlans name="vlanpon1" defaultValue={values.vlanpon1} />
        </div>
        <div className={Style.pons}>
          <Aim name="aimvlanpon2" defaultValue={values.aimvlanpon2} title="PON 2" />
          <Vlans name="vlanpon2" defaultValue={values.vlanpon2} />
        </div>
        <div className={Style.pons}>
          <Aim name="aimvlanpon3" defaultValue={values.aimvlanpon3} title="PON 3" />
          <Vlans name="vlanpon3" defaultValue={values.vlanpon3} />
        </div>
        <div className={Style.pons}>
          <Aim name="aimvlanpon4" defaultValue={values.aimvlanpon4} title="PON 4" />
          <Vlans name="vlanpon4" defaultValue={values.vlanpon4} />
        </div>
        <div className={Style.pons}>
          <Aim name="aimvlanpon5" defaultValue={values.aimvlanpon5} title="PON 5" />
          <Vlans name="vlanpon5" defaultValue={values.vlanpon5} />
        </div>
        <div className={Style.pons}>
          <Aim name="aimvlanpon6" defaultValue={values.aimvlanpon6} title="PON 6" />
          <Vlans name="vlanpon6" defaultValue={values.vlanpon6} />
        </div>
        <div className={Style.pons}>
          <Aim name="aimvlanpon7" defaultValue={values.aimvlanpon7} title="PON 7" />
          <Vlans name="vlanpon7" defaultValue={values.vlanpon7} />
        </div>
        <div className={Style.pons}>
          <Aim name="aimvlanpon8" defaultValue={values.aimvlanpon8} title="PON 8" />
          <Vlans name="vlanpon8" defaultValue={values.vlanpon8} />
        </div>
        {g16 && (
          <>
            <div className={Style.pons}>
              <Aim name="aimvlanpon9" defaultValue={values.aimvlanpon9} title="PON 9" />
              <Vlans name="vlanpon9" defaultValue={values.vlanpon9} />
            </div>
            <div className={Style.pons}>
              <Aim name="aimvlanpon10" defaultValue={values.aimvlanpon10} title="PON 10" />
              <Vlans name="vlanpon10" defaultValue={values.vlanpon10} />
            </div>
            <div className={Style.pons}>
              <Aim name="aimvlanpon11" defaultValue={values.aimvlanpon11} title="PON 11" />
              <Vlans name="vlanpon11" defaultValue={values.vlanpon11} />
            </div>
            <div className={Style.pons}>
              <Aim name="aimvlanpon12" defaultValue={values.aimvlanpon12} title="PON 12" />
              <Vlans name="vlanpon12" defaultValue={values.vlanpon12} />
            </div>
            <div className={Style.pons}>
              <Aim name="aimvlanpon13" defaultValue={values.aimvlanpon13} title="PON 13" />
              <Vlans name="vlanpon13" defaultValue={values.vlanpon13} />
            </div>
            <div className={Style.pons}>
              <Aim name="aimvlanpon14" defaultValue={values.aimvlanpon14} title="PON 14" />
              <Vlans name="vlanpon14" defaultValue={values.vlanpon14} />
            </div>
            <div className={Style.pons}>
              <Aim name="aimvlanpon15" defaultValue={values.aimvlanpon15} title="PON 15" />
              <Vlans name="vlanpon15" defaultValue={values.vlanpon15} />
            </div>
            <div className={Style.pons}>
              <Aim name="aimvlanpon16" defaultValue={values.aimvlanpon16} title="PON 16" />
              <Vlans name="vlanpon16" defaultValue={values.vlanpon16} />
            </div>
          </>
        )}
      </form>
    </div>
  );
}

function Aim({handleChange, ...props}) {
  return (
    <>
      <h5 className={Style.h5}>{props.title}</h5>
      <label>AIM</label>
      <input type="number" onChange={handleChange} {...props} />
    </>
  );
}

function Vlans({handleChange, ...props}) {
  return (
    <>
      <label>VLAN</label>
      <input type="number" onChange={handleChange} {...props} />
    </>
  );
}
