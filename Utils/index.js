import checkPropTypes from 'check-prop-types';

// 
// Contains the common test functions
// 

export const findByDataTestAttr = (component, attr ) => {
    const wrapper = component.find( `[data-test='${attr}']`);
    return wrapper;
};

export const checkProps = (component, expectedProps) => {

    const propsErr = checkPropTypes (component.propTypes, expectedProps, 'props', component.name );
    return propsErr;
}
