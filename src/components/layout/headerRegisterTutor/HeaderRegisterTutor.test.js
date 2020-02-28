import React from 'react';
import { shallow } from 'enzyme';
import { findByDataTestAttr } from '../../../../Utils';
import { storeFn } from '../../../Root';
import HeaderRegisterTutor from '.';

// setUp function to create component
const setUp = (initialState = {}, props) => {
    const store=storeFn(initialState);
    const wrapper = shallow(<HeaderRegisterTutor store={store} {...props} />).childAt(0).dive();
    return wrapper;
};


describe ('Header Tutor Registration Component', () => {

    let wrapper;

    beforeEach ( () => {
        wrapper = setUp();
    });

    test( 'Test it renders without errors', () => {
        const component = findByDataTestAttr(wrapper, 'tutor-reg');
        expect(component.length).toBe(1);
    });

    test( 'Test the HeaderRegisterTutor statements section loads', () => {
        const component = findByDataTestAttr(wrapper, 'tutor-reg-statements');
        expect(component.length).toBe(1);
    });

    test( 'Test the HeaderRegisterTutor search form section loads', () => {
        const component = findByDataTestAttr(wrapper, 'tutor-reg-sf');
        expect(component.length).toBe(1);
    });

    test( 'Test the HeaderRegisterTutor search form Header is correct', () => {
        const component = findByDataTestAttr(wrapper, 'tutor-reg-sf-header');
        expect(component.text()).toBe('Register Now');
    });

    test( 'Test the HeaderRegisterTutor search has a form', () => {
        const component = findByDataTestAttr(wrapper, 'tutor-reg-form');
        expect(component.length).toBe(1);
    });

    test( 'Test the HeaderRegisterTutor has a email input', () => {
        const component = findByDataTestAttr(wrapper, 'tutor-reg-sf-email');
        expect(component.length).toBe(1);
    });

    test( 'Test the HeaderRegisterTutor email has the required child nodes', () => {
        const component = findByDataTestAttr(wrapper, 'tutor-reg-sf-email');
        expect(component.find('input').length).toBe(1);
        expect(component.find('label').length).toBe(1);
    });

    test( 'Test the HeaderRegisterTutor has a username input', () => {
        const component = findByDataTestAttr(wrapper, 'tutor-reg-sf-username');
        expect(component.length).toBe(1);
    });

    test( 'Test the HeaderRegisterTutor username has the required child nodes', () => {
        const component = findByDataTestAttr(wrapper, 'tutor-reg-sf-username');
        expect(component.find('input').length).toBe(1);
        expect(component.find('label').length).toBe(1);
    });

    test( 'Test the HeaderRegisterTutor has a level input', () => {
        const component = findByDataTestAttr(wrapper, 'tutor-reg-sf-pwd');
        expect(component.length).toBe(1);
    });

    test( 'Test the HeaderRegisterTutor level has the required child nodes', () => {
        const component = findByDataTestAttr(wrapper, 'tutor-reg-sf-pwd');
        expect(component.find('input').length).toBe(1);
        expect(component.find('label').length).toBe(1);
    });

    test( 'Test the HeaderRegisterTutor has a location input', () => {
        const component = findByDataTestAttr(wrapper, 'tutor-reg-sf-pwd2');
        expect(component.length).toBe(1);
    });

    test( 'Test the HeaderRegisterTutor location has the required child nodes', () => {
        const component = findByDataTestAttr(wrapper, 'tutor-reg-sf-pwd2');
        expect(component.find('input').length).toBe(1);
        expect(component.find('label').length).toBe(1);
    });

    test( 'Test the HeaderRegisterTutor has a submit button', () => {
        const component = findByDataTestAttr(wrapper, 'tutor-reg-sf-submit_btn');
        expect(component.length).toBe(1);
    });

});

