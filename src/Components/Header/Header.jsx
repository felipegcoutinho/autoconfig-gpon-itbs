import React from 'react'
import Style from './Header.module.css'

export default function header() {
  return (
    <div id="start" className={Style.container}>
      <nav className={Style.menu}>
        <ul>
          <li><a className={Style.title} href="https://github.com/felipegcoutinho">GPON ITBS <span className={Style.version}>v1.0</span> </a></li>
          <li><a href="#">OLT G08 <i className="fa-solid fa-caret-down"></i></a>
            <ul>
              <li><a href="#"><i className="fa-solid fa-caret-right"></i> Manual</a></li>
            </ul>
          </li>
          <li><a href="#">OLT G16 <i className="fa-solid fa-caret-down"></i></a>
            <ul>
              <li><a href="#"><i className="fa-solid fa-caret-right"></i> Manual</a></li>
            </ul>
          </li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://8820i.felipecoutinho.com/"> OLT 8820i <i className="fa-solid fa-sm fa-arrow-up-right-from-square"></i></a></li>
        </ul>
      </nav>
    </div >
  )
}