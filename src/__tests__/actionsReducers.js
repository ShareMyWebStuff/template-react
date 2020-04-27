import moxios from 'moxios';
import { storeFn } from 'Root';
import { resetLoginErrors, logout } from '../actions/login';
import { getSubjects } from '../actions/subjects';

// 
// Integration Testing
//
// The following tests are to test the action creators work with the reducers.
// 1. Load Subjects
// 2. Authenticate (Login)
//        resetAuthErrors
//        userLogin
//        loadUser
//        logout
// 
// For each of these sets of tests we set the state, hardcode what the test call will return and then check that the state has been updated correctly.
//

describe ('Subjects - actions reducer tests', () => {

    beforeEach ( () => {
        moxios.install();
    });

    afterEach ( () => {
        moxios.uninstall();
    });

    test( 'Check store is updated correctly', () => {

        const expectedState = {
            "Academic": {
                "subject_category_id": 1,
                "subject_category": "Academic",
                "subjects": [
                    {
                        "subject_id": 1,
                        "subject_category_id": 1,
                        "subject": "Accounting",
                        "subject_category": "Academic"
                    },
                    {
                        "subject_id": 80,
                        "subject_category_id": 1,
                        "subject": "Afrikaans",
                        "subject_category": "Academic"
                    },
                ]
            }
        };

        const store = storeFn();
        moxios.wait( () => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: {
                    ...expectedState
                }
            })
        })

        return store.dispatch (getSubjects())
        .then( () => {
            const newState = store.getState();
            expect(newState.subjects.Academic).toBe(expectedState.Academic);
        })
    });
});

describe ('Login - resetLoginErrors', () => {

    test( 'Check store is updated correctly', () => {

        const store = storeFn( { login: {loading: true, errorMsg: {msg: 'tester'}}});
        store.dispatch (resetLoginErrors());
        const newState = store.getState().login;
        expect(newState.loading).toBe(false);
        expect(JSON.stringify(newState.errorMsg)).toBe(JSON.stringify({}));
    });
});

describe ('Login - logout', () => {

    test( 'Check store is updated correctly', () => {

        const store = storeFn( { login: {token: '12345', isAuthenticated: true, loading: true, user: {}, errorMsg: {msg: 'tester'}}});
        store.dispatch (logout());
        const newState = store.getState().login;
        expect(newState.token).toBe(null);
        expect(newState.isAuthenticated).toBe(false);
        expect(newState.loading).toBe(false);
        expect(newState.user).toBe(null);
        expect(JSON.stringify(newState.errorMsg)).toBe(JSON.stringify({}));
    });
});

