import "./ButtonForm.css";

const ButtonForm = (props) => {
  return (
    <div className="button-form">
      <span className="button-form-err">{props.authErr}</span>
      <button
        className="button-form-button"
        type="submit"
        disabled={props.disabled}
        form={props.form}
      >
        {props.buttonText}
      </button>
    </div>
  );
};

export default ButtonForm;
