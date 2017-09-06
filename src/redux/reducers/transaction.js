import {
    TRANSACTION_REQ_ERR,
    TRANSACTION_REQ_START,
    TRANSACTION_REQ_SUCCESS
} from '../actions/transaction';

const initialState = {
    loading: false,
    error: null,
    success: false,
    message: '',
    result: []
};

export default function transactionReducer(state = initialState, action) {
    switch(action.type) {
        case TRANSACTION_REQ_START:
            return { ...state, loading: true };
        case TRANSACTION_REQ_ERR:
            return { ...state, loading: false, error: true, message: action.message };
        case TRANSACTION_REQ_SUCCESS:
            return { ...state, loading: false, success: true, result: action.payload };
            
        default:
            return state;
    }
};
