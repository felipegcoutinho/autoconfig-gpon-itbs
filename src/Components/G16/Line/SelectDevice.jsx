import React from "react";
import Style from "./SelectDevice.module.css";
import {ValueContext} from "../../../JS/Context";
import {DeviceOptionsBridge, DeviceOptionsRouter, ModoVlanOptions} from "../../../JS/DeviceOptions";

export default function SelectDevice() {
  const {values, handleChange, handleModovlan} = React.useContext(ValueContext);

  return (
    <>
      <div id="profileLine" className={Style.container}>
        <div className={Style.h2}>
          <h2> Profile Line Bridge</h2>
        </div>
        <div className={Style.content}>
          <div className={Style.DeviceSelectContainer}>
            <label htmlFor="devicebridge">Escolha o Device para Line Bridge</label>
            <select
              id="devicebridge"
              defaultValue={values.devicebridge}
              className={Style.selectDevice}
              onChange={handleChange}
              name="devicebridge">
              {DeviceOptionsBridge.map((option) => (
                <option key={option.key} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className={Style.ModoVlanContainer}>
            <label htmlFor="modovlan">Modo Vlan</label>
            <select
              id="modovlan"
              defaultValue={values.vmodovlan}
              className={Style.modovlan}
              onChange={handleModovlan}
              name="vmodovlan">
              {ModoVlanOptions.map((option) => (
                <option key={option.key} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className={Style.containerRouter}>
        <div className={Style.h2Router}>
          <h2> Profile Line Router</h2>
        </div>
        <div className={Style.content}>
          <div className={Style.DeviceSelectContainer}>
            <label htmlFor="devicerouter">Escolha o Device para Line Router</label>
            <select
              id="devicerouter"
              defaultValue={values.devicerouter}
              className={Style.selectDevice}
              onChange={handleChange}
              name="devicerouter">
              {DeviceOptionsRouter.map((option) => (
                <option key={option.key} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
