import {FETCH_MOVIES, ADD_MOVIE, DELETE_MOVIE } from "./types";

export const fetchMovies= () => dispatch => {
    fetch('myDate.json')
        .then(res => res.json())
        .then(data => console.log(data))
}
export const addMovie = postData => dispatch => {
    fetch('../asserts/myDate.json', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(post =>
            dispatch({
                type: ADD_MOVIE,
                payload: post
            })
        );
};
