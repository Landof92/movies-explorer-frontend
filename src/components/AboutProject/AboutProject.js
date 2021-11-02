import './AboutProject.css';


const AboutProject = () => {
  return (
    <section className="about-project" id="about-prodject">
      <article className="about-project__container" >
        <h2 className="about-project__title" >
          О проекте
        </h2>
        <div className="about-project__columns">
          <div className="about-project__column">
            <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__text" >Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className="about-project__column">
            <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className="about-project__table">
          <div className="about-project__table-column-Back-end">
            <div className="about-project__table-cell about-project__table-cell_green-background">1 неделя</div>
            <div className="about-project__table-cell about-project__table-cell_gray-text">Back-end</div>
          </div>
          <div className="about-project__table-column-Front-end">
            <div className="about-project__table-cell about-project__table-cell_gray-background">4 недели</div>
            <div className="about-project__table-cell about-project__table-cell_gray-text">Front-end</div>
          </div>
        </div>
      </article>
    </section>
  )
};

export default AboutProject;
