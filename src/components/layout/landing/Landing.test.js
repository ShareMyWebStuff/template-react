import React from 'react';
import { shallow } from 'enzyme';
import { findByDataTestAttr, checkProps } from '../../../../Utils';
import { storeFn } from '../../../Root';
import Landing from '.';

// 
// setUp function to create component
//
// This function can be called with a state so we can test with a start up state, hence the state can be set as if we are logged in
// 
// if you run the follow ( const wrapper = shallow(<Landing store={store} {...props} />); ) the wrapper is et to belwo
//  <ContextProvider value={{...}}>
//      <Landing store={{...}} isAuthenticated={false} dispatch={[Function]} />
//  </ContextProvider>
//
// If we add .childAt(0) , the first child element is returned (<Landing store={{...}} isAuthenticated={false} dispatch={[Function]} />)
//
const setUp = (initialState = {}, props) => {
    const store=storeFn(initialState);
    const wrapper = shallow(<Landing store={store} {...props} />).childAt(0).dive();
    return wrapper;
};

describe ('Landing Component', () => {

    let wrapper;

    beforeEach ( () => {
        wrapper = setUp(
            {
                login: {
                    isAuthenticated: true
                }            }, null);
    });

    test( 'Check if the landing component renders', () => {
        const component = findByDataTestAttr(wrapper, 'landing');
        expect(component.length).toBe(1);
    });

    test( 'Check the landing header is rendered', () => {
        const component = findByDataTestAttr(wrapper, 'landing-header');
        expect(component.length).toBe(1);
    });
    
    test( 'Check the InfoCards are being called', () => {
        expect(wrapper.find('InfoCard').length).toBe(5);
    });
    

});



