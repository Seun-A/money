import './form-input.style.scss'

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="form-input-container d-flex">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
  </div>
)

export default FormInput;
