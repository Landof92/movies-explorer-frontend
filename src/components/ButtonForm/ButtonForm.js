import './ButtonForm.css';
import { useHistory } from 'react-router-dom';

const ButtonForm = (props) => {
  const { push } = useHistory();
  return (
    <button className="button-form" type="button" onClick={() => { push(props.buttonlink) }}>
      {props.buttonText}
    </button>
  )
};

export default ButtonForm;