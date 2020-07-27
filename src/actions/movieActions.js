import {FETCH_MOVIES, FETCH_REC, DELETE_MYLIST,DELETE_REC,PUSH_MYLIST,PUSH_REC} from "./types";
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

export const deleteMylist= (post) => dispatch => {
    dispatch({
        type:DELETE_MYLIST,
        payload: post
    })
}

export const pushRec= (post) => dispatch => {
    dispatch({
        type:PUSH_REC,
        payload: post
    })
}

export const deleteRec= (post) => dispatch => {
    dispatch({
        type:DELETE_REC,
        payload: post
    })
}

export const pushMylist= (post) => dispatch => {
    dispatch({
        type:PUSH_MYLIST,
        payload: post
    })
}


