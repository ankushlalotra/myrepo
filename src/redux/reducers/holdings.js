import {
    HOLDINGS_REQ_ERR,
    HOLDINGS_REQ_START,
    HOLDINGS_REQ_SUCCESS
} from '../actions/holdings';

const initialState = {
    loading: false,
    error: null,
    success: false,
    message: '',
    result: []
};

export default function holdingsReducer(state = initialState, action) {
    switch(action.type) {
        case HOLDINGS_REQ_START:
            return { ...state, loading: true };
        case HOLDINGS_REQ_ERR:
            return { ...state, loading: false, error: true, message: action.message };
        case HOLDINGS_REQ_SUCCESS:
            return { ...state, loading: false, success: true, result: action.payload };
            
        default:
            return state;
    }
};
