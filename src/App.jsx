import React from 'react'
import Styles from './App.module.css'
import Header from './Components/Header/Header'
import AppVlan from './Components/Vlans/AppVlan'

function App() {
  return (
    <div className={Styles.container}>
      <Header />
      <AppVlan />
      <div className={Styles.teste}>
        <div><a href="#one">#1</a></div>
        <br />
        <div><a href="#two">#2</a></div>
        <br />
        <div><a href="#two">#3</a></div>
        <br />
        <div><a href="#two">#4</a></div>
      </div>
    </div>
  )
}
export default App