import {FETCH_MOVIES} from "../actions/types";

const initialState = {
    items:[],
    item:{}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_MOVIES:
            return {
                ...state,
            }
        default:
            return state
    }
}
