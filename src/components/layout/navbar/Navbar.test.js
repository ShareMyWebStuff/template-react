import React from 'react';
import { shallow } from 'enzyme';
import { findByDataTestAttr } from '../../../../Utils';
import { storeFn } from '../../../Root';
import Navbar from '.';

// setUp function to create component
const setUp = (initialState = {}, props) => {
    const store=storeFn(initialState);
    const wrapper = shallow(<Navbar store={store} {...props} />).childAt(0).dive();
    return wrapper;
};


describe ('Navbar Component', () => {

    describe ( 'NavBar test not authorised', () => {

        let wrapper;

        beforeEach ( () => {
            const state = {
                auth: {
                    isAuthenticated: false
                }
            }
            wrapper = setUp(state);
        });
    
        test( 'Test nav renders without errors', () => {
            const component = findByDataTestAttr(wrapper, 'nav');
            expect(component.length).toBe(1);
        });
    
        test( 'Test nav contains a logo', () => {
            const component = findByDataTestAttr(wrapper, 'nav-logo');
            expect(component.length).toBe(1);
            expect(component.find('img').length).toBe(1);
        });
    
        test( 'Test nav contains a mission statement', () => {
            const component = findByDataTestAttr(wrapper, 'nav-mission');
            expect(component.length).toBe(1);
            expect(component.text()).toBe('Learning made easy');
        });
    
        test( 'Test nav toggle exists', () => {
            const component = findByDataTestAttr(wrapper, 'nav-toggler');
            expect(component.length).toBe(1);
        });
    
        test( 'Test nav guest is shown', () => {
            const component = findByDataTestAttr(wrapper, 'nav-main-guest');
            expect(component.length).toBe(1);
        });

        test( 'Test nav guest has menu items', () => {
            const component = findByDataTestAttr(wrapper, 'nav-main-guest');
            expect(component.find('li').length).toBeGreaterThan(0);
        });
    });

    describe ( 'NavBar test not authorised', () => {

        let wrapper;

        beforeEach ( () => {
            const state = {
                auth: {
                    isAuthenticated: true
                }
            }
            wrapper = setUp(state);
        });
    
        test( 'Test nav renders without errors', () => {
            const component = findByDataTestAttr(wrapper, 'nav');
            expect(component.length).toBe(1);
        });
    
        test( 'Test nav contains a logo', () => {
            const component = findByDataTestAttr(wrapper, 'nav-logo');
            expect(component.length).toBe(1);
            expect(component.find('img').length).toBe(1);
        });
    
        test( 'Test nav contains a mission statement', () => {
            const component = findByDataTestAttr(wrapper, 'nav-mission');
            expect(component.length).toBe(1);
            expect(component.text()).toBe('Learning made easy');
        });
    
        test( 'Test nav toggle exists', () => {
            const component = findByDataTestAttr(wrapper, 'nav-toggler');
            expect(component.length).toBe(1);
        });
    
        test( 'Test nav auth is shown', () => {
            const component = findByDataTestAttr(wrapper, 'nav-main-auth');
            expect(component.length).toBe(1);
        });

        test( 'Test nav auth has menu items', () => {
            const component = findByDataTestAttr(wrapper, 'nav-main-auth');
            expect(component.find('li').length).toBeGreaterThan(0);
        });
    });




});

