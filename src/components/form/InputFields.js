import React from 'react';
import PropTypes from 'prop-types';

//
// InputField
//
// This is a component that creates an input element on the page. The following are passed as props
//
//  inputtype           text / password - this is the html element type
//  positionClassname   
//  dataTest            The data-test name for testing
//  id                  element id value
//  name                name of the element
//  label               The label name
//  value               The value of the field
//  placeholder         The fields placeholder text
//  onChangeHandler     This is the onchange function
//  required            Set to true if the element is mandatory
//  minLength           If the field only accepts numeric this is the minimum value.
//  validationError     This is where the element field validation error is placed
//  systemError         This is where a second error with the field input can be placed
//
export const InputField = (props) => {

    const divAttrs = { className: `form-group mt-2 ${props.positionClassname}` };
    if (props.dataTest) {
        divAttrs['data-test'] = props.dataTest;
    }

    const attrs = {
        onChange: props.onChangeHandler,
        type: props.inputType,
        name: props.name,
        className: "form__input", 
        value: props.value,
        placeholder: props.placeholder,
        id: props.id
    };

    if ( props.required ) { attrs['required'] = ""  }
    if ( !isNaN(props.minLength) ) { attrs['minLength'] = props.minLength  }

    return (
        <div {...divAttrs}>
            <label htmlFor={props.id} className="form__label">{props.label}</label>
            <input {...attrs}/>
            {props.validationError}
            {props.systemError}
        </div>
    );
}

InputField.propTypes = {
    inputType: PropTypes.string.isRequired,
    positionClassname: PropTypes.string,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChangeHandler: PropTypes.func,
    required: PropTypes.bool,
    validationError: PropTypes.node,
    systemError: PropTypes.node
}



//
// SelectField
//
// This is a component that creates an select element on the page. The following are passed as props
//
//  dataTest            The data-test name for testing
//  id                  element id value
//  name                name of the element
//  onChangeHandler     This is the onchange function
//  onFocusHandler      This is the onfocus function
//  value               The value of the field
//  size                Display size
//  required            Set to true if the element is mandatory
//  notSelectedValue    This is the value shown if nothing has been selected yet
//  options             This is the set of items to be shown in the select field
//  optionKey           This contains the name of the key in the options structure
//  optionValue         This contains the value to be displayed (linked to the optionKey)
//  positionClassname   This is a class to position the element
//  label               The label name
//  validationError     Validation errors
//
export const SelectField = (props) => {

    const divAttrs = { className: `form-group mt-2 ${props.positionClassname}` };
    if (props.dataTest) {
        divAttrs['data-test'] = props.dataTest;
    }
    const attrs = {
        className: "form__input",
        id: props.id,
        name: props.name,
        onChange: props.onChangeHandler,
        onFocus: props.onFocusHandler,
        value: props.selectedValue
    };

    if ( props.size ) { attrs['size'] = `${props.size}` }
    if ( props.required ) { attrs['required'] = ""  }

    const options = props.options.map ( opt => {
        return (
            <option key={opt[props.optionKey]} value={opt[props.optionValue]}>{opt[props.optionValue]}</option>
        );
    })
    if (!(props.notSelectedValue === undefined)) {
        options.unshift (<option key="0" value={props.notSelectedValue}>{props.notSelectedValue}</option>);
    }

    return (
        <div {...divAttrs}>
            <label htmlFor={props.id} className="form__label">{props.label}</label>

            <select {...attrs} >
                {options}
            </select>
            {props.validationError}
        </div>

    );
}

SelectField.propTypes = {
    dataTest: PropTypes.string,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChangeHandler: PropTypes.func.isRequired,
    onFocusHandler: PropTypes.func,
    value: PropTypes.string,
    size: PropTypes.string,
    required: PropTypes.bool,
    notSelectedValue: PropTypes.string,
    options: PropTypes.array,
    optionKey: PropTypes.string,
    optionValue: PropTypes.string,
    positionClassname: PropTypes.string,
    validationError: PropTypes.node
}

