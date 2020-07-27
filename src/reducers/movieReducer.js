import {FETCH_MOVIES, FETCH_REC,  DELETE_MYLIST,DELETE_REC,PUSH_MYLIST,PUSH_REC} from "../actions/types";

const initialState = {
    movies:[],
    recMovies:[],
    item:{}
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
        case DELETE_MYLIST:
            return {
                ...state,
                item:action.payload
            }
        case DELETE_REC:
            return {
                ...state,
                item:action.payload
            }
        case PUSH_MYLIST:
            return {
                ...state,
                item:action.payload
            }
        case PUSH_REC:
            return {
                ...state,
                item:action.payload
            }
        default:
            return state
    }
}
