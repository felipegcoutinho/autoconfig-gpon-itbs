import React from 'react'
import ServiceContext from "./ServiceContext";

export function Onudesc() {
  const { values } = React.useContext(ServiceContext);
  if (values.onuDesc === "") {
    return ""
  } else {
    return "name " + values.onuDesc
  }
}

export function DbaName() {
  const { values } = React.useContext(ServiceContext);
  if (values.dbaName === "") {
    return values.dbaId
  } else {
    return "name " + values.dbaName
  }
}
export function vlanName() {
  const { values } = React.useContext(ServiceContext);
  if (values.vlanName === "") {
    return values.ProfileVlan
  } else {
    return "name " + values.vlanName
  }
}
export function lineName() {
  const { values } = React.useContext(ServiceContext);
  if (values.lineName === "") {
    return values.ProfileLine
  } else {
    return "name " + values.lineName
  }
}

export function TCont() {
  const { values } = React.useContext(ServiceContext);
  if (values.dbaCont == 1) {
    return "type 1 fix " + values.dbaFix
  }
  else if (values.dbaCont == 2) {
    return "type 2 assured " + values.dbaAssured
  }
  else if (values.dbaCont == 3) {
    return "type 3 assured " + values.dbaAssured + " max " + values.dbaMax
  }
  else if (values.dbaCont == 4) {
    return "type 4 max " + values.dbaMax
  }
  else {
    return "type 5 fix " + values.dbaFix + " assured " + values.dbaAssured + " max " + values.dbaMax
  }
}