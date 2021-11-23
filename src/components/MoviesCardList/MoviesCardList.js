import "./MoviesCardList.css";
import Preloader from "../Preloader/Preloader";
import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = (props) => {
  return (
    <section className="movies-cardList">
      {props.asyncState === "finally" && !props.films.length && (
        <p className="movies-cardList-not-found">Ничего не найдено :(</p>
      )}
      {props.moviesErr && (
        <p className="movies-cardList-not-found">{props.moviesErr}</p>
      )}
      {props.asyncState === "loading" && <Preloader />}

      {!!props.films?.length && (
        <div className="movies-cardList__grid-container">
          {props.films.map((film) => (
            <MoviesCard
              film={film}
              onFilmSaved={props.onFilmSaved}
              key={props.isSavedPage ? film.movieId : film.id}
              handleFilmDelete={props.handleFilmDelete}
              savedFilm={
                props.isSavedPage
                  ? film
                  : props.savedFilms?.find?.(
                      (savedFilm) =>
                        savedFilm.movieId === film.id ||
                        savedFilm.id === film.id
                    )
              }
              isSavedPage={props.isSavedPage}
            />
          ))}
        </div>
      )}

      {props.showMore && (
        <button
          className="movies-cardList__button"
          onClick={props.handleShowMore}
        >
          Ещё
        </button>
      )}
    </section>
  );
};

export default MoviesCardList;
