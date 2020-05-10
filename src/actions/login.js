import axios from 'axios';
import { 
    USER_LOADING_START,
    USER_LOADING_SUCCESS,
    USER_LOADING_FAIL,

    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGIN_RESET_ERRORS, 

    LOGOUT
} from './types';
import setAuthToken from '../components/utils/setAuthToken';

//
// Function:    resetLoginErrors
//
// Description: This action creator is called when we want to reset the auth (login in process)
//
export const resetLoginErrors = () => {
    return { type: LOGIN_RESET_ERRORS };
}


//
// Function:    loadUser
//
// Description: This action creator is called when the website first starts up, hence it will log the user into the website if they have logged in recently.
//              This users the local storage.
//
export const loadUser = () => async dispatch => {

    if (localStorage.token) {
        dispatch ({ type: USER_LOADING_START});

        setAuthToken(localStorage.token);

        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            validateStatus: function (status) {
                return ( ( status >= 200 && status < 300 ) || status === 403 || status === 405 )
            },
            crossDomain: true
        }
    
        try {

            const res = await axios.get(`${process.env.REACT_APP_API_URL}user`, config);

            dispatch ({
                type: USER_LOADING_SUCCESS,
                payload: res.data
            });

        } catch (err) {

            console.log ('Load User Error');
            console.log (err);

            dispatch ({
                type: USER_LOADING_FAIL,
                payload: err
            });

        }
    }
}


//
// Function:    userLogin
//
// Description: This action creator is called for login clients on to the website
//
// Parameters:
//  username            The clients username as saved in the database
//  password            The clients password.
//
export const userLogin = (username, password) => async dispatch => {

    let res;
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        validateStatus: function (status) {
            return ( ( status >= 200 && status < 300 ) || status === 404 || status === 422 || status === 500 || status === 503 )
        },
        crossDomain: true
    };
    console.log ('HERE I AM');

    try {
        dispatch ({ type: LOGIN_START});

        const body = JSON.stringify({ username, password });
        res = await axios.post(`${process.env.REACT_APP_API_URL}user-auth`, body, config);
        console.log ('userLogin');
        console.log (res);

        const actionType = (res.status >= 200 && res.status < 300 ? LOGIN_SUCCESS : LOGIN_FAIL);

        await dispatch ({
            type: actionType,
            payload: res.data
        });

        await dispatch ( loadUser());
    
    } catch (err) {
        console.log ('userLogin');
        console.log(err);

        const errorMsg = {password: 'Error authenticating. Try again'};

        await dispatch ({
            type: LOGIN_FAIL,
            payload: errorMsg
        }); 

    }

};


//
// Function:    logout
//
// Description: This action creator is called when a client logs out from this website
//
// Parameters:
//  None
//
export const logout = () => {
    return { type: LOGOUT };
}