import React from 'react';
import { shallow } from 'enzyme';
import { findByDataTestAttr} from '../../../../Utils';
import UserResetLoginDetails from '.';

// setUp function to create component
const setUp = (props={}) => {
    const component = shallow( <UserResetLoginDetails {...props} /> );
    return component;
};


describe ('UserResetLoginDetails - reset username', () => {

    let wrapper;

    beforeEach ( () => {
        wrapper = setUp({
            location: {
                state: {
                    showForm: 'username'
                }
            }
        });
    });

    test( 'Test it renders without errors', () => {
        const component = findByDataTestAttr(wrapper, 'reset_username');
        expect(component.length).toBe(1);
    });

    test( 'Test it renders the verify form', () => {
        const component = findByDataTestAttr(wrapper, 'reset_username__box');
        expect(component.length).toBe(1);
    });

    test( 'Test it renders the verify form picture', () => {
        const component = findByDataTestAttr(wrapper, 'reset_username__form');
        expect(component.length).toBe(1);
        expect(component.find('p').length).toBe(1);
        expect(component.find('InputField').length).toBe(1);
        expect(component.find('button').length).toBe(1);
    });

});

describe ('UserResetLoginDetails - reset username', () => {

    let wrapper;

    beforeEach ( () => {
        wrapper = setUp({
            location: {
                state: {
                    showForm: 'Password'
                }
            }
        });
    });

    test( 'Test it renders without errors', () => {
        const component = findByDataTestAttr(wrapper, 'reset_password');
        expect(component.length).toBe(1);
    });

    test( 'Test it renders the verify form', () => {
        const component = findByDataTestAttr(wrapper, 'reset_password__box');
        expect(component.length).toBe(1);
    });

    test( 'Test it renders the verify form picture', () => {
        const component = findByDataTestAttr(wrapper, 'reset_password__form');
        expect(component.length).toBe(1);
        expect(component.find('p').length).toBe(1);
        expect(component.find('InputField').length).toBe(1);
        expect(component.find('button').length).toBe(1);
    });

});
