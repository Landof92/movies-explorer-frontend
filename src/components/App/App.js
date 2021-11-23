import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Navigation from "../Navigation/Navigation";
import NotFound from "../NotFound/NotFound";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import SavedMovies from "../SavedMovies/SavedMovies";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import AuthApi from "../../utils/AuthApi";
import "./App.css";
import ProtectedRoute from "../ProtectedRoute";
import { useHistory } from "react-router-dom";
import MainApi from "../../utils/MainApi";
import MoviesApi from "../../utils/MoviesApi";
import AuthRoute from "../AuthRoute";

function App() {
  const localUser = JSON.parse(window.localStorage.getItem("user"));
  const localFilms = JSON.parse(window.localStorage.getItem("films"));
  const history = useHistory();

  const [isNavigationOpen, setIsNavigationOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState(localUser);
  const [registerErr, setRegisterErr] = React.useState("");
  const [loginErr, setLoginErr] = React.useState("");
  const [films, setFilms] = React.useState(localFilms || []);
  const [filteredFilms, setFilteredFilms] = React.useState([]);
  const [asyncState, setAsyncState] = React.useState("initial");
  const [asyncSavedState, setAsyncSavedState] = React.useState("initial");
  const [moviesErr, setMoviesErr] = React.useState("");
  const [maxMoviesVisible, setMaxMoviesVisible] = React.useState(12);
  const [moviesShowMoreStep, setMoviesShowMoreStep] = React.useState(3);
  const [savedFilms, setSavedFilms] = React.useState([]);
  const [savedFilteredFilms, setSavedFilteredFilms] = React.useState(null);
  const [updateUserInfo, setUpdateUserInfo] = React.useState("");

  const loggedIn = React.useMemo(() => {
    if (currentUser && currentUser.name && currentUser.email) {
      return true;
    }
    return false;
  }, [currentUser]);

  const slicedFilms = React.useMemo(
    () => filteredFilms.slice(0, maxMoviesVisible),
    [filteredFilms, maxMoviesVisible]
  );

  function onSignOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("films");
    setCurrentUser({});
    history.push("/");
  }

  function handleNavigationClick() {
    setIsNavigationOpen(true);
  }

  function closeNavigation() {
    setIsNavigationOpen(false);
  }

  function onRegister({ name, email, password }) {
    setRegisterErr("");
    AuthApi.checkIn(name, email, password)
      .then(() => {
        onLogin({ email, password });
      })
      .catch((err) => {
        err.json().then(({ message }) => setRegisterErr(message));
      });
  }

  function onLogin({ email, password }) {
    setLoginErr("");
    AuthApi.signIn(email, password)
      .then((data) => {
        if (data.token) {
          window.localStorage.setItem("token", data.token);
          MainApi.refreshToken(data.token);
          MainApi.getUserInfo()
            .then((res) => {
              setCurrentUser(res);
              window.localStorage.setItem("user", JSON.stringify(res));
              history.push("/movies");
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        err.json().then(({ message }) => setLoginErr(message));
      });
  }

  function getFilms(name, isShort) {
    if (!films.length) {
      setAsyncState("loading");
      MoviesApi.getInitialFilms()
        .then((apiFilms) => {
          setFilms(apiFilms);
          window.localStorage.setItem("films", JSON.stringify(apiFilms));
          setFilteredFilms(filterMovies(apiFilms, name, isShort));
        })
        .catch((err) => {
          setMoviesErr(
            "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
          );
          console.log(err);
        })
        .finally(() => {
          setAsyncState("finally");
        });
    } else setFilteredFilms(filterMovies(films, name, isShort));
  }

  const filterMovies = (films, name, isShort) => {
    return films.filter((film) => {
      const isNameMatched = film.nameRU
        .toLowerCase()
        .includes(name.toLowerCase());
      if (isShort) {
        return isNameMatched && film.duration <= 40;
      }
      return isNameMatched;
    });
  };

  const filterSavedMovies = (name, isShort) => {
    setSavedFilteredFilms(filterMovies(savedFilms, name, isShort));
  };

  function onFilmSaved(film) {
    MainApi.createMovie({
      ...film,
      image: `https://api.nomoreparties.co${film.image.url}`,
      trailer: film.trailerLink,
      thumbnail: `https://api.nomoreparties.co${film.image.url}`,
      movieId: film.id,
    })
      .then((res) => {
        setSavedFilms((state) => [...state, res]);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleFilmDelete(filmId) {
    MainApi.deleteFilm(filmId)
      .then((res) => {
        setSavedFilms((state) => state.filter((film) => film._id !== filmId));
        setSavedFilteredFilms((state) =>
          state?.filter((film) => film._id !== filmId)
        );
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleShowMore() {
    setMaxMoviesVisible(maxMoviesVisible + moviesShowMoreStep);
  }

  function handleUpdateUser({ name, email }) {
    MainApi.setUserInfo(name, email)
      .then((res) => {
        setCurrentUser(res);
        window.localStorage.setItem("user", JSON.stringify(res));
        setUpdateUserInfo("Данные успешно обновлены");
      })
      .catch((err) => {
        setUpdateUserInfo("Не удалось обновить данные");
        console.log(err);
      });
  }

  React.useEffect(() => {
    MainApi.getUserInfo()
      .then((res) => {
        setCurrentUser(res);
        window.localStorage.setItem("user", JSON.stringify(res));
      })
      .catch((err) => {
        console.log(err);
        onSignOut();
      });
  }, []);

  React.useEffect(() => {
    if (loggedIn) {
      setAsyncSavedState("loading");
      MainApi.getInitialFilms()
        .then((films) => {
          setSavedFilms(films);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setAsyncSavedState("finally");
        });
    }
  }, [loggedIn]);

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
        setMaxMoviesVisible(8);
        setMoviesShowMoreStep(2);
      }
      if (window.innerWidth <= 480) {
        setMaxMoviesVisible(5);
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  React.useEffect(() => {
    setSavedFilteredFilms(null);
  }, [history.location]);

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path="/">
            <Header
              loggedIn={loggedIn}
              isMain={true}
              onNavigation={handleNavigationClick}
            />
            <Navigation onClose={closeNavigation} isOpen={isNavigationOpen} />
            <Main />
            <Footer />
          </Route>
          <ProtectedRoute path="/movies" loggedIn={loggedIn}>
            <Header
              loggedIn={loggedIn}
              isMain={false}
              onNavigation={handleNavigationClick}
            />
            <Navigation onClose={closeNavigation} isOpen={isNavigationOpen} />
            <Movies
              getFilms={getFilms}
              films={slicedFilms}
              savedFilms={savedFilms}
              onFilmSaved={onFilmSaved}
              moviesErr={moviesErr}
              asyncState={asyncState}
              handleShowMore={handleShowMore}
              showMore={slicedFilms?.length < filteredFilms?.length}
              handleFilmDelete={handleFilmDelete}
            />
            <Footer />
          </ProtectedRoute>
          <ProtectedRoute path="/saved-movies" loggedIn={loggedIn}>
            <Header
              loggedIn={loggedIn}
              isMain={false}
              onNavigation={handleNavigationClick}
            />
            <Navigation onClose={closeNavigation} isOpen={isNavigationOpen} />
            <SavedMovies
              savedFilms={savedFilteredFilms || savedFilms}
              handleFilmDelete={handleFilmDelete}
              filterSavedMovies={filterSavedMovies}
              asyncState={asyncSavedState}
            />
            <Footer />
          </ProtectedRoute>
          <ProtectedRoute path="/profile" loggedIn={loggedIn}>
            <Header
              loggedIn={loggedIn}
              isMain={false}
              onNavigation={handleNavigationClick}
            />
            <Profile
              name={currentUser?.name}
              email={currentUser?.email}
              onSignOut={onSignOut}
              onUpdateUser={handleUpdateUser}
              resUpdateUser={updateUserInfo}
            />
            <Navigation onClose={closeNavigation} isOpen={isNavigationOpen} />
          </ProtectedRoute>
          <AuthRoute path="/signup" loggedIn={!loggedIn}>
            <Register onRegister={onRegister} authErr={registerErr} />
          </AuthRoute>
          <AuthRoute path="/signin" loggedIn={!loggedIn}>
            <Login onLogin={onLogin} authErr={loginErr} />
          </AuthRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
