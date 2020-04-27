import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';
import { register, resetRegisterErrors } from './register';
import {
    REGISTER_START, 
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from './types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// 
// Register Tests
//
// We run the following tests below to check the action creators work
// 1. Successfully create a user
// 2. Error whilst creating a user
// 3. Reset the register errors
// 

describe('Register actions', () => {

    beforeEach(function () {
        moxios.install();
    });

    afterEach(function () {
        moxios.uninstall();
    });

    // 
    // Tests the register action creator works correctly when a user is successfully registered.
    // 
    test('Register - Successfully register user', () => {

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: { "token": "DFDHGGJFGSJSHP*UIO^(YHUIOY^*%" }
            });
        });

        const expectedActions = [
            { type: REGISTER_START },
            { type: REGISTER_SUCCESS, payload: { "token": "DFDHGGJFGSJSHP*UIO^(YHUIOY^*%" } },
        ];

        const store = mockStore({ register: {} })

        return store.dispatch(register()).then(() => {

            // return of async actions
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    // 
    // Tests the register action creator works correctly when there is an error registering the user.
    // 
    test('Register - Error registering a user ', () => {

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 422,
                response: { 
                    "errorMsg": {
                        "email": "A valid email address needs to be entered.",
                        "username": "Username has to be 6 - 30 characters and can contain your email address.",
                        "password": "Your password needs to be 6 - 20 characters long and must contain at least one number.",
                        "password2": "Your passwords must match.",
                        "type": null
                    }
                }
            });
        });

        const expectedActions = [
            { type: REGISTER_START },
            { type: REGISTER_FAIL, payload: { 
                "errorMsg": {
                    "email": "A valid email address needs to be entered.",
                    "username": "Username has to be 6 - 30 characters and can contain your email address.",
                    "password": "Your password needs to be 6 - 20 characters long and must contain at least one number.",
                    "password2": "Your passwords must match.",
                    "type": null
                }
            } },
        ];

        const store = mockStore({ register: {} })

        return store.dispatch(register()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

});


describe('Register - Clear errors', () => {


    // 
    // Tests the reset register error action creator, this should pass though 
    // 
    test('Register - Clear register errors ', () => {

        const initialState = {
            token: null,
            errorMsg: {
                username: "Username has to be 6 - 30 characters and can contain your email address.",
                password: "Your password needs to be 6 - 20 characters long and must contain at least one number."
            }
        };

        const store = mockStore( initialState );

        store.dispatch(resetRegisterErrors());

        // Check the store 
        const actions = store.getActions();
        const expectedPayload = { type: "REGISTER_RESET_ERRORS"};

        expect(actions).toEqual([expectedPayload]);        
    });

});





