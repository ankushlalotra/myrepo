import {
    SEARCH_REQ_ERR,
    SEARCH_REQ_START,
    SEARCH_REQ_SUCCESS
} from '../actions/search';

const initialState = {
    loading: false,
    error: null,
    success: false,
    message: '',
    result: []
};

export default function SearchReducer(state = initialState, action) {
    switch(action.type) {
        case SEARCH_REQ_START:
            return { ...state, loading: true };
        case SEARCH_REQ_ERR:
            return { ...state, loading: false, error: true, message: action.message };
        case SEARCH_REQ_SUCCESS:
            return { ...state, loading: false, success: true, result: action.payload };
            
        default:
            return state;
    }
};
