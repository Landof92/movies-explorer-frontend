import Input from '../Input/Input';
import './Register.css';
import Auth from '../Auth/Auth';


const Register = (props) => {
  return (
    <Auth titleText="Добро пожаловать!" buttonText="Зарегистрироваться" question="Уже зарегистрированы?" linkText="Войти" link="/signin">
      <Input type="text" label="Имя" required />
      <Input type="email" label="E-mail" required />
      <Input type="password" label="Пароль" err="Что-то пошло не так..." required />
    </Auth>
  )
};

export default Register;