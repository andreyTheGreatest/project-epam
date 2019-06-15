import React from 'react';
import NavBar from './NavBar';
import FilmList from './FilmList';
import '../styles/MainPage.css';
import FilmPage from './FilmPage';

class MainPage extends React.Component {
    render() {
        if (this.props.name) {
            return (
                <div class="header">
                    <NavBar />
                    <div class="iframe-container">
                        <iframe title="u" src="https://www.youtube.com/embed/6ZfuNTqbHE8?playlist=6ZfuNTqbHE8&loop=1&autoplay=1">
                        </iframe>
                    </div>
                    <hr class="hr" />
                    <FilmList data={this.props.data} name={this.props.name}/>
                </div>
            );
        }
        else {
            const { match: { params } } = this.props;
            return (
                <div class="header">
                    <NavBar />
                    <div class="iframe-container">
                        <iframe title="u" src="https://www.youtube.com/embed/6ZfuNTqbHE8?playlist=6ZfuNTqbHE8&loop=1&autoplay=1">
                        </iframe>
                    </div>
                    <hr class="hr" />
                    <FilmPage id={params.id}/>
                </div>
            );
        }
    }
}

export default MainPage;