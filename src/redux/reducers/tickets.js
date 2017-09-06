import {
    SUPPORT_REQ_ERR,
    SUPPORT_REQ_START,
    SUPPORT_REQ_SUCCESS
} from '../actions/tickets';

const initialState = {
    loading: false,
    error: null,
    success: false,
    message: '',
    result: []
};

export default function supportReducer(state = initialState, action) {
    switch(action.type) {
        case SUPPORT_REQ_START:
            return { ...state, loading: true };
        case SUPPORT_REQ_ERR:
            return { ...state, loading: false, error: true, message: action.message };
        case SUPPORT_REQ_SUCCESS:
            return { ...state, loading: false, success: true, result: action.payload };
            
        default:
            return state;
    }
};
