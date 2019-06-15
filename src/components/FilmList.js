import React from 'react';
import Film from './Film';
import '../styles/FilmList.css';

class FilmList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            films: this.props.data,
            currentPage: 1,
            filmsPerPage: 3,
            filtered: [],
            input: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.setState({
            filtered: this.props.data
        })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            filtered: nextProps.data
        })
    }

    handleChange(e) {
        let curList = [];
        let newList = [];
        if (e.target.value !== "") {

            curList = this.props.data;
            newList = curList.filter(film => {
                const lc_filmName = film.filmName.toLowerCase();
                const filter = e.target.value.toLowerCase();
                return lc_filmName.includes(filter);
            });
            console.log(newList);
        }
        else {
            newList = this.props.data;
        }
        this.setState({
            filtered: newList,
            input: e.target.value
        })
    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    render() {
        const { filtered, currentPage, filmsPerPage } = this.state;
        // Logic for displaying todos
        const indexOfLastFilm = currentPage * filmsPerPage;
        const indexOfFirstFilm = indexOfLastFilm - filmsPerPage;
        const currentFilms = filtered.slice(indexOfFirstFilm, indexOfLastFilm);

        const renderFilms = currentFilms.map((film) => {
            return <Film data={film} />;
        });

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(filtered.length / filmsPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <h1
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                    class="number"
                >
                    {number}
                </h1>
            );
        });
        return (
            <div id="all">
                <div class="subHeader">
                    <h1 class="text">{this.props.name}</h1>
                    <form class="form-inline my-2 my-lg-0" id="searchForm">
                        <input type="text" onChange={this.handleChange} name="search" class="form-control mr-sm-2" placeholder="Search by name..."
                            aria-label="Search" />
                    </form>
                </div>
                <br />
                <div id="list">
                    {renderFilms}
                </div>
                <div id="page-numbers">
                    {renderPageNumbers}
                </div>
            </div>
        );
        
    }
}

export default FilmList;