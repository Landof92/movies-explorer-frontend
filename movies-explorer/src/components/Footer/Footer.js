import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
        <div className="footer__columns">
          <p className="footer__copyright">
            &copy;{new Date().getFullYear()}
          </p>
          <nav className="footer__links">
            <ul className="footer__links-list">
              <li className="footer__links-item">
                <a href="https://practicum.yandex.ru" className="footer__link" target="blank">Яндекс.Практикум</a>
              </li>
              <li className="footer__links-item">
                <a href="https://github.com/Landof92" className="footer__link" target="blank">Github</a>
              </li>
              <li className="footer__links-item">
                <a href="https://www.facebook.com/angelina.ryabaya" className="footer__link" target="blank">Facebook</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;