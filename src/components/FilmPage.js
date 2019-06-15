import React from 'react';
import FilmsData from './data.json';
import '../styles/FilmPage.css';
import logo from '../styles/puff-1.svg';

class FilmPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: undefined,
            wrapper: undefined,
            name: undefined,
            genre: undefined,
            isDataFetched: false
        };
    }

    componentDidMount() {
        const id = this.props.id;
        console.log(FilmsData.latestFilms.concat(FilmsData.top10).filter(film => film.id === parseInt(id)));
        this.setState({
            id: parseInt(id),
            wrapper: FilmsData.latestFilms.concat(FilmsData.top10).filter(film => film.id === parseInt(id))[0].wrapper,
            name: FilmsData.latestFilms.concat(FilmsData.top10).filter(film => film.id === parseInt(id))[0].filmName,
            genre: FilmsData.latestFilms.concat(FilmsData.top10).filter(film => film.id === parseInt(id))[0].filmGenre,
            isDataFetched: true
        })
    }

    render() {
        if (this.state.isDataFetched) {
            return (
                <div>
                    <div id="card">
                        <img height="300" src={this.state.wrapper} alt="fail to load" />
                        <div id="description">
                            <h2>#{this.state.id}</h2>
                            <h2>{this.state.name}</h2>
                            <h2>Genre: {this.state.genre}</h2>
                        </div>
                    </div>
                    <hr />
                </div>
            );
        }
        else {
            return (
                <div id="loading">
                    <h1>Loading...  <img src={logo} alt="ooops!"></img></h1>
                </div>
            );
        }
    }
}

export default FilmPage;