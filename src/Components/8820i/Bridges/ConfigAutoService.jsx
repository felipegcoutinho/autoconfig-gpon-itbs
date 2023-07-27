import React from "react";
import Style from "./ConfigAutoService.module.css";
import {ValueContext} from "../../../JS/Context";
import copyToClip from "../../../JS/BtnCopy";

export default function BridgeChangepon(num) {
  const {selected, values} = React.useContext(ValueContext);

  const bridgeValue = values[`bridgepon${num}`] === "tls" ? "tls" : "downlink";

  function r1mode() {
    return values.R1Mode == "bridge" ? "default" : "default-router";
  }

  function gimode() {
    return values.giMode == "bridge" ? "default" : "default-router";
  }

  function defaultmode() {
    return values.defaultMode == "bridge" ? "default" : "default-router";
  }

  function generateBridgeCommand(uplink, bridge, vlan, modovlan) {
    return `bridge add ${uplink} ${bridge} vlan ${vlan} ${modovlan}`;
  }

  function generateBridgeProfileCommand(profile, bridgeValue, vlan) {
    return `bridge-profile add ${profile} ${bridgeValue} vlan ${vlan} tagged eth 1`;
  }

  function generateBridgeProfileRouterCommand(profile, bridgeValue, vlan) {
    return `bridge-profile add ${profile} ${bridgeValue} vlan ${vlan} tagged router`;
  }

  function generateCode(gponNumber) {
    const codes = [
      `bridge-profile bind add gpon${gponNumber}-${gimode()} device intelbras-110 gpon ${gponNumber}`,
      `bridge-profile bind add gpon${gponNumber}-default device intelbras-110b gpon ${gponNumber}`,
      `bridge-profile bind add gpon${gponNumber}-default device intelbras-110g gpon ${gponNumber}`,
      `bridge-profile bind add gpon${gponNumber}-${defaultmode()} device intelbras-default gpon ${gponNumber}`,
      `bridge-profile bind add gpon${gponNumber}-${r1mode()} device intelbras-r1 gpon ${gponNumber}`,
      `bridge-profile bind add gpon${gponNumber}-default-router device intelbras-121w gpon ${gponNumber}`,
      `bridge-profile bind add gpon${gponNumber}-default-router device intelbras-142ng gpon ${gponNumber}`,
      `bridge-profile bind add gpon${gponNumber}-default-router device intelbras-142nw gpon ${gponNumber}`,
      `bridge-profile bind add gpon${gponNumber}-default-router device intelbras-1420g gpon ${gponNumber}`,
      `bridge-profile bind add gpon${gponNumber}-default-router device intelbras-121ac gpon ${gponNumber}`,
      `bridge-profile bind add gpon${gponNumber}-default-router device intelbras-120ac gpon ${gponNumber}`,
      `bridge-profile bind add gpon${gponNumber}-default-router device intelbras-1200r gpon ${gponNumber}`,
      `bridge-profile bind add gpon${gponNumber}-default-router device intelbras-1800 gpon ${gponNumber}`,
      `bridge-profile bind add gpon${gponNumber}-default-router device intelbras-1800v gpon ${gponNumber}`,
    ];
    return codes.join("\n");
  }

  const codeLines = [
    `bridge add ${values.uplinkpon1} ${values.bridgepon1} vlan ${values.vlanpon1} ${values.modovlanpon1}`,
    `bridge-profile add default downlink vlan ${values.vlanpon1} tagged eth 1`,
    `bridge-profile add default-router downlink vlan ${values.vlanpon1} tagged router`,
    `bridge-profile bind add ${gimode()} device intelbras-110`,
    "bridge-profile bind add default device intelbras-110b",
    "bridge-profile bind add default device intelbras-110g",
    `bridge-profile bind add ${defaultmode()} device intelbras-default`,
    `bridge-profile bind add ${r1mode()} device intelbras-r1`,
    "bridge-profile bind add default-router device intelbras-121w",
    "bridge-profile bind add default-router device intelbras-142ng",
    "bridge-profile bind add default-router device intelbras-142nw",
    "bridge-profile bind add default-router device intelbras-1420g",
    "bridge-profile bind add default-router device intelbras-120ac",
    "bridge-profile bind add default-router device intelbras-121ac",
    "bridge-profile bind add default-router device intelbras-1200r",
    "bridge-profile bind add default-router device intelbras-1800",
    "bridge-profile bind add default-router device intelbras-1800v",
    "onu set auto",
    "auto-service enable",
    "yes",
    "onu show refresh",
  ];

  return (
    <div className={Style.container}>
      <h2> CONFIGURAÇÕES DO AUTO-SERVICE</h2>
      <div className={Style.content}>
        {selected ? (
          <>
            <code
              id="bridgeadd"
              className={Style.code}
              onClick={() => copyToClip(document.getElementById("bridgeadd").innerText)}>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <pre key={num}>
                  {generateBridgeCommand(
                    values[`uplinkpon${num}`],
                    values[`bridgepon${num}`],
                    values[`vlanpon${num}`],
                    values[`modovlanpon${num}`]
                  )}
                </pre>
              ))}
            </code>
            <hr />
            <code
              id="bridgeprofiledefault"
              className={Style.code}
              onClick={() => copyToClip(document.getElementById("bridgeprofiledefault").innerText)}>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <pre key={num}>
                  {generateBridgeProfileCommand(
                    `gpon${num}-default`,
                    bridgeValue,
                    values[`vlanpon${num}`]
                  )}
                </pre>
              ))}
            </code>
            <hr />
            <code
              id="bridgeprofilerouter"
              className={Style.code}
              onClick={() => copyToClip(document.getElementById("bridgeprofilerouter").innerText)}>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <pre key={num}>
                  {generateBridgeProfileRouterCommand(
                    `gpon${num}-default-router`,
                    bridgeValue,
                    values[`vlanpon${num}`]
                  )}
                </pre>
              ))}
            </code>
            <hr />
            <code id="bindgpon1" className={Style.code} onClick={() => copyToClip(generateCode(1))}>
              {generateCode(1)
                .split("\n")
                .map((line, index) => (
                  <pre key={index}>{line}</pre>
                ))}
            </code>
            <hr />
            <code id="bindgpon2" className={Style.code} onClick={() => copyToClip(generateCode(2))}>
              {generateCode(2)
                .split("\n")
                .map((line, index) => (
                  <pre key={index}>{line}</pre>
                ))}
            </code>
            <hr />
            <code id="bindgpon3" className={Style.code} onClick={() => copyToClip(generateCode(3))}>
              {generateCode(3)
                .split("\n")
                .map((line, index) => (
                  <pre key={index}>{line}</pre>
                ))}
            </code>
            <hr />
            <code id="bindgpon4" className={Style.code} onClick={() => copyToClip(generateCode(4))}>
              {generateCode(4)
                .split("\n")
                .map((line) => (
                  <pre>{line}</pre>
                ))}
            </code>
            <hr />

            <code id="bindgpon5" className={Style.code} onClick={() => copyToClip(generateCode(5))}>
              {generateCode(5)
                .split("\n")
                .map((line, index) => (
                  <pre key={index}>{line}</pre>
                ))}
            </code>
            <hr />
            <code id="bindgpon6" className={Style.code} onClick={() => copyToClip(generateCode(6))}>
              {generateCode(6)
                .split("\n")
                .map((line, index) => (
                  <pre key={index}>{line}</pre>
                ))}
            </code>
            <hr />
            <code id="bindgpon7" className={Style.code} onClick={() => copyToClip(generateCode(7))}>
              {generateCode(7)
                .split("\n")
                .map((line, index) => (
                  <pre key={index}>{line}</pre>
                ))}
            </code>
            <hr />
            <code id="bindgpon8" className={Style.code} onClick={() => copyToClip(generateCode(8))}>
              {generateCode(8)
                .split("\n")
                .map((line, index) => (
                  <pre key={index}>{line}</pre>
                ))}
            </code>
            <hr />
            <code
              id="onuset"
              className={Style.code}
              onClick={() => copyToClip(document.getElementById("onuset").innerText)}>
              <pre>onu set auto</pre>
              <pre>auto-service enable</pre>
              <pre>yes</pre>
              <pre>onu show refresh</pre>
            </code>
          </>
        ) : (
          <code
            id="bridgeaddumavlan"
            className={Style.code}
            onClick={() => copyToClip(document.getElementById("bridgeaddumavlan").innerText)}>
            {codeLines.map((line, index) => (
              <pre key={index}>{line}</pre>
            ))}
          </code>
        )}
      </div>
    </div>
  );
}
