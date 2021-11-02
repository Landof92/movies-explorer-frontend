import ButtonForm from '../ButtonForm/ButtonForm';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import './Auth.css';


const Auth = (props) => {
  return (
    <section className="auth">
      <div className="auth__container">
        <Logo />
        <h1 className="auth__title" >
          {props.titleText}
        </h1>
        <form className="auth__form">
          {props.children}
        </form>
        <ButtonForm buttonText={props.buttonText} />
        <nav className="auth__nav">
          <p className="auth__nav-text">{props.question}</p>
          <Link to={props.link} className="auth__nav-link">{props.linkText}</Link>
        </nav>
      </div>
    </section>
  )
};

export default Auth;