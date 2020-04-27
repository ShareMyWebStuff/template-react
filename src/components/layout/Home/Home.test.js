import React from 'react';
import { shallow } from 'enzyme';
import { findByDataTestAttr} from '../../../../Utils';
import { storeFn } from '../../../Root';
import Home from '.';

// setUp function to create component
const setUp = (props={}) => {
    const component = shallow( <Home {...props} /> );
    return component;
};


describe ('Home Component', () => {

    let wrapper;

    beforeEach ( () => {
        wrapper = setUp();
    });

    test( 'Test it renders without errors', () => {
        const component = findByDataTestAttr(wrapper, 'home');
        expect(component.length).toBe(1);
    });

    test( 'Test the home plain card is shown', () => {
        const component = findByDataTestAttr(wrapper, 'home__plain_card');
        expect(component.length).toBe(1);
    });

    test( 'Test the home content is shown', () => {
        const component = findByDataTestAttr(wrapper, 'home__content');
        expect(component.length).toBe(1);
    });

    test( 'Test the home content is shown', () => {
        const component = findByDataTestAttr(wrapper, 'home__content__subject-list');
        expect(component.length).toBe(1);
        expect(component.find('h2').length).toBeGreaterThan(1);
        expect(component.find('p').length).toBeGreaterThan(1);
        expect(component.find('span').length).toBeGreaterThan(1);
    });
    // home__content__subject
});

