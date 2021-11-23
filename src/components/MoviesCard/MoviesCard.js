import React from "react";
import "./MoviesCard.css";

const MoviesCard = ({
  film,
  onFilmSaved,
  savedFilm,
  handleFilmDelete,
  isSavedPage,
}) => {
  function handleClick() {
    if (savedFilm) {
      handleFilmDelete(savedFilm._id);
    } else {
      onFilmSaved(film);
    }
  }

  return (
    <section className="movies-card">
      <div className="movies-card__header">
        <h2 className="movies-card__header-name">{film.nameRU}</h2>
        <p className="movies-card__header-time">{`${film.duration} минут`}</p>
      </div>
      <a
        href={film.trailerLink ? film.trailerLink : film.trailer}
        target="blank"
      >
        <img
          className="movies-card__image"
          src={
            film.image.url
              ? `https://api.nomoreparties.co${film.image.url}`
              : film.image
          }
          alt="постер фильма"
        />
      </a>
      <button
        className={`movies-card__button ${
          savedFilm && "movies-card__button_saved"
        } ${isSavedPage && "movies-card__button_delete"}`}
        onClick={handleClick}
      >
        Сохранить
      </button>
    </section>
  );
};

export default MoviesCard;
