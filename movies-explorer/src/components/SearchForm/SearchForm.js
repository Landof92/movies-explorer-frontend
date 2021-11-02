import './SearchForm.css';
import Icon from '../../images/icon.svg'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const SearchForm = () => {
  return (
    <section className="search-form">
      <form className="search-form__form">
        <label htmlFor="search" className="search-form__input-container">
          <img src={Icon} alt="лупа" className="search-form__input-img" />
        </label>
        <input className="search-form__input" type="search" name="search" placeholder="Фильм" id="search" />
        <span className="search-form__input-error"></span>
        <input className="search-form__button" type="button"></input>
        <div className="search-form__divider"></div>
        <FilterCheckbox />
      </form>
      <FilterCheckbox className="switch_mobile" />
      <div className="search-form__divider-horizon"></div>
    </section>
  )
};
export default SearchForm;