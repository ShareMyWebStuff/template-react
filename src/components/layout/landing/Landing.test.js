import React from 'react';
import { shallow } from 'enzyme';
import { findByDataTestAttr } from '../../../../Utils';
import Landing from '.';

// setUp function to create component
const setUp = (initialState = {}, props) => {
    const wrapper = shallow(<Landing {...props} />);
    return wrapper;
};


describe ('Landing Component', () => {

    let wrapper;

    beforeEach ( () => {
        wrapper = setUp();
    });

    test( 'Test it renders without errors', () => {
        const component = findByDataTestAttr(wrapper, 'landing');
        expect(component.length).toBe(1);
    });

    test( 'Test the landing header is ', () => {
        const component = findByDataTestAttr(wrapper, 'landing-header');
        expect(component.length).toBe(1);
    });

    test( 'Test the landing header text is correct ', () => {
        const component = findByDataTestAttr(wrapper, 'landing-header');
        expect(component.text()).toBe('How It Works');
    });

    test( 'Test the landing InfoCards appear', () => {
        const component = findByDataTestAttr(wrapper, 'landing');
        expect(component.find('InfoCard').length).toBe(3);
    });


});

