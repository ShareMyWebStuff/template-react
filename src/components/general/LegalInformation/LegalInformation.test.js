import React from 'react';
import { shallow } from 'enzyme';
import { findByDataTestAttr } from '../../../../Utils';
import LegalInformation from '.';

// 
// setUp function to create component
//
// This function can be called with a state so we can test with a start up state, hence the state can be set as if we are logged in
// 
const setUp = (props={}) => {
    const component = shallow( <LegalInformation {...props} /> );
    return component;
};

// 
// Test the LegalInformation component
// 
describe ('LegalInformation Component', () => {

    let wrapper;

    beforeEach ( () => {
        wrapper = setUp({
            location: {
                state: {
                    legalDocument: "terms"
                }
            }
        });
    });

    test( 'Test it renders without errors', () => {
        const component = findByDataTestAttr(wrapper, 'legal-info');
        expect(component.length).toBe(1);
    });

    test( 'Test the home plain card is shown', () => {
        const component = findByDataTestAttr(wrapper, 'legal-info__plain_card');
        expect(component.length).toBe(1);
        expect(component.find('select').length).toBe(1);
        expect(component.find('option').length).toBe(3);
    });

    test( 'Test the home content is shown', () => {
        const component = findByDataTestAttr(wrapper, 'legal-info__content');
        expect(component.length).toBe(1);
    });

});

