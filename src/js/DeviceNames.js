import React from "react";
import {ValueContext} from "./Context";
import ServiceContext from "./Context";

//DEVICE BRIDGE
export function DeviceNameBridge() {
  const {values} = React.useContext(ValueContext);

  if (values.devicebridge == "i30-100") {
    return "110Gi";
  }
  if (values.devicebridge == "i41-100") {
    return "110Gb";
  }
  if (values.devicebridge == "i40-100") {
    return "R1";
  }
  if (values.devicebridge == "i40-100-v2") {
    return "R1v2";
  }
}

//DEVICE ROUTER
export function DeviceNameRouter() {
  const {values} = React.useContext(ValueContext);

  if (values.devicerouter == "i40-100") {
    return "R1";
  }
  if (values.devicerouter == "i40-100-v2") {
    return "R1v2";
  }
  if (values.devicerouter == "i10-420") {
    return "1420G";
  }
  if (values.devicerouter == "i40-421") {
    return "142NW";
  }
  if (values.devicerouter == "i41-421") {
    return "142NG";
  }
  if (values.devicerouter == "i40-211") {
    return "121W";
  }
  if (values.devicerouter == "i41-211") {
    return "121AC";
  }
  if (values.devicerouter == "i40-201") {
    return "120AC";
  }
  if (values.devicerouter == "i41-201") {
    return "1200R";
  }
  if (values.devicerouter == "i40-401") {
    return "1800";
  }
  if (values.devicerouter == "i40-411") {
    return "1800v";
  }
}

//MANUAL

//DEVICE BRIDGE
export function DeviceNamesBridge() {
  const {values} = React.useContext(ServiceContext);

  if (values.devicebridge == "i30-100") {
    return "110Gi";
  }
  if (values.devicebridge == "i41-100") {
    return "110Gb";
  }
  if (values.devicebridge == "i40-100") {
    return "R1";
  }
  if (values.devicebridge == "i40-100-v2") {
    return "R1v2";
  }
}

//DEVICE ROUTER
export function DeviceNamesRouter() {
  const {values} = React.useContext(ServiceContext);

  if (values.devicerouter == "i40-100") {
    return "R1";
  }
  if (values.devicerouter == "i40-100-v2") {
    return "R1v2";
  }
  if (values.devicerouter == "i10-420") {
    return "1420G";
  }
  if (values.devicerouter == "i40-421") {
    return "142NW";
  }
  if (values.devicerouter == "i41-421") {
    return "142NG";
  }
  if (values.devicerouter == "i40-211") {
    return "121W";
  }
  if (values.devicerouter == "i41-211") {
    return "121AC";
  }
  if (values.devicerouter == "i40-201") {
    return "120AC";
  }
  if (values.devicerouter == "i41-201") {
    return "1200R";
  }
  if (values.devicerouter == "i40-401") {
    return "1800";
  }
  if (values.devicerouter == "i40-411") {
    return "1800v";
  }
}
