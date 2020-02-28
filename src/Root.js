import React, {useEffect} from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import { loadUser } from './actions/auth';

export const middleware = [thunk];

// The create store is in its own exported function so it can also be used for testing with enzyme.
export const storeFn = (initialState = {} ) => {
    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(...middleware))
    );
};

export const Root = ({children, initialState = {} }) => {

    const store = storeFn(initialState);
    // let lu;
    console.log ();
    useEffect ( () => {
        // lu = loadUser();
        // store.dispatch(lu);
        store.dispatch (loadUser());
    }, [store]);
    // }, [lu]);

    return (
        <Provider store={store}> 
            {children}
        </Provider>
    );
};

