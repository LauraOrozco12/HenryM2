export function addMovieFavorite(titulo) {
    return { type: "ADD_MOVIE_FAVORITE", payload: titulo };
}

export function removeMovieFavorite(id) {
    return { type: "REMOVE_MOVIE_FAVORITE", id };
}

export function getMovies(titulo) {
    return function (dispatch) {
        return fetch("http://www.omdbapi.com/?apikey=1d2d1449&s=" + titulo)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: "GET_MOVIES", payload: json });
            });
    };
}

export function getMovieDetail(id){
    return function (dispatch) {
        return fetch(`http://www.omdbapi.com/?apikey=1d2d1449&i=${id}`)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: "GET_MOVIE_DETAIL", payload: json });
            });
    }
}