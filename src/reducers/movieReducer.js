import {FETCH_MOVIES, FETCH_REC} from "../actions/types";

const initialState = {
    movies:[],
    recMovies:[],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_MOVIES:
            return {
                ...state,
                movies:action.payload
            }
        case FETCH_REC:
            return {
                ...state,
                recMovies:action.payload
            }
        default:
            return state
    }
}
