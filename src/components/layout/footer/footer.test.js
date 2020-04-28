import React from 'react';
import { shallow } from 'enzyme';
import { findByDataTestAttr } from '../../../../Utils';
import { storeFn } from '../../../Root';
import Footer from '.';

// 
// setUp function to create component
//
// This function can be called with a state so we can test with a start up state, hence the state can be set as if we are logged in
// 
const setUp = (initialState = {}, props) => {
    const store=storeFn(initialState);
    const wrapper = shallow(<Footer store={store} {...props} />).childAt(0).dive();
    return wrapper;
};

// 
// Footer
// 
// This component only needs to be tested to see if all its parts render. It is not connected to the 
// store.
// 
describe ( 'Test Footer', () => {

    describe ( 'Test Footer - no user is logged in', () => {

        let wrapper;

        beforeEach ( () => {
            const state = {
                login: {
                    isAuthenticated: false
                }
            }
            wrapper = setUp(state);
        });

        test( 'Test Footer is rendered', () => {
            const component = findByDataTestAttr(wrapper, 'footer');
            expect(component.length).toBe(1);
        });

        test( 'Test Footer Box is rendered', () => {
            const component = findByDataTestAttr(wrapper, 'footer-box');
            expect(component.length).toBe(1);
        });

        test( 'Test Footer Box Logo is rendered', () => {
            const component = findByDataTestAttr(wrapper, 'footer-box');
            expect(component.length).toBe(1);
        });

        test ( 'Test Footer Box Social Media is rendered ', () => {
            let component = findByDataTestAttr(wrapper, 'footer-box__social-media' );
            expect(component.length).toBe(1);
            component = findByDataTestAttr(wrapper, 'footer-box__fb' );
            expect(component.length).toBe(1);
            component = findByDataTestAttr(wrapper, 'footer-box__twitter' );
            expect(component.length).toBe(1);
            component = findByDataTestAttr(wrapper, 'footer-box__email' );
            expect(component.length).toBe(1);
        });

        test ( 'Test Footer Box Mission Statement is rendered ', () => {
            const component = findByDataTestAttr(wrapper, 'footer-box__ms' );
            expect(component.length).toBe(1);
        });

        test ( 'Test Footer Box Copyright is rendered ', () => {
            const component = findByDataTestAttr(wrapper, 'footer-box__copyright' );
            expect(component.length).toBe(1);
        });

        test ( 'Test Footer Box Navigation is rendered ', () => {
            const component = findByDataTestAttr(wrapper, 'footer-box__navigation' );
            expect(component.length).toBe(1);
        });

    });

    describe ( 'Test Footer - user is logged in', () => {

        let wrapper;

        beforeEach ( () => {
            const state = {
                login: {
                    isAuthenticated: true
                }
            }
            wrapper = setUp(state);
        });

        test( 'Test Footer is rendered', () => {
            const component = findByDataTestAttr(wrapper, 'footer');
            expect(component.length).toBe(1);
        });

        test( 'Test Footer Box is rendered', () => {
            const component = findByDataTestAttr(wrapper, 'footer-box');
            expect(component.length).toBe(1);
        });

        test( 'Test Footer Box Logo is rendered', () => {
            const component = findByDataTestAttr(wrapper, 'footer-box');
            expect(component.length).toBe(1);
        });

        test ( 'Test Footer Box Social Media is rendered ', () => {
            let component = findByDataTestAttr(wrapper, 'footer-box__social-media' );
            expect(component.length).toBe(1);
            component = findByDataTestAttr(wrapper, 'footer-box__fb' );
            expect(component.length).toBe(1);
            component = findByDataTestAttr(wrapper, 'footer-box__twitter' );
            expect(component.length).toBe(1);
            component = findByDataTestAttr(wrapper, 'footer-box__email' );
            expect(component.length).toBe(1);
        });

        test ( 'Test Footer Box Mission Statement is rendered ', () => {
            const component = findByDataTestAttr(wrapper, 'footer-box__ms' );
            expect(component.length).toBe(1);
        });

        test ( 'Test Footer Box Copyright is rendered ', () => {
            const component = findByDataTestAttr(wrapper, 'footer-box__copyright' );
            expect(component.length).toBe(1);
        });

        test ( 'Test Footer Box Navigation is rendered ', () => {
            const component = findByDataTestAttr(wrapper, 'footer-box__navigation' );
            expect(component.length).toBe(1);
        });

    });

})


// describe ( 'Test Footer', () => {

//     let wrapper;

//     beforeEach ( () => {
//         wrapper = shallow(<Footer  />);
//     });

//     test ( 'Test Footer is rendered ', () => {
//         const component = findByDataTestAttr(wrapper, 'footer' );
//         expect(component.length).toBe(1);
//     });

//     test ( 'Test Footer Box is rendered ', () => {
//         const component = findByDataTestAttr(wrapper, 'footer-box' );
//         expect(component.length).toBe(1);
//     });

//     test ( 'Test Footer Box Logo is rendered ', () => {
//         const component = findByDataTestAttr(wrapper, 'footer-box__logo' );
//         expect(component.length).toBe(1);
//     });

//     test ( 'Test Footer Box Social Media is rendered ', () => {
//         let component = findByDataTestAttr(wrapper, 'footer-box__social-media' );
//         expect(component.length).toBe(1);
//         component = findByDataTestAttr(wrapper, 'footer-box__fb' );
//         expect(component.length).toBe(1);
//         component = findByDataTestAttr(wrapper, 'footer-box__twitter' );
//         expect(component.length).toBe(1);
//         component = findByDataTestAttr(wrapper, 'footer-box__email' );
//         expect(component.length).toBe(1);
//     });

//     test ( 'Test Footer Box Mission Statement is rendered ', () => {
//         const component = findByDataTestAttr(wrapper, 'footer-box__ms' );
//         expect(component.length).toBe(1);
//     });

//     test ( 'Test Footer Box Copyright is rendered ', () => {
//         const component = findByDataTestAttr(wrapper, 'footer-box__copyright' );
//         expect(component.length).toBe(1);
//     });

//     test ( 'Test Footer Box Navigation is rendered ', () => {
//         const component = findByDataTestAttr(wrapper, 'footer-box__navigation' );
//         expect(component.length).toBe(1);
//     });

// })

