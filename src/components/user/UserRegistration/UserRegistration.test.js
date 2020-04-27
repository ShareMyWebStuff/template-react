import React from 'react';
import { shallow } from 'enzyme';
import { findByDataTestAttr} from '../../../../Utils';
import UserRegistration from '.';

// setUp function to create component
const setUp = (props={}) => {
    const component = shallow( <UserRegistration {...props} /> );
    return component;
};

// UserRegistration - for tutor
describe ('UserRegistration Component', () => {

    let wrapper;

    beforeEach ( () => {
        wrapper = setUp({ });
    });

    test( 'Test if user registration is shown with no props', () => {
        const component = findByDataTestAttr(wrapper, 'user_registration');
        expect(component.length).toBe(1);
    });

});


// UserRegistration - for tutor
describe ('UserRegistration Component - Tutor', () => {

    let wrapper;

    beforeEach ( () => {
        wrapper = setUp(
            {
                location: {
                    state: {
                        userType: 'TUTOR'
                    }
                }
            });
    });

    test( 'Test if user registration is shown', () => {
        const component = findByDataTestAttr(wrapper, 'user_registration');
        expect(component.length).toBe(1);
    });

    test( 'Test if the user registration card is shown', () => {
        const component = findByDataTestAttr(wrapper, 'user_registration__card');
        expect(component.length).toBe(1);
    });

    test( 'Test if the user registration cards header is shown', () => {
        const component = findByDataTestAttr(wrapper, 'user_registration__card_header');
        expect(component.length).toBe(1);
        expect(component.find('h2').length).toBe(1);
    });

    test( 'Test if the user registration cards content is shown', () => {
        const component = findByDataTestAttr(wrapper, 'user_registration__card_body');
        expect(component.length).toBe(1);
        expect(component.find('p').length).toBe(1);
        expect(component.find('li').length).toBe(8);
    });


});

// UserRegistration - for parent
describe ('UserRegistration Component - Parent', () => {

    let wrapper;

    beforeEach ( () => {
        wrapper = setUp(
            {
                location: {
                    state: {
                        userType: 'PARENT'
                    }
                }
            });
    });

    test( 'Test if user registration is shown', () => {
        const component = findByDataTestAttr(wrapper, 'user_registration');
        expect(component.length).toBe(1);
    });

    test( 'Test if the user registration card is shown', () => {
        const component = findByDataTestAttr(wrapper, 'user_registration__card');
        expect(component.length).toBe(1);
    });

    test( 'Test if the user registration cards header is shown', () => {
        const component = findByDataTestAttr(wrapper, 'user_registration__card_header');
        expect(component.length).toBe(1);
        expect(component.find('h2').length).toBe(1);
    });

    test( 'Test if the user registration cards content is shown', () => {
        const component = findByDataTestAttr(wrapper, 'user_registration__card_body');
        expect(component.length).toBe(1);
        expect(component.find('p').length).toBe(1);
        expect(component.find('li').length).toBe(7);
    });

});

// UserRegistration - for student
describe ('UserRegistration Component - Student', () => {

    let wrapper;

    beforeEach ( () => {
        wrapper = setUp(
            {
                location: {
                    state: {
                        userType: 'STUDENT'
                    }
                }
            });
    });

    test( 'Test if user registration is shown', () => {
        const component = findByDataTestAttr(wrapper, 'user_registration');
        expect(component.length).toBe(1);
    });

    test( 'Test if the user registration card is shown', () => {
        const component = findByDataTestAttr(wrapper, 'user_registration__card');
        expect(component.length).toBe(1);
    });

    test( 'Test if the user registration cards header is shown', () => {
        const component = findByDataTestAttr(wrapper, 'user_registration__card_header');
        expect(component.length).toBe(1);
        expect(component.find('h2').length).toBe(1);
    });

    test( 'Test if the user registration cards content is shown', () => {
        const component = findByDataTestAttr(wrapper, 'user_registration__card_body');
        expect(component.length).toBe(1);
        expect(component.find('p').length).toBe(1);
        expect(component.find('li').length).toBe(7);
    });

});

