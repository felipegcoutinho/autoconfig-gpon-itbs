import React from 'react'
import Style from './Dba.module.css'

function Dba() {
  return (
    <div className={Style.container}>
      <h2>#3 Profile DBA</h2>
      <div className={Style.content}>
        <pre>deploy profile dba</pre>
        <pre>aim 1 name DBA-DEFAULT</pre>
        <pre>type 4 max 1200000</pre>
        <pre>active</pre>
        <pre>exit</pre>
      </div>
    </div>
  )
}

export default Dba