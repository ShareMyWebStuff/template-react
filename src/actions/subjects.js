import axios from 'axios';
import { 
    GET_SUBJECTS_START,
    GET_SUBJECTS_SUCCESS,
    GET_SUBJECTS_FAIL
} from './types';

//
// Function:    getSubjects
//
// Description: This action creator is called to read in all the subjects this website can be searched for ( Maths, English, Pottery etc).
//              These are loaded up once at the start.
//
export const getSubjects = () => async dispatch => {

    try {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            validateStatus: function (status) {
                return ( ( status >= 200 && status < 300 ) || status === 404 )
            },
            crossDomain: true
        }

        dispatch({ type: GET_SUBJECTS_START });

        const res = await axios.get(`${process.env.REACT_APP_API_URL}subjects`, config);
        const actionType = (res.status >= 200 && res.status < 300 ? GET_SUBJECTS_SUCCESS : GET_SUBJECTS_FAIL);

        dispatch ({
            type: actionType,
            payload: res.data
        });

    } catch (err) {

        dispatch ({
            type: GET_SUBJECTS_FAIL,
            payload: err
        });
    }

};