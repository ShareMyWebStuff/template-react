import { 
    REGISTER_START,
    REGISTER_SUCCESS, 
    REGISTER_FAIL,
    REGISTER_RESET_ERRORS
} from '../../actions/types';

const initialState = {
    loading: false,
    errorMsg: {}
}


export default function (state = initialState, action){

    const {type, payload} = action;

    switch (type) {
        case REGISTER_START:
            return {
                loading: true,
                errorMsg: {}
            };
        case REGISTER_RESET_ERRORS:
            return {
                ...state,
                loading: false,
                errorMsg: {}
            };
        case REGISTER_SUCCESS:

            return {
                ...state, 
                ...payload,
                loading: false,
                errorMsg: {}
            }
        case REGISTER_FAIL:
            return {
                ...state,
                ...payload,
                token: null,
                loading: false
            }
        default:
            return state;
    }
}

