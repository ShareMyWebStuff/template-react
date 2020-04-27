import React from 'react';
import { shallow } from 'enzyme';
import { checkProps, findByDataTestAttr } from '../../../../Utils';
import { storeFn } from '../../../Root';
import HeaderUserRegistration from '.';

// setUp function to create component
const setUp = (initialState = {}, props) => {
    const store=storeFn(initialState);
    const wrapper = shallow(<HeaderUserRegistration store={store} {...props} />).childAt(0).dive();
    return wrapper;
};


describe ('Header Tutor Registration Component', () => {

    let wrapper;

    beforeEach ( () => {
        wrapper = setUp();
    });

    test ( 'Test proptype ', () => {
        const expectedProps = {
            username: 'New Tutor',
            email: 'tutor@hello.com',
            password: 'MyPassword1',
            userType: 0,
            title: 'Mr',
            firstname: 'John',
            lastname: 'Major',
            address1: '10 Downing Street,',
            address2: null,
            town: 'London',
            county: 'Greater London',
            postcode: 'N10 1XX',
            phone: '0207 123456',
            mobile: '07973 123456'
        };
        const propErrors = checkProps(HeaderUserRegistration, expectedProps);
        expect(propErrors).toBeUndefined();
    });

    test( 'Test it renders without errors', () => {
        const component = findByDataTestAttr(wrapper, 'tutor-reg');
        expect(component.length).toBe(1);
    });

    test( 'Test the HeaderUserRegistration statements section loads', () => {
        const component = findByDataTestAttr(wrapper, 'tutor-reg-statements');
        expect(component.length).toBe(1);
    });

    test( 'Test the HeaderUserRegistration search form section loads', () => {
        const component = findByDataTestAttr(wrapper, 'tutor-reg-sf');
        expect(component.length).toBe(1);
    });

    test( 'Test the HeaderUserRegistration search form Header is correct', () => {
        const component = findByDataTestAttr(wrapper, 'tutor-reg-sf-header');
        expect(component.text()).toBe('Register Now');
    });

    test( 'Test the HeaderUserRegistration search has a form', () => {
        const component = findByDataTestAttr(wrapper, 'tutor-reg-form');
        expect(component.length).toBe(1);
        expect(component.find('InputField').length).toBe(4);
    });

    test( 'Test the HeaderUserRegistration has a submit button', () => {
        const component = findByDataTestAttr(wrapper, 'tutor-reg-sf-submit_btn');
        expect(component.length).toBe(1);
    });

});

describe ('Header Parent Registration Component', () => {

    let wrapper;

    beforeEach ( () => {
        wrapper = setUp({
            login: {
                isAuthenticated: false
            }
        }, 
        {userType: 'PARENT'});
    });

    test( 'Test the HeaderUserRegistration statements section loads', () => {
        const component = findByDataTestAttr(wrapper, 'tutor-reg-statements');
        expect(component.length).toBe(1);
        expect(component.find('h2').length).toBe(3);
        expect(component.find('p').length).toBe(7);
    });

});

describe ('Header Student Registration Component', () => {

    let wrapper;

    beforeEach ( () => {
        wrapper = setUp({
            login: {
                isAuthenticated: false
            }
        }, 
        {userType: 'STUDENT'});
    });

    test( 'Test the HeaderUserRegistration statements section loads', () => {
        const component = findByDataTestAttr(wrapper, 'tutor-reg-statements');
        expect(component.length).toBe(1);
        expect(component.find('h2').length).toBe(3);
        expect(component.find('p').length).toBe(6);
    });

});

describe ('Header Tutor Registration Component', () => {

    let wrapper;

    beforeEach ( () => {
        wrapper = setUp({
            login: {
                isAuthenticated: false
            }
        }, 
        {userType: 'TUTOR'});
    });

    test( 'Test the HeaderUserRegistration statements section loads', () => {
        const component = findByDataTestAttr(wrapper, 'tutor-reg-statements');
        expect(component.length).toBe(1);
        expect(component.find('h2').length).toBe(3);
        expect(component.find('p').length).toBe(9);
    });

});

