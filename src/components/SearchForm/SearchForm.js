import React from "react";
import "./SearchForm.css";
import Icon from "../../images/icon.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

const SearchForm = (props) => {
  const [name, setName] = React.useState("");
  const [err, setErr] = React.useState("");
  const [isShort, setIsShort] = React.useState(false);

  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeCheckbox(e) {
    setIsShort(e.target.checked);
    handleSubmit(undefined, e.target.checked);
  }
  function handleSubmit(e, isShortValue) {
    e?.preventDefault();
    if (name || props.isSavedPage) {
      setErr("");
      return props.getFilms(
        name,
        isShortValue != null ? isShortValue : isShort
      );
    }
    return setErr("Нужно ввести ключевое слово");
  }
  return (
    <section className="search-form">
      <form className="search-form__form" onSubmit={handleSubmit}>
        <label htmlFor="search" className="search-form__input-container">
          <img src={Icon} alt="лупа" className="search-form__input-img" />
        </label>
        <input
          className="search-form__input"
          type="search"
          name="search"
          placeholder="Фильм"
          id="search"
          value={name}
          onChange={handleChangeName}
        />
        <button className="search-form__button" type="submit"></button>
        <div className="search-form__divider"></div>
        <FilterCheckbox
          isShort={isShort}
          handleChangeCheckbox={handleChangeCheckbox}
        />
      </form>
      <FilterCheckbox
        className="switch_mobile"
        isShort={isShort}
        handleChangeCheckbox={handleChangeCheckbox}
      />
      <p className="search-form__error">{err}</p>
      <div className="search-form__divider-horizon"></div>
    </section>
  );
};
export default SearchForm;
