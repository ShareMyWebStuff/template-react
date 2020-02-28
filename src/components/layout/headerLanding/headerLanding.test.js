import React from 'react';
import { shallow } from 'enzyme';
import { findByDataTestAttr} from '../../../../Utils';
import HeaderLanding from '.';

// setUp function to create component
const setUp = (props={}) => {
    const component = shallow( <HeaderLanding {...props} /> );
    return component;
};


describe ('Header Landing Component', () => {

    let wrapper;

    beforeEach ( () => {
        wrapper = setUp();
    });

    test( 'Test it renders without errors', () => {
        const component = findByDataTestAttr(wrapper, 'header-landing');
        expect(component.length).toBe(1);
    });

    test( 'Test the HeaderLanding statements section loads', () => {
        const component = findByDataTestAttr(wrapper, 'header-landing-statements');
        expect(component.length).toBe(1);
    });

    test( 'Test the HeaderLanding search form section loads', () => {
        const component = findByDataTestAttr(wrapper, 'header-landing-sf');
        expect(component.length).toBe(1);
    });

    test( 'Test the HeaderLanding search form Header is correct', () => {
        const component = findByDataTestAttr(wrapper, 'header-landing-sf-header');
        expect(component.text()).toBe('FindMyTutor');
    });

    test( 'Test the HeaderLanding search has a form', () => {
        const component = findByDataTestAttr(wrapper, 'header-landing-form');
        expect(component.length).toBe(1);
    });

    test( 'Test the HeaderLanding has a tuition type input', () => {
        const component = findByDataTestAttr(wrapper, 'header-landing-sf-tuition-type');
        expect(component.length).toBe(1);
    });

    test( 'Test the HeaderLanding tuition type has the required child nodes', () => {
        const component = findByDataTestAttr(wrapper, 'header-landing-sf-tuition-type');
        expect(component.find('input').length).toBe(2);
        expect(component.find('label').length).toBe(2);
    });

    test( 'Test the HeaderLanding has a subject input', () => {
        const component = findByDataTestAttr(wrapper, 'header-landing-sf-subject');
        expect(component.length).toBe(1);
    });

    test( 'Test the HeaderLanding subject has the required child nodes', () => {
        const component = findByDataTestAttr(wrapper, 'header-landing-sf-subject');
        expect(component.find('input').length).toBe(1);
        expect(component.find('label').length).toBe(1);
    });

    test( 'Test the HeaderLanding has a level input', () => {
        const component = findByDataTestAttr(wrapper, 'header-landing-sf-level');
        expect(component.length).toBe(1);
    });

    test( 'Test the HeaderLanding level has the required child nodes', () => {
        const component = findByDataTestAttr(wrapper, 'header-landing-sf-level');
        expect(component.find('input').length).toBe(1);
        expect(component.find('label').length).toBe(1);
    });

    test( 'Test the HeaderLanding has a location input', () => {
        const component = findByDataTestAttr(wrapper, 'header-landing-sf-location');
        expect(component.length).toBe(1);
    });

    test( 'Test the HeaderLanding location has the required child nodes', () => {
        const component = findByDataTestAttr(wrapper, 'header-landing-sf-location');
        expect(component.find('input').length).toBe(1);
        expect(component.find('label').length).toBe(1);
    });

    test( 'Test the HeaderLanding has a submit button', () => {
        const component = findByDataTestAttr(wrapper, 'header-landing-sf-submit-btn');
        expect(component.length).toBe(1);
    });

});

