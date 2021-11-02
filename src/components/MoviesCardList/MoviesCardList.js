import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';


const MoviesCardList = (props) => {
  return (
    <section className="movies-cardList">
      <div className="movies-cardList__grid-container">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </div>
      {props.showMore && (<button className="movies-cardList__button">Ещё</button>)}
    </section>
  )
};

export default MoviesCardList;