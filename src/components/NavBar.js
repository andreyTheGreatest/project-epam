import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const StyledLink = styled(Link)`
    text-decoration: none;
    color: grey;
    &:hover {
        color: black;
        text-decoration: none;
    }
`;

class NavBar extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand"><Link style={{textDecoration: 'none', color: 'black'}} to="/">CinemaCity</Link></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" ><StyledLink to="/">Home</StyledLink></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" ><StyledLink  to="/top10">Top 10</StyledLink></a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                            Genres
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item"><StyledLink  to="/action">Action</StyledLink></a>
                            <a class="dropdown-item"><StyledLink  to="/adventure">Adventure</StyledLink></a>
                            <a class="dropdown-item"><StyledLink  to="/comedy">Comedy</StyledLink></a>
                            <a class="dropdown-item"><StyledLink  to="/drama">Drama</StyledLink></a>

                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item"><StyledLink  to="/allFilms">All Filmes</StyledLink></a>

                        </div>

                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link" href="/contacts">Contacts</a>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0" id="searchForm">
                    
                </form>
            </div>
        </nav>
        );
    }
}

export default NavBar;