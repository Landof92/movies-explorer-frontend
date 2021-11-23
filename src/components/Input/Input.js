import "./Input.css";

const Input = ({ label, type, errorMessage, value, onChange }) => {
  return (
    <div className="input">
      <label htmlFor="" className="input__label">
        {label}
      </label>
      <input
        className="input__field"
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onChange}
        required
      />
      {errorMessage && <span className="input__error">{errorMessage}</span>}
    </div>
  );
};

export default Input;
