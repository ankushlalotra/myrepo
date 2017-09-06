import {
    USER_REQ_ERR,
    USER_REQ_START,
    USER_REQ_SUCCESS
} from '../actions/index';

const initialState = {
    loading: false,
    error: null,
    success: false,
    message: '',
    Users: []
};

export default function userReducer(state = initialState, action) {
    switch(action.type) {
        case USER_REQ_START:
            return { ...state, loading: true };
        case USER_REQ_ERR:
            return { ...state, loading: false, error: true, message: action.message };
        case USER_REQ_SUCCESS:
            return { ...state, loading: false, success: true, Users: action.payload };
            
        default:
            return state;
    }
};
