import './Input.css';


const Input = ({ label, type, err }) => {
  return (
    <div className="input">
      <label htmlFor="" className="input__label">{label}</label>
      <input className="input__field" type={type} required />
      <span className="input__error">{err}</span>
    </div>
  )
};

export default Input;