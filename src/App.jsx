import React from 'react';
import Style from './App.module.css';
import AutoConfig from './Components/G16/AutoConfig/AutoConfig';
import Dba from './Components/G16/DBA/Dba';
import AimLine from './Components/G16/Line/AimLine';
import ProfileLineBridge from './Components/G16/Line/ProfileLineBridge';
import ProfileLineRouter from './Components/G16/Line/ProfileLineRouter';
import SelectDeviceBridge from './Components/G16/Line/SelectDeviceBridge';
import SelectDeviceRouter from './Components/G16/Line/SelectDeviceRouter';
import Uplink from './Components/G16/Uplink/Uplink';
import Pons from './Components/G16/Vlan/Pons';
import ProfileVlan from './Components/G16/Vlan/ProfileVlan';
import ValueContext from "./js/ValueContext";
import initialValues from './js/initialValues.js';
import Menu from './Components/Global/Menus/Menu';
import Footer from './Components/Global/Footer/Footer';
import Pons_i from './Components/8820i/Pons/Pons_i';
import Aviso from './Components/8820i/Aviso/Aviso';
import ConfigAutoService from './Components/8820i/Bridges/ConfigAutoService';
import RemoveAutoService from './Components/8820i/Bridges/RemoveAutoService';
import Sidebar from './Components/Global/Menus/Sidebar';

export default function App() {

  //Hook para armazenar o modelo do equipamento
  const [g16, setG16] = React.useState(false)
  const [g08, setG08] = React.useState(false)
  const [i8820, setI8820] = React.useState(false)

  //Hook para armazenar os valores dos inputs
  const [values, setValues] = React.useState(initialValues);

  const [selected, setSelected] = React.useState(true);
  const handleChangeSelected = () => {
    setSelected(!selected)
  }

  const [cpemgr, setCpemgr] = React.useState(false);
  const handleCpemgr = () => {
    setCpemgr(!cpemgr)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <ValueContext.Provider value={{ values, setValues, handleChange, g16, setG16, selected, handleChangeSelected, g08, setG08, i8820, setI8820, handleCpemgr, cpemgr, setCpemgr }}>
      <div className={Style.container}>
        {!i8820 &&
          <>
            {/* Todos os componentes são chamados aqui */}
            <Sidebar />
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
          </>
        }
        {i8820 &&
          <>
            <Menu />
            <Pons_i />
            <Aviso />
            <ConfigAutoService />
            <RemoveAutoService />
            <Footer />
          </>
        }
      </div>
    </ValueContext.Provider >
  )
}