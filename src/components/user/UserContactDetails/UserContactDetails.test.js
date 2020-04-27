import React from 'react';
import { shallow } from 'enzyme';
import { findByDataTestAttr} from '../../../../Utils';
import { storeFn } from '../../../Root';
import UserContactDetails from '.';

// setUp function to create component
// const setUp = (props={}) => {
//     const component = shallow( <UserContactDetails {...props} /> );
//     return component;
// };

// 
// setUp function to create component
//
// This function can be called with a state so we can test with a start up state, hence the state can be set as if we are logged in
// 
const setUp = (initialState = {}, props) => {
    const store=storeFn(initialState);
    const wrapper = shallow(<UserContactDetails store={store} {...props} />).childAt(0).dive();
    return wrapper;
};


describe ('User Contact Details Component', () => {

    let wrapper;

    beforeEach ( () => {
        wrapper = setUp({},
            {
                location: {
                    state: {
                        userType: 'TUTOR'
                    }
                }
            });
    });

    test( 'Test it renders without errors', () => {
        const component = findByDataTestAttr(wrapper, 'contact-dets');
        expect(component.length).toBe(1);
    });

    test( 'Check plain card is rendered', () => {
        const component = findByDataTestAttr(wrapper, 'contact-dets__plain-card');
        expect(component.length).toBe(1);
    });

    test( 'Check plain card header is rendered', () => {
        const component = findByDataTestAttr(wrapper, 'contact-dets__plain-card-header');
        expect(component.length).toBe(1);
        expect(component.find('h2').length).toBe(1);
    });

    test( 'Check plain card content is rendered', () => {
        const component = findByDataTestAttr(wrapper, 'contact-dets__plain-card-body');
        expect(component.length).toBe(1);
        expect(component.find('h2').length).toBe(1);
    });

});

describe ('User Contact Details Component - Tutor Description', () => {

    let wrapper;

    beforeEach ( () => {
        wrapper = setUp({},
            {
                location: {
                    state: {
                        userType: 'TUTOR'
                    }
                }
            });
    });

    test( 'Test it renders without errors', () => {
        const component = findByDataTestAttr(wrapper, 'contact-dets-desc__tutor');
        expect(component.length).toBe(1);
        expect(component.find('h2').length).toBe(1);
        expect(component.find('h3').length).toBe(3);
        expect(component.find('p').length).toBe(12);
    });

});

describe ('User Contact Details Component - Parent Description', () => {

    let wrapper;

    beforeEach ( () => {
        wrapper = setUp({},
            {
                location: {
                    state: {
                        userType: 'PARENT'
                    }
                }
            });
    });

    test( 'Test it renders without errors', () => {
        const component = findByDataTestAttr(wrapper, 'contact-dets-desc__parent');
        expect(component.length).toBe(1);
        expect(component.find('h2').length).toBe(1);
        expect(component.find('h3').length).toBe(3);
        expect(component.find('p').length).toBe(12);
    });

});

describe ('User Contact Details Component - Student Description', () => {

    let wrapper;

    beforeEach ( () => {
        wrapper = setUp({},
            {
                location: {
                    state: {
                        userType: 'STUDENT'
                    }
                }
            });
    });

    test( 'Test it renders without errors', () => {
        const component = findByDataTestAttr(wrapper, 'contact-dets-desc__student');
        expect(component.length).toBe(1);
        expect(component.find('h2').length).toBe(1);
        expect(component.find('h3').length).toBe(3);
        expect(component.find('p').length).toBe(12);
    });

});




