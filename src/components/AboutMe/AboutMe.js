import './AboutMe.css';
import foto from '../../images/foto.jpg'


const AboutMe = () => {
  return (
    <section className="about-me" id="about-me">
      <article className="about-me__container">
        <h2 className="about-me__title">
          Студент
        </h2>
        <div className="about-me__columns">
          <div className="about-me__column">
            <h3 className="about-me__name">
              Ангелина
            </h3>
            <p className="about-me__profession">Фронтенд-разработчик, 29 лет</p>
            <p className="about-me__text">
              На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia iusto repellat ex odio illo, incidunt reprehenderit. Voluptas quibusdam debitis hic delectus quo animi tempora temporibus quidem, ullam nostrum, laudantium qui!
            </p>
            <nav className="about-me__contacts">
              <a className="about-me__contacts-link" href="https://www.facebook.com/angelina.ryabaya" target="blank">Facebook</a>
              <a className="about-me__contacts-link" href="https://github.com/Landof92" target="blank">Github</a>
            </nav>
          </div>
          <img className="about-me__foto" src={foto} alt="фотография студента" />
        </div>
      </article>
    </section>
  )
};

export default AboutMe;