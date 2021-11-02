import './Account.css';
import { Link } from 'react-router-dom';

const Account = (props) => {
  return (
    <Link className="account" to="/profile" onClick={props.onClick}>Аккаунт
      <div className="account__img"></div>
    </Link>
  )
};

export default Account;
