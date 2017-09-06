
import {
    USERDET_REQ_ERR,
    USERDET_REQ_START,
    USERDET_REQ_SUCCESS
} from '../actions/userdetails';

const initialState = {
    loading: false,
    error: null,
    success: false,
    message: '',
    result: []
};

export default function userdetReducer(state = initialState, action) {
    switch(action.type) {
        case USERDET_REQ_START:
            return { ...state, loading: true };
        case USERDET_REQ_ERR:
            return { ...state, loading: false, error: true, message: action.message };
        case USERDET_REQ_SUCCESS:
            return { ...state, loading: false, success: true, result: action.payload };
            
        default:
            return state;
    }
};
