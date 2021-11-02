import './ButtonForm.css';

const ButtonForm = (props) => {
  return (
    <button className="button-form" type="submit">
      {props.buttonText}
    </button>
  )
};

export default ButtonForm;