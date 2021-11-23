import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

const Movies = (props) => {
  return (
    <section className="movies">
      <SearchForm getFilms={props.getFilms} />
      <MoviesCardList
        savedFilms={props.savedFilms}
        showMore={props.showMore}
        asyncState={props.asyncState}
        films={props.films}
        moviesErr={props.moviesErr}
        handleShowMore={props.handleShowMore}
        onFilmSaved={props.onFilmSaved}
        handleFilmDelete={props.handleFilmDelete}
      />
    </section>
  );
};

export default Movies;
