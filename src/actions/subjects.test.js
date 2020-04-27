import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';
import { getSubjects } from './subjects';
import {
    GET_SUBJECTS_START, 
    GET_SUBJECTS_SUCCESS,
    GET_SUBJECTS_FAIL 
} from './types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// 
// Subject Tests
//
// We run the following tests below to check the action creators work
// 1. Successfully retrieved the subjects
// 2. Error whilst retrieving the subjects
// 

describe('Subjects actions', () => {

    beforeEach(function () {
        moxios.install();
    });

    afterEach(function () {
        moxios.uninstall();
    });

    // 
    // Tests the subjects action creator works correctly when it retrieves subjects successfully.
    // 
    test('Subjects - Successfully retrieve subjects ', () => {

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: { 
                    "Academic": {
                        "subject_category_id": 1,
                        "subject_category": "Academic",
                        "subjects": [
                        {
                            "subject_id": 1,
                            "subject_category_id": 1,
                            "subject": "Accounting",
                            "subject_category": "Academic"
                        }]
                    }
                }
            });
        });

        const expectedActions = [
            { type: GET_SUBJECTS_START },
            { type: GET_SUBJECTS_SUCCESS, payload: {
                "Academic": {
                    "subject_category_id": 1,
                    "subject_category": "Academic",
                    "subjects": [{
                        "subject_id": 1,
                        "subject_category_id": 1,
                        "subject": "Accounting",
                        "subject_category": "Academic"
                    }]
                }

            } },
        ];

        const store = mockStore({ subjects: {} })

        return store.dispatch(getSubjects()).then(() => {

            // return of async actions
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    // 
    // Tests the subjects action creator works correctly when it subjects cannot be found.
    // 
    test('Subjects - Subjects not found error ', () => {

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 404,
                response: { "errorMsg": "Static data - Subjects do not exist." }
            });
        });

        const expectedActions = [
            { type: GET_SUBJECTS_START },
            { type: GET_SUBJECTS_FAIL, payload: { "errorMsg": "Static data - Subjects do not exist." } },
        ];

        const store = mockStore({ subjects: {} })

        return store.dispatch(getSubjects()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

});




