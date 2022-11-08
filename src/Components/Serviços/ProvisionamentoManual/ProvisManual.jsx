import React from "react";
import copyToClip from "../../../JS/BtnCopy";
import Style from "./ProvisManual.module.css";
import {DeviceOptionsBridge, DeviceOptionsRouter, ModoVlanOptions} from "../../../JS/DeviceOptions";
import ServiceContext from "../../../JS/Context";
import {DeviceNamesBridge, DeviceNamesRouter} from "../../../JS/DeviceNames";
import {Onudesc, DbaName, vlanName, lineName, TCont, VlanMode} from "../../../JS/Functions";

export default function ProvisManual() {
  const {ProvManualMode, values, handleChange} = React.useContext(ServiceContext);

  return (
    <div className={Style.container}>
      <form className={Style.content}>
        <div className={Style.pons}>
          <h5 className={Style.title}>PROFILE DBA</h5>
          <label>
            Id <span className={Style.Span}>(Aim)</span>
          </label>
          <input type="number" name="dbaId" defaultValue={values.dbaId} onChange={handleChange} />
          <label>Name </label>
          <input type="text" name="dbaName" defaultValue={values.dbaName} onChange={handleChange} />
          <label>TCont-Type</label>
          <select type="number" name="dbaCont" defaultValue={values.dbaCont} onChange={handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <div className={Style.pons}>
          <h5 className={Style.title}>BANDWIDTH</h5>
          <label>Fix</label>
          <input type="number" name="dbaFix" defaultValue={values.dbaFix} onChange={handleChange} />
          <label>Assured</label>
          <input type="number" name="dbaAssured" defaultValue={values.dbaAssured} onChange={handleChange} />
          <label>Max</label>
          <input type="number" name="dbaMax" defaultValue={values.dbaMax} onChange={handleChange} />
        </div>

        <div className={Style.pons}>
          <h5 className={Style.title}>PON</h5>
          <label>
            Id <span className={Style.Span}>(0/X/0)</span>
          </label>
          <input type="number" name="ponId" defaultValue={values.ponId} onChange={handleChange} />
          <label>
            Slot <span className={Style.Span}>(0/0/X)</span>
          </label>
          <input type="number" name="ponSlot" defaultValue={values.ponSlot} onChange={handleChange} />
        </div>

        <div className={Style.pons}>
          <h5 className={Style.title}>ONU/ONT</h5>
          <label>Serial Number</label>
          <input type="text" name="onuSn" defaultValue={values.onuSn} onChange={handleChange} />
          <label>Device Type</label>
          {ProvManualMode ? (
            <select type="text" name="devicebridge" defaultValue={values.devicebridge} onChange={handleChange}>
              {DeviceOptionsBridge.map((option) => (
                <option key={option.key} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : (
            <select type="text" name="devicerouter" defaultValue={values.devicerouter} onChange={handleChange}>
              {DeviceOptionsRouter.map((option) => (
                <option key={option.key} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          )}
          <label>Descrição</label>
          <input
            type="text"
            name="onuDesc"
            defaultValue={values.onuDesc}
            placeholder="Descrição ONU"
            onChange={handleChange}
          />
          {ProvManualMode && (
            <>
              <label>Porta Eth</label>
              <select type="text" name="onuEth" defaultValue={values.onuEth} onChange={handleChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </>
          )}
        </div>

        <div className={Style.pons}>
          <h5 className={Style.title}>PROFILES</h5>
          <label>
            Vlan <span className={Style.Span}>(Aim)</span>
          </label>
          <input type="number" name="ProfileVlan" defaultValue={values.ProfileVlan} onChange={handleChange} />
          <label>Vlan Name </label>
          <input type="text" name="vlanName" defaultValue={values.vlanName} onChange={handleChange} />
          <label>
            Line <span className={Style.Span}>(Aim)</span>{" "}
          </label>
          <input type="number" name="ProfileLine" defaultValue={values.ProfileLine} onChange={handleChange} />
          <label>Line Name </label>
          <input type="text" name="lineName" defaultValue={values.lineName} onChange={handleChange} />
        </div>

        <div className={Style.pons}>
          <h5 className={Style.title}>VLAN ID</h5>
          <label>Vlan ID</label>
          <input type="number" name="VlanVlan" defaultValue={values.VlanVlan} onChange={handleChange} />
          {ProvManualMode && (
            <>
              <label>Modo Vlan</label>
              <select type="number" name="VlanMode" defaultValue={values.VlanMode} onChange={handleChange}>
                {ModoVlanOptions.map((option) => (
                  <option key={option.key} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </>
          )}
        </div>
      </form>

      <div className={Style.contentCode}>
        <code
          id="dbacode"
          className={Style.code}
          onClick={() => copyToClip(document.getElementById("dbacode").innerText)}>
          <pre>deploy profile dba</pre>
          <pre>aim {DbaName()}</pre>
          <pre>{TCont()}</pre>
          <pre>active</pre>
          <pre>exit</pre>
        </code>
        <hr />
        <code
          id="vlancode"
          className={Style.code}
          onClick={() => copyToClip(document.getElementById("vlancode").innerText)}>
          <pre>deploy profile vlan</pre>
          <pre>aim {vlanName()}</pre>
          <pre>
            translate old-vlan {values.VlanVlan} new-vlan {values.VlanVlan}
          </pre>
          <pre>active</pre>
          <pre>exit</pre>
        </code>
        <hr />
        <code
          id="linecode"
          className={Style.code}
          onClick={() => copyToClip(document.getElementById("linecode").innerText)}>
          <pre>deploy profile line</pre>
          <pre>aim {lineName()} </pre>
          <pre>device type {!ProvManualMode ? values.devicerouter : values.devicebridge} </pre>
          <pre>tcont 1 profile dba {DbaName()}</pre>
          <pre>gemport 1 tcont 1 vlan-profile {vlanName()}</pre>
          <pre>mapping mode port-vlan</pre>
          {!ProvManualMode ? (
            <pre>mapping 1 port veip vlan {values.VlanVlan} gemport 1</pre>
          ) : (
            <pre>
              mapping 1 port eth {values.onuEth} vlan {values.VlanVlan} gemport 1
            </pre>
          )}
          {ProvManualMode ? (
            <pre>
              flow 1 port eth {values.onuEth} {VlanMode()}
            </pre>
          ) : (
            <>
              <pre>flow 1 port veip vlan {values.VlanVlan} keep</pre>
            </>
          )}

          <pre>active</pre>
          <pre>exit</pre>
        </code>
        <hr />
        <code
          id="rulecode"
          className={Style.code}
          onClick={() => copyToClip(document.getElementById("rulecode").innerText)}>
          <pre>deploy profile rule</pre>
          <pre>
            aim 0/{values.ponId}/{values.ponSlot} {Onudesc()}-
            {ProvManualMode ? DeviceNamesBridge() : DeviceNamesRouter()}
          </pre>
          <pre>
            permit sn string-hex {values.onuSn} line {values.ProfileLine} default line {values.ProfileLine}
          </pre>
          <pre>active</pre>
        </code>
        <hr />
        <code
          id="autoconfig"
          className={Style.code}
          onClick={() => copyToClip(document.getElementById("autoconfig").innerText)}>
          <pre>ont auto-config</pre>
          <pre>
            ont auto-config name {ProvManualMode ? DeviceNamesBridge() : DeviceNamesRouter()}-VLAN-{values.VlanVlan}{" "}
            device-type {!ProvManualMode ? values.devicerouter : values.devicebridge} line {values.ProfileLine}
          </pre>
          <pre>active</pre>
        </code>
        <hr />
        <h4>Desfazer</h4>
        <code
          id="desfazer"
          className={Style.code}
          onClick={() => copyToClip(document.getElementById("desfazer").innerText)}>
          <pre>deploy profile rule</pre>
          <pre>
            delete aim 0/{values.ponId}/{values.ponSlot}
          </pre>
          <pre>deploy profile line</pre>
          <pre>delete aim {lineName()}</pre>
          <pre>deploy profile vlan</pre>
          <pre>delete aim {vlanName()}</pre>
        </code>
      </div>
    </div>
  );
}
