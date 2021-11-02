import './Navigation.css';
import { Link } from 'react-router-dom';
import Account from '../Account/Account';

const Navigation = (props) => {
  const handleOverlayClose = (event) => {
    if (event.target === event.currentTarget) {
      props.onClose()
    }
  }
  return (
    <section onClick={handleOverlayClose} className={`navigation ${props.isOpen && `navigation_opened`}`}>
      <div className="navigation__container">
        <button className="navigation__close" type="button" onClick={props.onClose} />
        <nav className="navigation__links">
          <ul className="navigation__links-list">
            <li className="navigation__links-item">
              <Link className="navigation__link" to="/" onClick={props.onClose}>Главная</Link>
            </li>
            <li className="navigation__links-item">
              <Link className="navigation__link navigation__link_anderline" to="/movies" onClick={props.onClose}>Фильмы</Link>
            </li>
            <li className="navigation__links-item">
              <Link className="navigation__link" to="/saved-movies" onClick={props.onClose}>Сохранённые фильмы</Link>
            </li>
          </ul>
          <Account onClick={props.onClose} />
        </nav>
      </div>
    </section>
  )
};

export default Navigation;