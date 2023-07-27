import React from "react";
import Style from "./Sidebar.module.css";
import {HashLink} from "react-router-hash-link";

export default function Sidebar() {
  return (
    <ul className={Style.menu}>
      <HashLink smooth to="/#start">
        <li className={Style.menuItem}> Inicio</li>
      </HashLink>
      <hr />
      <HashLink smooth to="/#Pdba">
        <li className={Style.menuItem}> Profile DBA</li>
      </HashLink>
      <HashLink smooth to="/#aim">
        <li className={Style.menuItem}> IDs Vlan</li>
      </HashLink>
      <HashLink smooth to="/#uplink">
        <li className={Style.menuItem}> Uplink</li>
      </HashLink>
      <HashLink smooth to="/#vlan">
        <li className={Style.menuItem}> Profile Vlan</li>
      </HashLink>
      <HashLink smooth to="/#aimLine">
        <li className={Style.menuItem}> Aim Line</li>
      </HashLink>
      <HashLink smooth to="/#profileLine">
        <li className={Style.menuItem}> Profile Line</li>
      </HashLink>
      <HashLink smooth to="/#autoconfig">
        <li className={Style.menuItem}> Auto Config</li>
      </HashLink>
    </ul>
  );
}
