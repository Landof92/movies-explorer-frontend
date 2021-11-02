import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Account from '../Account/Account';
import Logo from '../Logo/Logo';

const Header = (props) => {
  return (
    <section className={`header ${props.isMain && 'header_theme_main'}`}>
      <div className="header__container">
        <nav className="header__nav">
          <Logo />
          <div className="header__nav-left">
            {props.isLogged && (
              <>
                <Link className="header__link header_link_theme_authorized header_link_inactive" to="/movies">
                  Фильмы
                </Link>
                <Link className="header__link" to="/saved-movies">
                  Сохраненные фильмы
                </Link>
              </>
            )}
          </div>
          <div className="header__nav-right">
            {props.isLogged ?
              (<div className="header__account">
                <Account />
              </div>
              ) :
              (<>
                <Link className="header__link" to="/signup">Регистрация</Link>
                <Link className="header__link header_link_theme_button" to="/signin">Войти</Link>
              </>)
            }
          </div>
          {props.isLogged && (
            <div className="header__nav-right-mobile">
              <div className="header__nav-button" onClick={props.onNavigation}>
              </div>
            </div>
          )}
        </nav>
      </div>
    </section >
  )
};

export default Header;