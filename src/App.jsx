import React from 'react'
import initialValues from './js/values.js'
import ProfileVlan from './Components/Vlans/ProfileVlan';
import Pons from './Components/Vlans/Pons'
import ValueContext from "./js/ValueContext";
import Uplink from './Components/Uplink/Uplink'
import Style from './App.module.css'
import Dba from './Components/DBA/Dba'
import Header from './Components/Header/Header'

export default function App() {

  const [values, setValues] = React.useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <ValueContext.Provider value={{ values, handleChange }}>
      <div className={Style.container}>
        <div className={Style.h1}>
          <h1>G16 - Configurações iniciais de Auto Provisionamento</h1>
        </div>
        <nav className={Style.nav}>
          <div><a href="#Pdba">DBA</a></div>
          <hr />
          <div><a href="#aim">AIMs</a></div>
          <hr />
          <div><a href="#uplink">Uplink</a></div>
          <hr />
          <div><a href="#vlan">Vlan</a></div>
        </nav>
        <Header />
        <Dba />
        <Pons />
        <Uplink />
        <ProfileVlan />
      </div>
    </ValueContext.Provider >
  )
}