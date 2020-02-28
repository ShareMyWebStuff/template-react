// import React from 'react';
// import { shallow } from 'enzyme';
// import { findByDataTestAttr} from '../../../../Utils';
// import { storeFn } from '../../../Root';
// import LoginModal from '.';

// // setUp function to create component
// const setUp = (initialState = {}, props) => {
//     const store=storeFn(initialState);
//     const wrapper = shallow(<LoginModal store={store} {...props} />).childAt(0).dive();
//     return wrapper;
// };


// describe ('Header Landing Component', () => {

//     let wrapper;

//     beforeEach ( () => {
//         wrapper = setUp();
//     });

//     test( 'Test it renders without errors', () => {
//         const component = findByDataTestAttr(wrapper, 'modal-login');
//         console.log (component.debug());
//         expect(component.length).toBe(1);
//     });
// });
