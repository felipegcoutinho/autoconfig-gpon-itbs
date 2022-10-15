import React from 'react'
import ValueContext from "./ValueContext";

//DEVICE BRIDGE
export function DeviceNamesBridge() {

  const { values } = React.useContext(ValueContext);

  if (values.devicebridge == 'i30-100') {
    return '110Gi';
  }
  if (values.devicebridge == '110Gb') {
    return '110Gb';
  }
  if (values.devicebridge == 'i40-100') {
    return 'R1';
  }
  if (values.devicebridge == 'i40-100-v2') {
    return 'R1v2';
  }
}

//DEVICE ROUTER
export function DeviceNameRouter() {

  const { values } = React.useContext(ValueContext);

  if (values.devicerouter == 'i40-100') {
    return 'R1';
  }
  if (values.devicerouter == 'i40-100-v2') {
    return 'R1v2';
  }
  if (values.devicerouter == 'i10-420') {
    return '1420G';
  }
  if (values.devicerouter == 'i40-421') {
    return '142NW';
  }
  if (values.devicerouter == 'i41-421') {
    return '142NG';
  }
  if (values.devicerouter == 'i40-211') {
    return '121W';
  }
  if (values.devicerouter == 'i41-211') {
    return '121AC';
  }
  if (values.devicerouter == 'i40-201') {
    return '120AC';
  }
  if (values.devicerouter == 'i41-201') {
    return '1200R';
  }
}