import {
    USERTICKETS_REQ_ERR,
    USERTICKETS_REQ_START,
    USERTICKETS_REQ_SUCCESS
} from '../actions/usertickets';

const initialState = {
    loading: false,
    error: null,
    success: false,
    message: '',
    result: []
};

export default function userticketsReducer(state = initialState, action) {
    switch(action.type) {
        case USERTICKETS_REQ_START:
            return { ...state, loading: true };
        case USERTICKETS_REQ_ERR:
            return { ...state, loading: false, error: true, message: action.message };
        case USERTICKETS_REQ_SUCCESS:
            return { ...state, loading: false, success: true, result: action.payload };
            
        default:
            return state;
    }
};
