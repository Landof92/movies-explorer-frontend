import React, { useEffect } from "react";
import Input from "../Input/Input";
import "./Login.css";
import Auth from "../Auth/Auth";
import {
  checkValidations,
  isEmailInvalid,
  isEmpty,
} from "../../utils/validations";

const Login = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailErrorMessage, setEmailErrorMessage] = React.useState(true);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState(true);
  const [buttonDisabled, setButtonDisabled] = React.useState(true);

  useEffect(() => {
    setButtonDisabled(emailErrorMessage || passwordErrorMessage);
  }, [emailErrorMessage, passwordErrorMessage]);

  function handleChangeEmail(e) {
    setEmail(e.target.value);
    setEmailErrorMessage(
      checkValidations([isEmailInvalid, isEmpty], e.target.value)
    );
  }
  function handleChangePassword(e) {
    setPassword(e.target.value);
    setPasswordErrorMessage(isEmpty(e.target.value));
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.onLogin({
      password,
      email,
    });
  }
  return (
    <Auth
      titleText="Рады видеть!"
      buttonText="Войти"
      question="Ещё не зарегистрированы?"
      linkText="Регистрация"
      link="/signup"
      onSubmit={handleSubmit}
      textErr={props.textErr}
      disabled={buttonDisabled}
      authErr={props.authErr}
    >
      <Input
        type="email"
        label="E-mail"
        onChange={handleChangeEmail}
        value={email}
        errorMessage={emailErrorMessage}
      />
      <Input
        type="password"
        label="Пароль"
        err="Что-то пошло не так..."
        onChange={handleChangePassword}
        value={password}
        errorMessage={passwordErrorMessage}
      />
    </Auth>
  );
};

export default Login;
