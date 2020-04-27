import React from 'react';
import { shallow } from 'enzyme';
import { findByDataTestAttr} from '../../../../Utils';
import { storeFn } from '../../../Root';
import HeaderLanding from '.';

// setUp function to create component
// const setUp = (props={}) => {
//     const component = shallow( <HeaderLanding {...props} /> );
//     return component;
// };

// 
// setUp function to create component
//
// This function can be called with a state so we can test with a start up state, hence the state can be set as if we are logged in
// 
const setUp = (initialState = {}, props) => {
    const store=storeFn(initialState);
    const wrapper = shallow(<HeaderLanding store={store} {...props} />).childAt(0).dive();
    return wrapper;
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

    test( 'Test the HeaderLanding statements section has several sections', () => {
        const component = findByDataTestAttr(wrapper, 'header-landing-statements');
        expect(component.find('div').length).toBe(4);
    });

    test( 'Test the HeaderLanding statements section has the required number of headers', () => {
        const component = findByDataTestAttr(wrapper, 'header-landing-statements');
        expect(component.find('h2').length).toBe(3);
    });

    test( 'Test the HeaderLanding statements section has the required number of paragraphs', () => {
        const component = findByDataTestAttr(wrapper, 'header-landing-statements');
        expect(component.find('p').length).toBe(5);
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

    
    test( 'Test the HeaderLanding form has select items', () => {
        const component = findByDataTestAttr(wrapper, 'header-landing-form');
        expect(component.find('SelectField').length).toBe(2);
        expect(component.find('InputField').length).toBe(1);
    });

    test( 'Test the HeaderLanding has a submit button', () => {
        const component = findByDataTestAttr(wrapper, 'header-landing-sf-submit-btn');
        expect(component.length).toBe(1);
    });

});

