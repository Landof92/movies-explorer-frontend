import './MoviesCard.css';
import MoviePic from '../../images/pic__COLOR_pic.png'

const MoviesCard = () => {
  return (
    <section className="movies-card">
      <div className="movies-card__header">
        <h2 className="movies-card__header-name">В погоне за Бенкси</h2>
        <p className="movies-card__header-time">27 минут</p>
      </div>
      <img className="movies-card__image" src={MoviePic} alt="постер фильма" />
      <button className="movies-card__button movies-card__button_delete">Сохранить</button>
    </section>
  )
};

export default MoviesCard;