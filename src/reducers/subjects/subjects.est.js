import { 
    GET_SUBJECTS_START, 
    GET_SUBJECTS_SUCCESS,
    GET_SUBJECTS_FAIL 
} from 'actions/types';
import subjectReducer from '.';

//
// Reducer tests
//
// As reducers are pure functions we run the follwoing tests. Each test calls the reducer with the starting state along with 
// the action ( type and payload ).
//
// 1. Initialiser - no action to check the default state is set correctly
// 2. GET_SUBJECTS_START
// 3. GET_SUBJECTS_SUCCESS
// 4. GET_SUBJECTS_FAIL
// 

describe ( 'Subject Reducers', () => {

    beforeEach ( () => {
        localStorage.clear();
    });

    test ('Subject Reducers - check if state is initialised if no state passed in', () => {
        const newState = subjectReducer(undefined, {} );
        expect(newState).toEqual({
            loading: false,
            errorMsg: {}
        });
    });


    test ('Subject Reducers - GET_SUBJECTS_START', () => {
        const newState = subjectReducer(undefined, {
                    type: GET_SUBJECTS_START
                });

        expect(newState).toEqual({
            loading: true,
            errorMsg: {}
        });
    });

    test ('Register Reducers - GET_SUBJECTS_SUCCESS', () => {
        const newState = subjectReducer(undefined, {
                    type: GET_SUBJECTS_SUCCESS,
                    payload: {
                        Academic: {
                            subject_category_id: 1,
                            subject_category: "Academic",
                            subjects: [
                                {
                                    subject_id: 1,
                                    subject_category_id: 1,
                                    subject: "Accounting",
                                    subject_category: "Academic"
                                }
                            ]
                        }
                    }
                });

        expect(newState).toEqual({
            Academic: {
                subject_category_id: 1,
                subject_category: "Academic",
                subjects: [
                    {
                        subject_id: 1,
                        subject_category_id: 1,
                        subject: "Accounting",
                        subject_category: "Academic"
                    }
                ]
            },
            loading: false,
            errorMsg: {}
        });
    });

    test ('Register Reducers - GET_SUBJECTS_FAIL', () => {
        const newState = subjectReducer(undefined, {
                    type: GET_SUBJECTS_FAIL,
                    payload: {
                        errorMsg: { msg: "Static Data - Subjects or subjects categories do not exist." } 
                    }
                });

        expect(newState).toEqual({
            loading: false,
            errorMsg: { msg: "Static Data - Subjects or subjects categories do not exist." } 
        });
    });

});
