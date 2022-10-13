import React from 'react'
import initialValues from './js/values.js'
import ProfileVlan from './Components/Vlans/ProfileVlan';
import Pons from './Components/Vlans/Pons'
import ValueContext from "./js/ValueContext";
import Uplink from './Components/Uplink/Uplink'
import Style from './App.module.css'
import Dba from './Components/DBA/Dba'
import Header from './Components/Header/Header'
import AimLine from './Components/Line/AimLine'
import ProfileLineBridge from './Components/Line/ProfileLineBridge';
import ProfileLineRouter from './Components/Line/ProfileLineRouter';
import SelectDeviceBridge from './Components/Line/SelectDeviceBridge';
import SelectDeviceRouter from './Components/Line/SelectDeviceRouter';
import AutoConfig from './Components/AutoConfig/AutoConfig';

export default function App() {

  const [checked, setChecked] = React.useState(true)
  const handleChangeCheckbox = () => {
    setChecked(!checked)
  }

  const [values, setValues] = React.useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <ValueContext.Provider value={{ values, setValues, handleChange, checked }}>
      <div className={Style.container}>
        <div className={Style.h1}>
          <h1>G16 - Configurações iniciais de Auto Provisionamento</h1>
          <label>{checked ? "Desmarque para voltar para G16" : "G8"}</label>
          <input
            type="checkbox"
            checked={checked}
            onChange={handleChangeCheckbox}
          />

        </div>
        <ul className={Style.menu}>
          <a href="#Pdba"><li className={Style.menuItem}> Profile DBA</li></a>
          <a href="#aim"><li className={Style.menuItem}> Aim Vlan</li></a>
          <a href="#uplink"><li className={Style.menuItem}> Uplink</li></a>
          <a href="#vlan"><li className={Style.menuItem}> Profile Vlan</li></a>
          <a href="#aimLine"><li className={Style.menuItem}> Aim Line</li></a>
          <a href="#profileLine"><li className={Style.menuItem}> Profile Line</li></a>
          <a href="#autoconfig"><li className={Style.menuItem}> Auto Config</li></a>
        </ul>
        <Header />
        <Dba />
        <Pons />
        <Uplink />
        <ProfileVlan />
        <AimLine />
        <SelectDeviceBridge />
        <SelectDeviceRouter />
        <ProfileLineBridge />
        <ProfileLineRouter />
        <AutoConfig />
      </div>
    </ValueContext.Provider >
  )
}