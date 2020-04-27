import React from 'react';
import { shallow } from 'enzyme';
import Header from '.';
import { findByDataTestAttr } from '../../../../Utils';

// setUp function to create component
const setUp = (props={}) => {
    const component = shallow( <Header {...props} /> );
    return component;
};

// 
// As the header component contains many other components I have created tests for each of the different components contained in the header.
// 


// Unit tests for the Header component
describe ('Header Component ( / )', () => {

    let wrapper;

    describe ('Have Props', () => {
        beforeEach ( () => {
            const props = {
                location: {
                    hash: "",
                    pathname: "/"
                }
            };
            wrapper = setUp( props );
        });

        test ('Should Render Header without Errors', () => {
            const component = findByDataTestAttr(wrapper, 'HeaderLanding');
            expect(component.length).toBe(1);
        });
    });

    describe ('Have NO Props', () => {
        beforeEach ( () => {
            wrapper = setUp( );
        });

        test ('Should Render Header without Errors', () => {
            const component = findByDataTestAttr(wrapper, 'Header');
            expect(component.length).toBe(1);
        });
    });
});


describe ('Header Tutor Register Component ( /user-registration-student )', () => {
    let wrapper;

    const props = {
        location: {
            hash: "",
            pathname: "/user-registration-student"
        }
    };
    wrapper = setUp( props );

    test ('Should Render HeaderUserRegistration without Errors', () => {
        const component = findByDataTestAttr(wrapper, 'HeaderUserRegistration');
        expect(component.length).toBe(1);
    });
});

describe ('Header Tutor Register Component ( /user-registration-parent )', () => {
    let wrapper;

    const props = {
        location: {
            hash: "",
            pathname: "/user-registration-parent"
        }
    };
    wrapper = setUp( props );

    test ('Should Render HeaderUserRegistration without Errors', () => {
        const component = findByDataTestAttr(wrapper, 'HeaderUserRegistration');
        expect(component.length).toBe(1);
    });
});

describe ('Header Tutor Register Component ( /user-registration-tutor )', () => {
    let wrapper;

    const props = {
        location: {
            hash: "",
            pathname: "/user-registration-tutor"
        }
    };
    wrapper = setUp( props );

    test ('Should Render HeaderUserRegistration without Errors', () => {
        const component = findByDataTestAttr(wrapper, 'HeaderUserRegistration');
        expect(component.length).toBe(1);
    });
});

// describe ('Header Tutor Register Component ( /tutor-search )', () => {
//     let wrapper;

//     const props = {
//         location: {
//             hash: "",
//             pathname: "/tutor-search"
//         }
//     };
//     wrapper = setUp( props );

//     test ('Should Render HeaderTutorSearch without Errors', () => {
//         const component = findByDataTestAttr(wrapper, 'HeaderTutorSearch');
//         expect(component.length).toBe(1);
//     });
// });

describe ('Header Tutor Register Component ( /user-contact-details )', () => {
    let wrapper;

    const props = {
        location: {
            hash: "",
            pathname: "/user-contact-details"
        }
    };
    wrapper = setUp( props );

    test ('Should Render Header without Errors', () => {
        const component = findByDataTestAttr(wrapper, 'Header');
        expect(component.length).toBe(1);
    });
});

describe ('Header Tutor Register Component ( /verify-media )', () => {
    let wrapper;

    const props = {
        location: {
            hash: "",
            pathname: "/verify-media"
        }
    };
    wrapper = setUp( props );

    test ('Should Render Header without Errors', () => {
        const component = findByDataTestAttr(wrapper, 'Header');
        expect(component.length).toBe(1);
    });
});

describe ('Header Tutor Register Component ( /login )', () => {
    let wrapper;

    const props = {
        location: {
            hash: "",
            pathname: "/login"
        }
    };
    wrapper = setUp( props );

    test ('Should Render Header without Errors', () => {
        const component = findByDataTestAttr(wrapper, 'Header');
        expect(component.length).toBe(1);
    });
});


