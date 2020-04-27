import {
    GET_SUBJECTS_START, 
    GET_SUBJECTS_SUCCESS,
    GET_SUBJECTS_FAIL 
} from '../../actions/types';

const initialState = {
    loading: false,
    errorMsg: {}
};

export default function (state = initialState, action){

    const {type, payload} = action;

    switch (type) {

        case GET_SUBJECTS_START:
            return {
                loading: true,
                errorMsg: {}
            };
        case GET_SUBJECTS_SUCCESS:
            return {
                ...state,
                ...payload,
                loading: false
            };
        case GET_SUBJECTS_FAIL:
            return {
                ...payload,
                loading: false
            };
        default:
            return state;
    }
}

