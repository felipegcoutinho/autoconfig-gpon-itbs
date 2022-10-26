import React from 'react';
import Style from './AppMain.module.css';
import AutoConfig from './Components/AutoConfig/AutoConfig';
import Dba from './Components/DBA/Dba';
import AimLine from './Components/Line/AimLine';
import ProfileLineBridge from './Components/Line/ProfileLineBridge';
import ProfileLineRouter from './Components/Line/ProfileLineRouter';
import SelectDeviceBridge from './Components/Line/SelectDeviceBridge';
import SelectDeviceRouter from './Components/Line/SelectDeviceRouter';
import Uplink from './Components/Uplink/Uplink';
import Pons from './Components/Vlan/Pons';
import ProfileVlan from './Components/Vlan/ProfileVlan';
import ValueContext from "./js/ValueContext";
import initialValues from './js/initialValues.js';
import Menu from './Components/Menu/Menu';
import Footer from './Components/Footer/Footer';

export default function AppMain() {

  //Hook para armazenar o modelo do equipamento
  const [checked, setChecked] = React.useState(null)

  //Hook para armazenar os valores dos inputs
  const [values, setValues] = React.useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <ValueContext.Provider value={{ values, setValues, handleChange, checked, setChecked }}>
      <div className={Style.container}>

        {/* Menu Lateral */}
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

        {/* Todos os componentes são chamados aqui */}
        <Menu />
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
        <Footer />
      </div>
    </ValueContext.Provider >
  )
}