import './FilterCheckbox.css';


const FilterCheckbox = ({ className = "" }) => {
  return (
    <label className={`switch ${className}`}>
      <input className="switch__input-checkbox" type="checkbox" ></input>
      <span className="switch__slider switch__slider_round"></span>
      <span className="switch__input-checkbox-text">Короткометражки</span>
    </label>
  )
};

export default FilterCheckbox;

