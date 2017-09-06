import {
    REPLY_REQ_ERR,
    REPLY_REQ_START,
    REPLY_REQ_SUCCESS
} from '../actions/mandrillActions.js';

const initialState = {
    loading: false,
    error: null,
    success: false,
    message: '',
    result: []
};

export default function replyReducer(state = initialState, action) {
    switch(action.type) {
        case REPLY_REQ_START:
            return { ...state, loading: true };
        case REPLY_REQ_ERR:
            return { ...state, loading: false, error: true, message: action.message };
        case REPLY_REQ_SUCCESS:
            return { ...state, loading: false, success: true, result: action.payload };
            
        default:
            return state;
    }
};
