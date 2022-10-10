import React from 'react'
import Styles from './Pons.module.css'
import initialValues from '../../js/values.js'
import ProfileVlan from './Forms';

export function Pons() {
  const [values, setValues] = React.useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <><div className={Styles.container}>
      <h3>Configuração de VLANs das PONs</h3>

      <div className={Styles.uplinkselect}>
        <label>UPLINK</label>

        <select name="uplinkpon1">
          <option value="eth 1">eth 1</option>
          <option value="eth 2">eth 2</option>
          <option value="eth 3">eth 3</option>
          <option value="eth 4">eth 4</option>
          <option value="eth 5">eth 5</option>
          <option value="eth 6">eth 6</option>
          <option value="eth 7">eth 7</option>
          <option value="eth 8">eth 8</option>
          <option value="xeth 1">xeth 1</option>
          <option value="xeth 2">xeth 2</option>
        </select>

      </div>

      <div className={Styles.gpon}>
        <div className={Styles.pons}>
          <Aim name="aimvlanpon1" defaultValue={values.aimvlanpon1} title="PON 1" handleChange={handleChange} />
          <Vlans name="vlanpon1" defaultValue={values.vlanpon1} handleChange={handleChange} />
        </div>
        <div className={Styles.pons}>
          <Aim name="aimvlan2" defaultValue={values.aimvlanpon2} title="PON 2" handleChange={handleChange} />
          <Vlans name="vlanpon2" defaultValue={values.vlanpon2} handleChange={handleChange} />
        </div>
        <div className={Styles.pons}>
          <Aim name="aimvlanpon3" defaultValue={values.aimvlanpon3} title="PON 3" handleChange={handleChange} />
          <Vlans name="vlanpon3" defaultValue={values.vlanpon3} handleChange={handleChange} />
        </div>
        <div className={Styles.pons}>
          <Aim name="aimvlanpon4" defaultValue={values.aimvlanpon4} title="PON 4" handleChange={handleChange} />
          <Vlans name="vlanpon4" defaultValue={values.vlanpon4} handleChange={handleChange} />
        </div>
        <div className={Styles.pons}>
          <Aim name="aimvlanpon5" defaultValue={values.aimvlanpon5} title="PON 5" handleChange={handleChange} />
          <Vlans name="vlanpon5" defaultValue={values.vlanpon5} handleChange={handleChange} />
        </div>
        <div className={Styles.pons}>
          <Aim name="aimvlanpon6" defaultValue={values.aimvlanpon6} title="PON 6" handleChange={handleChange} />
          <Vlans name="vlanpon6" defaultValue={values.vlanpon6} handleChange={handleChange} />
        </div>
        <div className={Styles.pons}>
          <Aim name="aimvlanpon7" defaultValue={values.aimvlanpon7} title="PON 7" handleChange={handleChange} />
          <Vlans name="vlanpon7" defaultValue={values.vlanpon7} handleChange={handleChange} />
        </div>
        <div className={Styles.pons}>
          <Aim name="aimvlanpon8" defaultValue={values.aimvlanpon8} title="PON 8" handleChange={handleChange} />
          <Vlans name="vlanpon8" defaultValue={values.vlanpon8} handleChange={handleChange} />
        </div>
        <div className={Styles.pons}>
          <Aim name="aimvlanpon9" defaultValue={values.aimvlanpon9} title="PON 9" handleChange={handleChange} />
          <Vlans name="vlanpon9" defaultValue={values.vlanpon9} handleChange={handleChange} />
        </div>
        <div className={Styles.pons}>
          <Aim name="aimvlanpon10" defaultValue={values.aimvlanpon10} title="PON 10" handleChange={handleChange} />
          <Vlans name="vlanpon10" defaultValue={values.vlanpon10} handleChange={handleChange} />
        </div>
        <div className={Styles.pons}>
          <Aim name="aimvlanpon11" defaultValue={values.aimvlanpon11} title="PON 11" handleChange={handleChange} />
          <Vlans name="vlanpon11" defaultValue={values.vlanpon11} handleChange={handleChange} />
        </div>
        <div className={Styles.pons}>
          <Aim name="aimvlanpon12" defaultValue={values.aimvlanpon12} title="PON 12" handleChange={handleChange} />
          <Vlans name="vlanpon12" defaultValue={values.vlanpon12} handleChange={handleChange} />
        </div>
        <div className={Styles.pons}>
          <Aim name="aimvlanpon13" defaultValue={values.aimvlanpon13} title="PON 13" handleChange={handleChange} />
          <Vlans name="vlanpon13" defaultValue={values.vlanpon13} handleChange={handleChange} />
        </div>
        <div className={Styles.pons}>
          <Aim name="aimvlanpon14" defaultValue={values.aimvlanpon14} title="PON 14" handleChange={handleChange} />
          <Vlans name="vlanpon14" defaultValue={values.vlanpon14} handleChange={handleChange} />
        </div>
        <div className={Styles.pons}>
          <Aim name="aimvlanpon15" defaultValue={values.aimvlanpon15} title="PON 15" handleChange={handleChange} />
          <Vlans name="vlanpon15" defaultValue={values.vlanpon15} handleChange={handleChange} />
        </div>
        <div className={Styles.pons}>
          <Aim name="aimvlanpon16" defaultValue={values.aimvlanpon16} title="PON 16" handleChange={handleChange} />
          <Vlans name="vlanpon16" defaultValue={values.vlanpon16} handleChange={handleChange} />
        </div>

      </div>
    </div>
      <ProfileVlan />
    </>
  )
}

export default Pons

function Aim({ handleChange, ...props }) {
  return (
    <>
      <h5>{props.title}</h5>
      <label>AIM</label>
      <input type="number" onChange={handleChange} {...props} />
    </>
  )
}

function Vlans({ handleChange, ...props }) {
  return (
    <>
      <label>VLAN</label>
      <input type="number" onChange={handleChange} {...props} />
    </>
  )
}


