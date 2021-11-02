import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Navigation from '../Navigation/Navigation';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';
import './App.css';


function App() {
  const [isNavigationOpen, setIsNavigationOpen] = React.useState(false);

  function handleNavigationClick() {
    setIsNavigationOpen(true);
  }

  function closeNavigation() {
    setIsNavigationOpen(false);
  }
  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Header isLogged={false} isMain={true} />
          <Main />
          <Footer />
        </Route>
        <Route path="/movies">
          <Header isLogged={true} isMain={false} onNavigation={handleNavigationClick} />
          <Navigation onClose={closeNavigation} isOpen={isNavigationOpen} />
          <Movies />
          <Footer />
        </Route >
        <Route path="/saved-movies">
          <Header isLogged={true} isMain={false} onNavigation={handleNavigationClick} />
          <Navigation onClose={closeNavigation} isOpen={isNavigationOpen} />
          <SavedMovies />
          <Footer />
        </Route >
        <Route path="/profile">
          <Header isLogged={true} isMain={false} onNavigation={handleNavigationClick} />
          <Profile name={'Angelina'} email={'lina@yandex.ru'} />
          <Navigation onClose={closeNavigation} isOpen={isNavigationOpen} />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
