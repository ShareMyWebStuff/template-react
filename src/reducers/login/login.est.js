import { 
    USER_LOADING_START,
    USER_LOADING_SUCCESS,
    USER_LOADING_FAIL,

    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGIN_RESET_ERRORS, 

    LOGOUT
} from 'actions/types';
import loginReducer from '.';

//
// Reducer tests
//
// As reducers are pure functions we run the follwoing tests. Each test calls the reducer with the starting state along with 
// the action ( type and payload ).
//
// 1. Initialiser - no action to check the default state is set correctly
// 2. USER_LOADING_START
// 3. USER_LOADING_SUCCESS
// 4. USER_LOADING_FAIL
// 5. LOGIN_START
// 6. LOGIN_SUCCESS
// 7. LOGIN_FAIL
// 8. LOGIN_RESET_ERRORS
// 9. LOGOUT
// 

describe ( 'Login Reducers', () => {

    beforeEach ( () => {
        localStorage.clear();
    });

    test ('Login Reducers - check if state is initialised if no state passed in', () => {
        const newState = loginReducer(undefined, {} );
        expect(newState).toEqual({
            token: null,
            isAuthenticated: false,
            loadingUser: false,
            loading: false,
            token: null,
            user: null,
            errorMsg: {}
        });
    });


    test ('Login Reducers - USER_LOADING_START', () => {
        const newState = loginReducer(undefined, {
                    type: USER_LOADING_START
                });

        expect(newState).toEqual({
            token: null,
            isAuthenticated: false,
            loadingUser: true,
            loading: false,
            user: null,
            errorMsg: {}
        });
    });

    test ('Login Reducers - USER_LOADING_SUCCESS', () => {
        const newState = loginReducer(undefined, {
                    type: USER_LOADING_SUCCESS,
                    payload: {
                        user: {
                            user_id: 4,
                            email: "dave@tester.co.uk",
                            username: "Dave1234",
                            validated: "N"
                        }
                    }
                });

        expect(newState).toEqual({
            token: null,
            isAuthenticated: true,
            loadingUser: false,
            loading: false,
            user: {
                user_id: 4,
                email: "dave@tester.co.uk",
                username: "Dave1234",
                validated: "N"
            },
            errorMsg: {}
        });
    });

    test ('Login Reducers - USER_LOADING_FAIL', () => {
        const newState = loginReducer(undefined, {
                    type: USER_LOADING_FAIL,
                    payload: {
                        errorMsg: "Requested user does not exist."
                    }
                });

        expect(newState).toEqual({
            token: null,
            isAuthenticated: false,
            loadingUser: false,
            loading: false,
            user: null,
            errorMsg: "Requested user does not exist."
        });
    });

    test ('Login Reducers - LOGIN_START', () => {
        const newState = loginReducer(undefined, {
                    type: LOGIN_START
                });

        expect(newState).toEqual({
            token: null,
            isAuthenticated: false,
            loadingUser: false,
            loading: true,
            user: null,
            errorMsg: {}
        });
    });

    test ('Login Reducers - LOGIN_SUCCESS', () => {
        const newState = loginReducer(undefined, {
                    type: LOGIN_SUCCESS,
                    payload: {
                        token: "12345"
                    }
                });

        expect(newState).toEqual({
            token: "12345",
            isAuthenticated: true,
            loadingUser: false,
            loading: false,
            user: null,
            errorMsg: {}
        });
        expect(localStorage.setItem).toHaveBeenCalledWith('token', '12345');
        expect(localStorage.__STORE__['token']).toBe('12345');
        expect(Object.keys(localStorage.__STORE__).length).toBe(1);
    });


    test ('Login Reducers - LOGIN_FAIL', () => {
        const newState = loginReducer(undefined, {
                    type: LOGIN_FAIL,
                    payload: {
                        errorMsg: {
                            password: "Invalid username and password."
                        }
                    }
                });

        expect(newState).toEqual({
            token: null,
            isAuthenticated: false,
            loadingUser: false,
            loading: false,
            user: null,
            errorMsg: {
                password: "Invalid username and password."
            }
        });
        expect(localStorage.removeItem).toHaveBeenCalledWith('token');
        expect(localStorage.__STORE__['token']).toBeUndefined();
        expect(Object.keys(localStorage.__STORE__).length).toBe(0);
    });

    test ('Login Reducers - LOGIN_RESET_ERRORS', () => {
        const newState = loginReducer(undefined, {
                    type: LOGIN_RESET_ERRORS
                });

        expect(newState).toEqual({
            token: null,
            isAuthenticated: false,
            loadingUser: false,
            loading: false,
            user: null,
            errorMsg: { }
        });
        expect(localStorage.removeItem).toHaveBeenCalledWith('token');
        expect(localStorage.__STORE__['token']).toBeUndefined();
        expect(Object.keys(localStorage.__STORE__).length).toBe(0);
    });

    test ('Login Reducers - LOGOUT', () => {
        const newState = loginReducer(undefined, {
                    type: LOGOUT
                });

        expect(newState).toEqual({
            token: null,
            isAuthenticated: false,
            loadingUser: false,
            loading: false,
            user: null,
            errorMsg: { }
        });
        expect(localStorage.removeItem).toHaveBeenCalledWith('token');
        expect(localStorage.__STORE__['token']).toBeUndefined();
        expect(Object.keys(localStorage.__STORE__).length).toBe(0);
    });

});
