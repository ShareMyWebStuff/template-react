import { 
    USER_LOADING_START,
    USER_LOADING_SUCCESS,
    USER_LOADING_FAIL,

    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGIN_RESET_ERRORS, 

    LOGOUT
} from '../../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    loadingUser: false,
    loading: false,
    user: null,
    errorMsg: {}
}

//
// Login reducer
//
// This function creates the login state based on the action creator passed in.
//
export default function (state = initialState, action){

    const {type, payload} = action;

    switch (type) {

        case USER_LOADING_START:
            return {
                ...state,
                errorMsg: {},
                loadingUser: true
            };
        case USER_LOADING_SUCCESS:
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loadingUser: false
            };
        case USER_LOADING_FAIL:
            return {
                ...state,
                ...payload,
                isAuthenticated: false,
                loadingUser: false
            };

        case LOGIN_START:
            return {
                ...state, 
                token: null,
                isAuthenticated: false,
                loading:true,
                errorMsg: {}
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token);

            return {
                ...state, 
                ...payload, 
                isAuthenticated: true, 
                loading:false,
                errorMsg: {}
            }
        case LOGIN_FAIL:
            localStorage.removeItem('token');
            return {
                ...state,
                ...payload,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null
            }
        case LOGIN_RESET_ERRORS:
            localStorage.removeItem('token');
            return {
                ...state,
                loading: false,
                errorMsg: {}
            };

        case LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null,
                errorMsg: {}
            }
        default:
            return state;
    }
}

