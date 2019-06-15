import React from 'react';
import '../styles/Film.css'

class Film extends React.Component {

    render() {
        const url = `/films/${this.props.data.id}`
        return (
            <a href={url}>
                <div id="filmcard" key={this.props.data.id}>
                    <img height="300" src={this.props.data.wrapper} alt="fail to load" />
                    <h5>{this.props.data.filmName}</h5>
                    <h6>Genre: {this.props.data.filmGenre}</h6>
                </div>
            </a>
        );
    }
}

export default Film;