import { 
    REGISTER_SUCCESS, 
    REGISTER_FAIL, 
    USER_LOADED, 
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    RESET_AUTH_ERRORS
} from '../../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: false,
    user: null
}


export default function (state = initialState, action){

    const {type, payload} = action;

    switch (type) {
        case RESET_AUTH_ERRORS:
            return {
                ...state,
                error: null
            };
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload,
                error: null
            };

        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            console.log ('LOGIN_SUCCESS or REGISTER SUCCESS (Reducer)')
            console.log (payload);
            localStorage.setItem('token', payload.token);

            return {
                ...state, 
                ...payload, 
                isAuthenticated: true, 
                loading:true,
                error: null
            }
        case REGISTER_FAIL:
        case LOGIN_FAIL:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null,
                error:payload.error
            }
        case AUTH_ERROR:
        case LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null
            }
        default:
            return state;
    }
}

