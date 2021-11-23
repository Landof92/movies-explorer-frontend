import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css";

const SavedMovies = (props) => {
  return (
    <section className="saved-movies">
      <SearchForm getFilms={props.filterSavedMovies} isSavedPage />
      <MoviesCardList
        films={props.savedFilms}
        savedFilms={props.savedFilms}
        handleFilmDelete={props.handleFilmDelete}
        asyncState={props.asyncState}
        isSavedPage
      />
    </section>
  );
};

export default SavedMovies;
