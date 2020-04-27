import { 
    REGISTER_START,
    REGISTER_SUCCESS, 
    REGISTER_FAIL,
    REGISTER_RESET_ERRORS
} from 'actions/types';
import registerReducer from '.';

//
// Reducer tests
//
// As reducers are pure functions we run the follwoing tests. Each test calls the reducer with the starting state along with 
// the action ( type and payload ).
//
// 1. Initialiser - no action to check the default state is set correctly
// 2. REGISTER_START
// 3. REGISTER_SUCCESS
// 4. REGISTER_FAIL
// 5. REGISTER_RESET_ERRORS
// 

describe ( 'Register Reducers', () => {

    beforeEach ( () => {
        localStorage.clear();
    });

    test ('Register Reducers - check if state is initialised if no state passed in', () => {
        const newState = registerReducer(undefined, {} );
        expect(newState).toEqual({
            loading: false,
            errorMsg: {}
        });
    });


    test ('Register Reducers - REGISTER_START', () => {
        const newState = registerReducer(undefined, {
                    type: REGISTER_START
                });

        expect(newState).toEqual({
            loading: true,
            errorMsg: {}
        });
    });

    test ('Register Reducers - REGISTER_SUCCESS', () => {
        const newState = registerReducer(undefined, {
                    type: REGISTER_SUCCESS,
                    payload: {
                        token: "12345"
                    }
                });

        expect(newState).toEqual({
            token: "12345",
            loading: false,
            errorMsg: {}
        });
    });

    test ('Register Reducers - REGISTER_FAIL', () => {
        const newState = registerReducer(undefined, {
                    type: REGISTER_FAIL,
                    payload: {
                        errorMsg: {
                            email: null,
                            username: "Username has to be 6 - 30 characters and can contain your email address.",
                            password: null,
                            password2: null,
                            type: null
                        }
                    }
                });

        expect(newState).toEqual({
            token: null,
            loading: false,
            errorMsg: {
                email: null,
                username: "Username has to be 6 - 30 characters and can contain your email address.",
                password: null,
                password2: null,
                type: null
            }
        });
    });

    test ('Register Reducers - REGISTER_RESET_ERRORS', () => {
        const newState = registerReducer(undefined, {
                    type: REGISTER_RESET_ERRORS
                });

        expect(newState).toEqual({
            loading: false,
            errorMsg: {}
        });
    });


});
