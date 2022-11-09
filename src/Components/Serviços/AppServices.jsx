import React, {useState} from "react";
import ProvisManual from "./ProvisionamentoManual/ProvisManual";
import Style from "./AppServices.module.css";
import ServiceContext from "../../JS/Context";
import initialValues from "../../JS/initialValues.js";

export default function AppServices() {
  const [ProvManualMode, setProvManualMode] = useState(false);
  const [values, setValues] = React.useState(initialValues);

  function HandleChangeMode() {
    setProvManualMode(!ProvManualMode);
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <ServiceContext.Provider value={{ProvManualMode, values, handleChange}}>
      <div className={Style.container}>
        <div className={Style.menu}>
          <h1>Provisionamento Manual G08/G16 - Modo {ProvManualMode ? "Bridge" : "Router"}</h1>
          <select className={Style.select} onChange={HandleChangeMode}>
            <option>Router</option>
            <option>Bridge</option>
          </select>
        </div>
        <ProvisManual />
      </div>
    </ServiceContext.Provider>
  );
}
