import React from 'react'
import Style from './Header.module.css'

export default function header() {
  return (
    <div id="start" className={Style.container}>
      <nav className={Style.menu}>
        <ul>
          <li><a className={Style.title} href="#">GPON ITBS <span className={Style.version}>v0.1</span> </a></li>
          <li><a href="#">Home</a></li>
          <li><a href="#">G08 <i className="fa-solid fa-caret-down"></i></a>
            <ul>
              <li><a href="#"><i className="fa-solid fa-caret-right"></i> Manual</a></li>
            </ul>
          </li>
          <li><a href="#">G16 <i className="fa-solid fa-caret-down"></i></a>
            <ul>
              <li><a href="#">Jogos</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div >
  )
}