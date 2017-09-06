import {
    ESCLATE_REQ_ERR,
    ESCLATE_REQ_START,
    ESCLATE_REQ_SUCCESS
} from '../actions/esclatetomanagement.js';

const initialState = {
    loading: false,
    error: null,
    success: false,
    message: '',
    result: []
};

export default function esclateReducer(state = initialState, action) {
    switch(action.type) {
        case ESCLATE_REQ_START:
            return { ...state, loading: true };
        case ESCLATE_REQ_ERR:
            return { ...state, loading: false, error: true, message: action.message };
        case ESCLATE_REQ_SUCCESS:
            return { ...state, loading: false, success: true, result: action.payload };
            
        default:
            return state;
    }
};
