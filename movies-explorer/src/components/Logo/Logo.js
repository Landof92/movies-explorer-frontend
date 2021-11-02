import './Logo.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';


const Logo = () => {
  return (
    <Link className="logo" to="/">
      <img className="logo__img" src={logo} alt="смайлик" />
    </Link>
  )
};

export default Logo;