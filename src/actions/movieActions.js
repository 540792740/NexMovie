import {FETCH_MOVIES, ADD_MOVIE, DELETE_MOVIE, FETCH_REC} from "./types";
import Recommendation from '../asserts/Recommendations.json'
import myData from '../asserts/mylist.json'

export const fetchMovies= () => dispatch => {
    dispatch({
        type:FETCH_MOVIES,
        payload: myData
    })
}
export const fetchRec= () => dispatch => {
    dispatch({
        type:FETCH_REC,
        payload: Recommendation
    })
}

// deleteMylist, pushRec, deleteRec, pushMylist

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
