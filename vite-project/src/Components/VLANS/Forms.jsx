import React from 'react'
import initialValues from '../../js/values'
import Style from './ProfileVlan.module.css'

export default function ProfileVlan() {
  return (
    <div className={Style.container}>
      <h2>Profile VLAN</h2>

      {initialValues.aimvlanpon1}

      <p>deploy profile vlan</p>
      <p>aim 1 name vlan101
        translate old-vlan 101 new-vlan 101
        active</p>
      <p>aim 2 name vlan102
        translate old-vlan 102 new-vlan 102
        active</p>
      <p>aim 3 name vlan103
        translate old-vlan 103 new-vlan 103
        active</p>
      <p>aim 4 name vlan104
        translate old-vlan 104 new-vlan 104
        active</p>
      <p>aim 5 name vlan105
        translate old-vlan 105 new-vlan 105
        active</p>
      <p>aim 6 name vlan106
        translate old-vlan 106 new-vlan 106
        active</p>
      <p> aim 7 name vlan107
        translate old-vlan 107 new-vlan 107
        active</p>
      <p>aim 8 name vlan108
        translate old-vlan 108 new-vlan 108
        active</p>
      <p>aim 9 name vlan109
        translate old-vlan 109 new-vlan 109
        active</p>
      <p>aim 10 name vlan110
        translate old-vlan 110 new-vlan 110
        active</p>
      <p> aim 11 name vlan111
        translate old-vlan 111 new-vlan 111
        active</p>
      <p> aim 12 name vlan112
        translate old-vlan 112 new-vlan 112
        active</p>
      <p> aim 13 name vlan113
        translate old-vlan 113 new-vlan 113
        active</p>
      <p> aim 14 name vlan114
        translate old-vlan 114 new-vlan 114
        active</p>
      <p> aim 15 name vlan115
        translate old-vlan 115 new-vlan 115
        active</p>
      <p> aim 16 name vlan116
        translate old-vlan 116 new-vlan 116
        active</p>
      exit
    </div>
  )
}