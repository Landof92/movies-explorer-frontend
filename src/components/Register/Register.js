import React, { useEffect } from "react";
import Input from "../Input/Input";
import "./Register.css";
import Auth from "../Auth/Auth";
import {
  checkValidations,
  isEmailInvalid,
  isEmpty,
  isMinMax,
  isValidText,
} from "../../utils/validations";

const Register = (props) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [nameErrorMessage, setNameErrorMessage] = React.useState(true);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState(true);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState(true);
  const [buttonDisabled, setButtonDisabled] = React.useState(true);

  useEffect(() => {
    setButtonDisabled(
      emailErrorMessage || passwordErrorMessage || nameErrorMessage
    );
  }, [nameErrorMessage, emailErrorMessage, passwordErrorMessage]);

  function handleChangeName(e) {
    setName(e.target.value);
    setNameErrorMessage(
      checkValidations([isValidText, isMinMax, isEmpty], e.target.value)
    );
  }
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
    props.onRegister({
      name,
      password,
      email,
    });
  }

  return (
    <Auth
      titleText="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      question="Уже зарегистрированы?"
      linkText="Войти"
      link="/signin"
      buttonlink={"/signin"}
      onSubmit={handleSubmit}
      textErr={props.textErr}
      disabled={buttonDisabled}
      authErr={props.authErr}
    >
      <Input
        type="text"
        label="Имя"
        onChange={handleChangeName}
        value={name}
        errorMessage={nameErrorMessage}
      />
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
        onChange={handleChangePassword}
        value={password}
        errorMessage={passwordErrorMessage}
      />
    </Auth>
  );
};

export default Register;
