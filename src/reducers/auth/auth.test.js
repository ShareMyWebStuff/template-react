import { 
    REGISTER_SUCCESS, 
    REGISTER_FAIL, 
    USER_LOADED, 
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from 'actions/types';
import authReducer from './auth';

describe ( 'Auth Reducers', () => {

    test ('Test if state initialised if no state passed in', () => {
        const newState = authReducer(undefined, {} );
        expect(newState).toEqual({
            isAuthenticated: null,
            loading: false,
            token: null,
            user: null
        });
    });

    describe ( 'Check that auto reducers work correctly', () => {

        beforeEach ( () => {
            localStorage.clear();
        });

        test ('Test REGISTER_SUCCESS ', () => {
            const newState = authReducer(undefined, {
                type: REGISTER_SUCCESS,
                payload: {
                    token: '1234567890'
                }
            });
    
            expect(localStorage.setItem).toHaveBeenCalledWith('token', '1234567890');
            expect(localStorage.__STORE__['token']).toBe('1234567890');
            expect(Object.keys(localStorage.__STORE__).length).toBe(1);
            expect(newState).toEqual({
                isAuthenticated: true,
                loading: true,
                user: null,
                token: '1234567890'
            });
        });
    
        test ('Test REGISTER_FAIL ', () => {
            const newState = authReducer(undefined, {
                type: REGISTER_FAIL
            });

            expect(localStorage.removeItem).toHaveBeenCalledWith('token');
            expect(localStorage.__STORE__['token']).toBeUndefined();
            expect(Object.keys(localStorage.__STORE__).length).toBe(0);
            expect(newState).toEqual({
                isAuthenticated: false,
                loading: false,
                user: null,
                token: null
            });
        });
    
        test ('Test USER_LOADED ', () => {
            const newState = authReducer(undefined, {
                type: USER_LOADED,
                payload: {
                    user_id: 1,
                    email: 'test@test.com',
                    username: 'Tester 1'
                }
            });

            expect(localStorage.__STORE__['token']).toBeUndefined();
            expect(Object.keys(localStorage.__STORE__).length).toBe(0);
            expect(newState).toEqual({
                isAuthenticated: true,
                loading: false,
                user: {
                    user_id: 1,
                    username: 'Tester 1',
                    email: 'test@test.com'
                },
                token: null
            });
        });
    
        test ('Test AUTH_ERROR ', () => {
            const newState = authReducer(undefined, {
                type: AUTH_ERROR
            });

            expect(localStorage.removeItem).toHaveBeenCalledWith('token');
            expect(localStorage.__STORE__['token']).toBeUndefined();
            expect(Object.keys(localStorage.__STORE__).length).toBe(0);
            expect(newState).toEqual({
                isAuthenticated: false,
                loading: false,
                user: null,
                token: null
            });
        });
    
        test ('Test LOGIN_SUCCESS ', async () => {
            const newState = await authReducer(undefined, {
                type: LOGIN_SUCCESS,
                payload: {
                    token: '1234567890'
                }
            } );

            expect(localStorage.setItem).toHaveBeenCalledWith('token', '1234567890');
            expect(localStorage.__STORE__['token']).toBe('1234567890');
            expect(Object.keys(localStorage.__STORE__).length).toBe(1);
            expect(newState).toEqual({
                isAuthenticated: true,
                loading: true,
                user: null,
                token: '1234567890'
            });
        });
    
        test ('Test LOGIN_FAIL ', () => {
            const newState = authReducer(undefined, {
                type: LOGIN_FAIL
            });

            expect(localStorage.removeItem).toHaveBeenCalledWith('token');
            expect(localStorage.__STORE__['token']).toBeUndefined();
            expect(Object.keys(localStorage.__STORE__).length).toBe(0);
            expect(newState).toEqual({
                isAuthenticated: false,
                loading: false,
                user: null,
                token: null
            });
        });
    
        test ('Test LOGOUT ', () => {
            const newState = authReducer(undefined, {
                type: LOGOUT
            });

            expect(localStorage.removeItem).toHaveBeenCalledWith('token');
            expect(localStorage.__STORE__['token']).toBeUndefined();
            expect(Object.keys(localStorage.__STORE__).length).toBe(0);
            expect(newState).toEqual({
                isAuthenticated: false,
                loading: false,
                user: null,
                token: null
            });
        });
    });

});


