import {
    USERUPDATE_REQ_ERR,
    USERUPDATE_REQ_START,
    USERUPDATE_REQ_SUCCESS
} from '../actions/userUpdate';

const initialState = {
    loading: false,
    error: null,
    success: false,
    message: '',
    result: []
};

export default function userUpdateReducer(state = initialState, action) {
    switch(action.type) {
        case USERUPDATE_REQ_START:
            return { ...state, loading: true };
        case USERUPDATE_REQ_ERR:
            return { ...state, loading: false, error: true, message: action.message };
        case USERUPDATE_REQ_SUCCESS:
            return { ...state, loading: false, success: true, result: action.payload };
            
        default:
            return state;
    }
};
