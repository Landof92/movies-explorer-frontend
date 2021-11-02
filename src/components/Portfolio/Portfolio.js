import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__title">
          Портфолио
        </h2>
        <nav className="portfolio__links">
          <ul className="portfolio__links-list">
            <li className="portfolio__links-item">
              <a className="portfolio__link" href="https://github.com/Landof92/how-to-learn" target="blank">
                Статичный сайт
                <div className="portfolio__link-pointer">↗</div>
              </a>
            </li>
            <li className="portfolio__links-item">
              <a className="portfolio__link" href="https://github.com/Landof92/russian-travel" target="blank">Адаптивный сайт
                <div className="portfolio__link-pointer">↗</div>
              </a>
            </li>
            <li className="portfolio__links-item">
              <a className="portfolio__link" href="https://github.com/Landof92/react-mesto-api-full" target="blank">Одностраничное приложение
                <div className="portfolio__link-pointer">↗</div>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  )
};

export default Portfolio;