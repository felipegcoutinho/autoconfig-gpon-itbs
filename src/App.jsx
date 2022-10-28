import React, { useEffect } from 'react';
import Style from './AppMain.module.css';
import ValueContext from "./js/ValueContext";
import ConfigAutoService from '../src/Components/8820i/Bridges/ConfigAutoService';
import RemoveAutoService from '../src/Components/8820i/Bridges/RemoveAutoService';
import Pons_i from '../src/Components/8820i/Pons/Pons_i';
import Aviso from '../src/Components/8820i/Aviso/Aviso';
import Menu from './Components/Menu/Menu';
import initialValues from './js/initialValues.js';
import Footer from './Components/Footer/Footer';

export default function App() {

  //Hook para armazenar o modelo do equipamento

  const [checked, setChecked] = React.useState()
  const [GPON_I, setGPON_I] = React.useState(false)

  const [selected, setSelected] = React.useState(true);
  const handleChangeSelected = () => {
    setSelected(!selected)
  }

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
    <ValueContext.Provider value={{ values, setValues, handleChange, checked, setChecked, selected, handleChangeSelected, GPON_I, setGPON_I }}>
      <div className={Style.container}>
        {/* Select para o equipamento */}
        <Menu />
        <Pons_i />
        <Aviso />
        <ConfigAutoService />
        <RemoveAutoService />
        <Footer />
      </div>
    </ValueContext.Provider>
  )
}