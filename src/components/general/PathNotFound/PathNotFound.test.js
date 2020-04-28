import React from 'react';
import { shallow } from 'enzyme';
import { findByDataTestAttr} from '../../../../Utils';
import PathNotFound from '.';

// setUp function to create component
const setUp = (props={}) => {
    const component = shallow( <PathNotFound {...props} /> );
    return component;
};


describe ('PathNotFound', () => {

    let wrapper;

    beforeEach ( () => {
        wrapper = setUp({});
    });

    test( 'Test it renders without errors', () => {
        const component = findByDataTestAttr(wrapper, 'path_not_found');
        expect(component.length).toBe(1);
    });

    test( 'Test it renders the verify form', () => {
        const component = findByDataTestAttr(wrapper, 'path_not_found__header');
        expect(component.length).toBe(1);
    });

    test( 'Test it renders the verify form picture', () => {
        const component = findByDataTestAttr(wrapper, 'path_not_found__body');
        expect(component.length).toBe(1);
        expect(component.find('p').length).toBe(1);
    });


});

