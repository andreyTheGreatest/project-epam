import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import FilmPage from './components/FilmPage';
import FilmsData from './components/data.json';
import Contacts from './components/Contacts';
import MainPage from './components/MainPage';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div id="body">
          <Route exact path="/" render={(props) => <MainPage {...props} data={FilmsData.latestFilms} name="Latest" />} />
          <Route path="/top10" render={(props) => <MainPage {...props} data={FilmsData.top10} name="Top 10" />} />
          <Route path="/allFilms" render={(props) => <MainPage {...props} data={FilmsData.latestFilms.concat(FilmsData.top10)} name="All Films" />} />
          <Route path="/action" render={(props) => <MainPage {...props} data={FilmsData.latestFilms.concat(FilmsData.top10).filter(film => film.filmGenre === "Action")} name="Action" />} />
          <Route path="/adventure" render={(props) => <MainPage {...props} data={FilmsData.latestFilms.concat(FilmsData.top10).filter(film => film.filmGenre === "Adventure")} name="Adventure" />} />
          <Route path="/comedy" render={(props) => <MainPage {...props} data={FilmsData.latestFilms.concat(FilmsData.top10).filter(film => film.filmGenre === "Comedy")} name="Comedy" />} />
          <Route path="/drama" render={(props) => <MainPage {...props} data={FilmsData.latestFilms.concat(FilmsData.top10).filter(film => film.filmGenre === "Drama")} name="Drama" />} />
          <Route exact path="/films/:id" component={MainPage} />
          <Route path="/contacts" component={Contacts} />
        </div>
      </Router>
    );
  }
}

export default App;
