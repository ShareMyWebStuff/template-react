import React from 'react';
import { shallow } from 'enzyme';
import { findByDataTestAttr} from '../../../../Utils';
import moxios from 'moxios';
import VerifyMedia from '.';

// setUp function to create component
const setUp = (props={}) => {
    const component = shallow( <VerifyMedia {...props} /> );
    return component;
};


describe ('Verify Media Component - manually enter verification code', () => {

    let wrapper;

    beforeEach ( () => {
        wrapper = setUp({
            match: {
                params: {}
            }
        });
    });

    test( 'Test it renders without errors', () => {
        const component = findByDataTestAttr(wrapper, 'user-verify');
        expect(component.length).toBe(1);
    });

    test( 'Test it renders the verify form', () => {
        const component = findByDataTestAttr(wrapper, 'user-verify-form');
        expect(component.length).toBe(1);
    });

    test( 'Test it renders the verify form picture', () => {
        const component = findByDataTestAttr(wrapper, 'user-verify-form__picture');
        expect(component.length).toBe(1);
    });

    test( 'Test it renders the verify form picture', () => {
        const component = findByDataTestAttr(wrapper, 'user-verify-form__desc');
        expect(component.length).toBe(1);
        expect(component.find('h2').length).toBe(1);
        expect(component.find('p').length).toBe(1);
    });


    test( 'Test it renders the verify form form', () => {
        const component = findByDataTestAttr(wrapper, 'user-verify-form__form');
        expect(component.length).toBe(1);
        expect(component.find('InputField').length).toBe(1);
        expect(component.find('button').length).toBe(1);
    });

});

describe ('Verify Media Component - verification code passed as prop', () => {

    let wrapper;

    beforeEach ( () => {
        wrapper = setUp({
            match: {
                params: {
                    verificationCode: '12345'
                }
            }
        });
        moxios.install();
    });

    afterEach(function () {
        moxios.uninstall();
    });


    test( 'Test it renders without errors', () => {
        const component = findByDataTestAttr(wrapper, 'user-verify');
        expect(component.length).toBe(1);
    });

    test( 'Test it renders the verify form', () => {
        const component = findByDataTestAttr(wrapper, 'user-verify-media');
        expect(component.length).toBe(1);
    });

    test( 'Test it renders the verify form picture', () => {
        const component = findByDataTestAttr(wrapper, 'user-verify-media__picture');
        expect(component.length).toBe(1);
    });

    test( 'Test it renders the verify form picture', () => {
        const component = findByDataTestAttr(wrapper, 'user-verify-media__desc');
        expect(component.length).toBe(1);
        expect(component.find('h2').length).toBe(1);
    });

});

