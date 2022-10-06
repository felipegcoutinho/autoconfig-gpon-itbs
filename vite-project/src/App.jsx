import React from 'react'
import Styles from './Styles/App.module.css'
import Header from './Components/Header/Header.jsx'
import Pons from './Components/Vlans/Pons.jsx'

function App() {
  return (
    <div className={Styles.container}>
      <Header />
      <Pons />
      <div className={Styles.div3}></div>
    </div>
  )
}

export default App
