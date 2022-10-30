import React from 'react'
import Style from './Sidebar.module.css'

export default function Sidebar() {

  return (
    <ul className={Style.menu}>
      <a href="#start"><li className={Style.menuItem}> Inicio</li></a>
      <hr />
      <a href="#Pdba"><li className={Style.menuItem}> Profile DBA</li></a>
      <a href="#aim"><li className={Style.menuItem}> IDs Vlan</li></a>
      <a href="#uplink"><li className={Style.menuItem}> Uplink</li></a>
      <a href="#vlan"><li className={Style.menuItem}> Profile Vlan</li></a>
      <a href="#aimLine"><li className={Style.menuItem}> Aim Line</li></a>
      <a href="#profileLine"><li className={Style.menuItem}> Profile Line</li></a>
      <a href="#autoconfig"><li className={Style.menuItem}> Auto Config</li></a>
    </ul>
  )
}
