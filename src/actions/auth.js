import axios from 'axios';
import { 
    REGISTER_SUCCESS, 
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    RESET_AUTH_ERRORS
} from './types';
import setAuthToken from '../components/utils/setAuthToken';

export const resetAuthErrors = () => {
    return { type: RESET_AUTH_ERRORS };
}

// Load User
export const loadUser = () => async dispatch => {

    if (localStorage.token) {
        setAuthToken(localStorage.token);


        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        // 'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'

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
            // const res = await axios.get('https://izxp2deu20.execute-api.eu-west-2.amazonaws.com/dev/tutor', config);
            // const res = await axios.get(`http://127.0.0.1:3000/tutor`, config);
            console.log ('Load User');
            console.log (`${process.env.REACT_APP_API_URL}user`);
            console.log ('Config');
            console.log (config);
            console.log ('axios.defaults');
            console.log (axios.defaults);
            // const res = await axios.get(`${process.env.REACT_APP_API_URL}user`, config);
            const res = await axios.get(`${process.env.REACT_APP_API_URL}user`, config);
            console.log ('After Load User');
            console.log (res);
            dispatch ({
                type: USER_LOADED,
                payload: res.data
            });
    
        } catch (err) {

            console.log ('Load User Error');
            console.log (err);

            dispatch ({
                type: AUTH_ERROR,
                payload: err
            });

        }
    }
}


// Register User
export const register = (username, email, password, password2, type) => async dispatch => {

    let res;
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

    const body = JSON.stringify({username, email, password, password2, type});
    try {
        // res = await axios.post('https://izxp2deu20.execute-api.eu-west-2.amazonaws.com/dev/tutor', body, config);
        console.log ('Register');
        console.log ('body');
        console.log (body);
        console.log ('config');
        console.log (config);
        // res = await axios.post(`${process.env.REACT_APP_API_URL}user`, body, config);
        console.log (`${process.env.REACT_APP_API_URL}user`);
        // res = await axios.post(`${process.env.REACT_APP_API_URL}user`, body, config);
        res = await axios.post(`/user`, body, config);
        console.log (res);
        
        if (res.status >= 200 && res.status < 300) {
            console.log ('Dispatch register success');
            await dispatch ({
                type: REGISTER_SUCCESS,
                payload: res.data
            });

            // console.log ('Dispatch load_user')
            // dispatch ( loadUser() );
            // console.log ('After Dispatch load_user')
        } 
        else {

            dispatch ({
                type: REGISTER_FAIL,
                payload: res.data
            });  
        }

        console.log (res.data.error);

    } catch (err) {

        dispatch ({
            type: REGISTER_FAIL,
            payload: err
        });  

    }
}

// Register User
export const login = (username, password) => async dispatch => {

    let res;

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

    const body = JSON.stringify({username, password});

    try {
        // res = await axios.post('https://izxp2deu20.execute-api.eu-west-2.amazonaws.com/dev/login', body, config);
        console.log (body);
        console.log (config);
        res = await axios.post(`${process.env.REACT_APP_API_URL}auth`, body, config);
        console.log ('Login');
        console.log (res);
        
        if (res.status >= 200 && res.status < 300 ) {
            await dispatch ({
                type: LOGIN_SUCCESS,
                payload: res.data
            });

            dispatch ( loadUser() );
        } else {
            dispatch ({
                type: LOGIN_FAIL,
                payload: res.data
            });  
        }

    } catch (err) {
        const { response } = err;
        console.log ( response );

        dispatch ({
            type: LOGIN_FAIL,
            payload: err
        });  
    }
}

// Logout and Clear profile
export const logout = () => dispatch => {

    try {
        
        dispatch( {type: LOGOUT });

    } catch (err) {
        console.log ('ERROR', err);
    }
}