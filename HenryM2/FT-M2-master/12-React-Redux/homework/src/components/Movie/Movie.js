import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {
    componentDidMount(){
        const movieID=this.props.match.params.id;
        this.props.getMovieDetail(movieID);
    }

    render() {
        return (
            <div className="movie-detail">
                <h1>Title: {this.props.movie.Title}</h1>
                <h2>Year: {this.props.movie.Year}</h2>
                <h2>Rated: {this.props.movie.Rated}</h2>
                <h2>Genre: {this.props.movie.Genre}</h2>
                <h2>Runtime: {this.props.movie.Runtime}</h2>
                <img src={this.props.movie.Poster}></img>
            </div>
        );
    }
}
function mapStateToProps(state){
    return {
        movie: state.movieDetail
    }
}

function mapDispatchToProps(dispatch){
    return {
        getMovieDetail: movieID => dispatch(getMovieDetail(movieID))
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Movie);