import React from 'react';
import { shallow } from 'enzyme';
import { findByDataTestAttr} from '../../../../Utils';
import { storeFn } from '../../../Root';
import Login from '.';

// 
// setUp function to create component
//
// This function can be called with a state so we can test with a start up state, hence the state can be set as if we are logged in
// 
const setUp = (initialState = {}, props) => {
    const store=storeFn(initialState);
    const wrapper = shallow(<Login store={store} {...props} />).childAt(0).dive();
    return wrapper;
};


describe ('Login Component - no initial state', () => {

    let wrapper;

    beforeEach ( () => {
        wrapper = setUp({},{});
    });

    test( 'Test it renders without errors', () => {
        const component = findByDataTestAttr(wrapper, 'login');
        expect(component.length).toBe(1);
    });

});

// 
// The login component has a flag passed as a prop that determines if the login screen is shown or the waiting for verification.
describe ('Login Component - login screen', () => {

    let wrapper;

    beforeEach ( () => {
        wrapper = setUp({},{
            location: {
                state: {
                    waitingValidation: false
                }
            }
        });
    });

    test( 'Test it login box is shown', () => {
        const component = findByDataTestAttr(wrapper, 'login_box');
        expect(component.length).toBe(1);
        expect(component.find('h2').length).toBe(1);
    });

    test( 'Test if the login form is shown', () => {
        const component = findByDataTestAttr(wrapper, 'login_form');
        expect(component.length).toBe(1);
        expect(component.find('InputField').length).toBe(2);
        expect(component.find('button').length).toBe(1);
    });

    test( 'Test if the reset links are shown', () => {
        const component = findByDataTestAttr(wrapper, 'login_reset_links');
        expect(component.length).toBe(1);
        expect(component.find('p').length).toBe(3);
    });

});

// 
// The login component has a flag passed as a prop that determines if the login screen is shown or the waiting for verification.
describe ('Login Component - email verification screen', () => {

    let wrapper;

    beforeEach ( () => {
        wrapper = setUp({},{
            location: {
                state: {
                    waitingValidation: true
                }
            }
        });
    });

    test( 'Test it verification screen is shown', () => {
        const component = findByDataTestAttr(wrapper, 'login_email_sent');
        expect(component.length).toBe(1);
    });

    test( 'Test if the verification screens image is shown', () => {
        const component = findByDataTestAttr(wrapper, 'login_email_sent_picture');
        expect(component.length).toBe(1);
    });

    test( 'Test if the reset links are shown', () => {
        const component = findByDataTestAttr(wrapper, 'login_email_sent_desc');
        expect(component.length).toBe(1);
        expect(component.find('InputField').length).toBe(1);
    });

});

