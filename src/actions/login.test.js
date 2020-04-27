import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';
import { loadUser, userLogin, resetLoginErrors, logout } from './login';
import {
    LOGIN_START, 
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from './types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// 
// Login
// 
// We run the following tests below to check the action creators work
// 1. userLogin - success and failure test for user login in
// 2. Load user details - success and failute load of the current logged in user details
// 3. Reset the login errors
// 

describe('Login actions', () => {

    beforeEach(function () {
        moxios.install();
    });

    afterEach(function () {
        moxios.uninstall();
    });

    // 
    // Tests the login action creator works correctly when a user is successfully login on.
    // 
    test('User Login - Successfully login user', () => {

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: { "token": "DFDHGGJFGSJSHP*UIO^(YHUIOY^*%" }
            });
        });

        const expectedActions = [
            { type: LOGIN_START },
            { type: LOGIN_SUCCESS, payload: { "token": "DFDHGGJFGSJSHP*UIO^(YHUIOY^*%" } },
        ];

        const store = mockStore({ login: {} })

        return store.dispatch(userLogin()).then(() => {

            // return of async actions
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    // 
    // Tests the register action creator works correctly when there is an error registering the user.
    // 
    test('User Login - Error login a user in', () => {

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 422,
                response: { 
                    "errorMsg": {
                        "username": "Username has to be 6 - 30 characters and can contain your email address.",
                        "password": "Your password needs to be 6 - 20 characters long and must contain at least one number."
                    }
                }
            });
        });

        const expectedActions = [
            { type: LOGIN_START },
            { type: LOGIN_FAIL, payload: { 
                "errorMsg": {
                    "username": "Username has to be 6 - 30 characters and can contain your email address.",
                    "password": "Your password needs to be 6 - 20 characters long and must contain at least one number."
                }
            } },
        ];

        const store = mockStore({ login: {} })

        return store.dispatch(userLogin()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

});


describe('Load User Details actions', () => {

    beforeEach(function () {
        moxios.install();
    });

    afterEach(function () {
        moxios.uninstall();
    });

    // 
    // Tests the login action creator works correctly when a user is successfully login on.
    // 
    test('Load User - Successfully login user', () => {

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: { 
                    user: {
                        user_id: 4,
                        email: "dave@test.co.uk",
                        username: "DaveTester",
                        validated: "N"
                    }
                 }
            });
        });

        const expectedActions = [
            { type: LOGIN_START },
            { type: LOGIN_SUCCESS, payload: {
                user: {
                    user_id: 4,
                    email: "dave@test.co.uk",
                    username: "DaveTester",
                    validated: "N"
                }
            } },
        ];

        const store = mockStore({ login: {} })

        return store.dispatch(userLogin()).then(() => {

            // return of async actions
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    // 
    // Tests the register action creator works correctly when there is an error registering the user.
    // 
    test('User Login - Error login a user in', () => {

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 422,
                response: { 
                    "errorMsg": {
                        "username": "Username has to be 6 - 30 characters and can contain your email address.",
                        "password": "Your password needs to be 6 - 20 characters long and must contain at least one number."
                    }
                }
            });
        });

        const expectedActions = [
            { type: LOGIN_START },
            { type: LOGIN_FAIL, payload: { 
                "errorMsg": {
                    "username": "Username has to be 6 - 30 characters and can contain your email address.",
                    "password": "Your password needs to be 6 - 20 characters long and must contain at least one number."
                }
            } },
        ];

        const store = mockStore({ login: {} })

        return store.dispatch(userLogin()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

});



describe('Login - Clear errors', () => {

    // 
    // Tests the reset register error action creator, this should pass though 
    // 
    test('Login - Clear login errors ', () => {

        const initialState = {
            token: null,
            errorMsg: {
                username: "Username has to be 6 - 30 characters and can contain your email address.",
                password: "Your password needs to be 6 - 20 characters long and must contain at least one number."
            }
        };

        const store = mockStore( initialState );

        store.dispatch(resetLoginErrors());

        // Check the store 
        const actions = store.getActions();
        const expectedPayload = { type: "LOGIN_RESET_ERRORS"};

        expect(actions).toEqual([expectedPayload]);        
    });

});

describe('Logout', () => {

    // 
    // Tests the logout functionality 
    // 
    test('Logout', () => {

        const initialState = { };

        const store = mockStore( initialState );

        store.dispatch(logout());

        // Check the store 
        const actions = store.getActions();
        const expectedPayload = { type: "LOGOUT"};

        expect(actions).toEqual([expectedPayload]);        
    });

});
