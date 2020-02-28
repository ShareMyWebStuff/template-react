import React from 'react';
import { shallow } from 'enzyme';
import Header from '.';
import { findByDataTestAttr } from '../../../../Utils';

// setUp function to create component
const setUp = (props={}) => {
    const component = shallow( <Header {...props} /> );
    return component;
};

// Unit tests for the Header component
describe ('Header Component ( / )', () => {

    let wrapper;

    describe ('Have Props', () => {
        beforeEach ( () => {
            const props = {
                location: {
                    hash: "",
                    pathname: "/"
                }
            };
            wrapper = setUp( props );
        });

        test ('Should Render Header without Errors', () => {
            const component = findByDataTestAttr(wrapper, 'HeaderLanding');
            expect(component.length).toBe(1);
        });
    });
    
    describe ('Have NO Props', () => {
        beforeEach ( () => {
            wrapper = setUp( );
        });

        test ('Should Render Header without Errors', () => {
            const component = findByDataTestAttr(wrapper, 'Header');
            expect(component.length).toBe(1);
        });
    });
});


describe ('Header Tutor Register Component ( /register-tutor )', () => {

    let wrapper;

    describe ('Have Props', () => {
        beforeEach ( () => {
            const props = {
                location: {
                    hash: "",
                    pathname: "/register-tutor"
                }
            };
            wrapper = setUp( props );
        });

        test ('Should Render HeaderRegisterTutor without Errors', () => {
            const component = findByDataTestAttr(wrapper, 'HeaderRegisterTutor');
            expect(component.length).toBe(1);
        });
    });
});


