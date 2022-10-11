import React from 'react'
import initialValues from '../../js/values.js'
import ProfileVlan from './ProfileVlan';
import Pons from './Pons'
import ValueContext from "../../js/ValueContext";
import Uplink from './Uplink'
import Style from './AppVlan.module.css'
import Dba from '../DBA/Dba'

export default function AppVlan() {

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
        <h1>G16 - Configurações iniciais de Auto Provisionamento</h1>
        <Dba />
        <Pons />
        <Uplink />
        <ProfileVlan />
      </div>
    </ValueContext.Provider >
  )
}