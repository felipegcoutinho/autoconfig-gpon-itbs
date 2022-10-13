import React from 'react'
import Style from './AimLine.module.css'
import ValueContext from "../../js/ValueContext";

export default function AimLine() {

  const { values, handleChange } = React.useContext(ValueContext);

  return (
    <div id="aimLine" className={Style.container}>
      <h2> Definição dos AIMs do Line Bridge e Router</h2>
      <div className={Style.ponContainer}>
        <div className={Style.pons}>
          <AimBridge name="aimbridge1" defaultValue={values.aimbridge1} title="PON1" handleChange={handleChange} />
          <AimRouter name="aimrouter1" defaultValue={values.aimrouter1} handleChange={handleChange} />
        </div>
        <div className={Style.pons}>
          <AimBridge name="aimbridge2" defaultValue={values.aimbridge2} title="PON 2" handleChange={handleChange} />
          <AimRouter name="aimrouter2" defaultValue={values.aimrouter2} handleChange={handleChange} />
        </div>
        <div className={Style.pons}>
          <AimBridge name="aimbridge3" defaultValue={values.aimbridge3} title="PON 3" handleChange={handleChange} />
          <AimRouter name="aimrouter3" defaultValue={values.aimrouter3} handleChange={handleChange} />
        </div>
        <div className={Style.pons}>
          <AimBridge name="aimbridge4" defaultValue={values.aimbridge4} title="PON 4" handleChange={handleChange} />
          <AimRouter name="aimrouter4" defaultValue={values.aimrouter4} handleChange={handleChange} />
        </div>
        <div className={Style.pons}>
          <AimBridge name="aimbridge5" defaultValue={values.aimbridge5} title="PON 5" handleChange={handleChange} />
          <AimRouter name="aimrouter5" defaultValue={values.aimrouter5} handleChange={handleChange} />
        </div>
        <div className={Style.pons}>
          <AimBridge name="aimbridge6" defaultValue={values.aimbridge6} title="PON 6" handleChange={handleChange} />
          <AimRouter name="aimrouter6" defaultValue={values.aimrouter6} handleChange={handleChange} />
        </div>
        <div className={Style.pons}>
          <AimBridge name="aimbridge7" defaultValue={values.aimbridge7} title="PON 7" handleChange={handleChange} />
          <AimRouter name="aimrouter7" defaultValue={values.aimrouter7} handleChange={handleChange} />
        </div>
        <div className={Style.pons}>
          <AimBridge name="aimbridge8" defaultValue={values.aimbridge8} title="PON 8" handleChange={handleChange} />
          <AimRouter name="aimrouter8" defaultValue={values.aimrouter8} handleChange={handleChange} />
        </div>
        <div className={Style.pons}>
          <AimBridge name="aimbridge9" defaultValue={values.aimbridge9} title="PON 9" handleChange={handleChange} />
          <AimRouter name="aimrouter9" defaultValue={values.aimrouter9} handleChange={handleChange} />
        </div>
        <div className={Style.pons}>
          <AimBridge name="aimbridge10" defaultValue={values.aimbridge10} title="PON 10" handleChange={handleChange} />
          <AimRouter name="aimrouter10" defaultValue={values.aimrouter10} handleChange={handleChange} />
        </div>
        <div className={Style.pons}>
          <AimBridge name="aimbridge11" defaultValue={values.aimbridge11} title="PON 11" handleChange={handleChange} />
          <AimRouter name="aimrouter11" defaultValue={values.aimrouter11} handleChange={handleChange} />
        </div>
        <div className={Style.pons}>
          <AimBridge name="aimbridge12" defaultValue={values.aimbridge12} title="PON 12" handleChange={handleChange} />
          <AimRouter name="aimrouter12" defaultValue={values.aimrouter12} handleChange={handleChange} />
        </div>
        <div className={Style.pons}>
          <AimBridge name="aimbridge13" defaultValue={values.aimbridge13} title="PON 13" handleChange={handleChange} />
          <AimRouter name="aimrouter13" defaultValue={values.aimrouter13} handleChange={handleChange} />
        </div>
        <div className={Style.pons}>
          <AimBridge name="aimbridge14" defaultValue={values.aimbridge14} title="PON 14" handleChange={handleChange} />
          <AimRouter name="aimrouter14" defaultValue={values.aimrouter14} handleChange={handleChange} />
        </div>
        <div className={Style.pons}>
          <AimBridge name="aimbridge15" defaultValue={values.aimbridge15} title="PON 15" handleChange={handleChange} />
          <AimRouter name="aimrouter15" defaultValue={values.aimrouter15} handleChange={handleChange} />
        </div>
        <div className={Style.pons}>
          <AimBridge name="aimbridge16" defaultValue={values.aimbridge16} title="PON 16" handleChange={handleChange} />
          <AimRouter name="aimrouter16" defaultValue={values.aimrouter16} handleChange={handleChange} />
        </div>
      </div>
    </div>
  )
}

function AimBridge({ handleChange, ...props }) {
  return (
    <>
      <label>Aim Bridge</label>
      <input type="number" onChange={handleChange} {...props} />
    </>
  )
}

function AimRouter({ handleChange, ...props }) {
  return (
    <>
      <label>Aim Router</label>
      <input type="number" onChange={handleChange} {...props} />
    </>
  )
}