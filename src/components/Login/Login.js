import Input from '../Input/Input';
import './Login.css';
import Auth from '../Auth/Auth';


const Login = () => {
  return (
    <Auth titleText="Рады видеть!" buttonText="Войти" question="Ещё не зарегистрированы?" linkText="Регистрация" link="/signup" buttonlink={"/movies"}>
      <Input type="email" label="E-mail" required />
      <Input type="password" label="Пароль" err="Что-то пошло не так..." required />
    </Auth>
  )
};

export default Login;