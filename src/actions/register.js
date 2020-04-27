import axios from 'axios';
import { 
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    REGISTER_RESET_ERRORS
} from './types';

//
// Function:    resetRegisterErrors
//
// Description: This action creator is called when we want to reset the register errors.
//
export const resetRegisterErrors = () => {
    return { type: REGISTER_RESET_ERRORS };
}


//
// Function:    register
//
// Description: This action creator is called for clients when they register
//
// Parameters:
//  username            A unique username
//  email               The clients email address
//  password            Password
//  password2           Confirmation of the password
//  type                The type of the account ( 0 - Tutor, 1 - Student, 2 - parent)
//
export const register = (username, email, password, password2, type) => async dispatch => {

    let res;
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        validateStatus: function (status) {
            return ( ( status >= 200 && status < 300 ) || status === 403 || status === 405 || status === 422)
        },
        crossDomain: true
    }
    try {

        await dispatch ({ type: REGISTER_START });

        const body = JSON.stringify({username, email, password, password2, type});
        res = await axios.post(`${process.env.REACT_APP_API_URL}user`, body, config);
        
        const actionType = (res.status >= 200 && res.status < 300 ? REGISTER_SUCCESS : REGISTER_FAIL);

        await dispatch ({
            type: actionType,
            payload: res.data
        });

    } catch (err) {

        dispatch ({
            type: REGISTER_FAIL,
            payload: err
        });  

    }
}

