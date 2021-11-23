import React from "react";
import "./Profile.css";
import {
  checkValidations,
  isEmailInvalid,
  isEmpty,
  isMinMax,
  isValidText,
} from "../../utils/validations";

const Profile = (props) => {
  const [name, setName] = React.useState(props.name);
  const [email, setEmail] = React.useState(props.email);
  const [nameErrorMessage, setNameErrorMessage] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState(false);
  const [buttonDisabled, setButtonDisabled] = React.useState(true);

  React.useEffect(() => {
    setButtonDisabled(
      emailErrorMessage ||
        nameErrorMessage ||
        (name === props.name && email === props.email)
    );
  }, [
    nameErrorMessage,
    emailErrorMessage,
    name,
    props.name,
    props.email,
    email,
  ]);

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

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name,
      email,
    });
  }
  return (
    <section className="profile">
      <h1 className="profile__title">{`Привет, ${props.name}!`}</h1>
      <form
        action=""
        className="profile__form"
        id="profile-form"
        onSubmit={handleSubmit}
      >
        <div className="profile__input-container">
          <label htmlFor="" className="profile__label">
            Имя
          </label>
          <input
            className="profile__input"
            type="text"
            value={name}
            onChange={handleChangeName}
          />
        </div>
        <span className="profile__input-err">{nameErrorMessage}</span>
        <span className="profile__input-divider"></span>
        <div className="profile__input-container">
          <label htmlFor="" className="profile__label">
            Email
          </label>
          <input
            className="profile__input"
            type="email"
            value={email}
            onChange={handleChangeEmail}
          />
        </div>
        <span className="profile__input-err">{emailErrorMessage}</span>
      </form>
      <p className="profile__response">{props.resUpdateUser}</p>
      <nav className="profile__nav">
        <button
          className="profile__button"
          type="submit"
          form="profile-form"
          disabled={buttonDisabled}
        >
          Редактировать
        </button>
        <button
          className="profile__button profile__button_pink"
          onClick={props.onSignOut}
        >
          Выйти из аккаунта
        </button>
      </nav>
    </section>
  );
};

export default Profile;
