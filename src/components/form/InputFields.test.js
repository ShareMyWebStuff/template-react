import React from 'react';
import { shallow } from 'enzyme';
import { checkProps, findByDataTestAttr } from '../../../Utils';
import { InputField, SelectField } from './InputFields';


describe ( 'InputField', () => {

    describe ( 'Check Prop types - required fields', () => {

        test ( 'Test proptype', () => {
            const expectedProps = {
                inputType: "text",
                id: "fieldId",
                name: "fieldName",
                label: "Label Name",
                placeholder: "Placeholder",
                value: "Hello",
                onChangeHandler: () => {},
                validationError: <span className="form__input--error">Validation Error Message</span>
            };
            const propErrors = checkProps(InputField, expectedProps);
            expect(propErrors).toBeUndefined();
        });

        test ( 'Test proptype (inputType) is required ', () => {
            const expectedProps = {
                id: "fieldId",
                name: "fieldName",
                label: "Label Name",
            };
            const propErrors = checkProps(InputField, expectedProps);
            expect(propErrors).toBe( 'Failed props type: The props `inputType` is marked as required in `InputField`, but its value is `undefined`.' );
        });

        test ( 'Test proptype (id) is required ', () => {
            const expectedProps = {
                inputType: "text",
                name: "fieldName",
                label: "Label Name",
            };
            const propErrors = checkProps(InputField, expectedProps);
            expect(propErrors).toBe( 'Failed props type: The props `id` is marked as required in `InputField`, but its value is `undefined`.' );
        });

        test ( 'Test proptype (name) is required ', () => {
            const expectedProps = {
                inputType: "text",
                id: "fieldId",
                label: "Label Name",
            };
            const propErrors = checkProps(InputField, expectedProps);
            expect(propErrors).toBe( 'Failed props type: The props `name` is marked as required in `InputField`, but its value is `undefined`.' );
        });

        test ( 'Test proptype (label) is required ', () => {
            const expectedProps = {
                inputType: "text",
                id: "fieldId",
                name: "fieldName"
            };
            const propErrors = checkProps(InputField, expectedProps);
            expect(propErrors).toBe( 'Failed props type: The props `label` is marked as required in `InputField`, but its value is `undefined`.' );
        });

    });

    describe ( 'Check Prop types - invalid values', () => {

        test ( 'Test invalid inputType', () => {
            const expectedProps = {
                inputType: 0,
                id: "fieldId",
                name: "fieldName",
                label: "Label Name",
            };
            const propErrors = checkProps(InputField, expectedProps);
            expect(propErrors).toBe( "Failed props type: Invalid props `inputType` of type `number` supplied to `InputField`, expected `string`." );
        });

        test ( 'Test invalid positionClassname', () => {
            const expectedProps = {
                inputType: "text",
                id: "fieldId",
                name: "fieldName",
                label: "Label Name",
                positionClassname: 0
            };
            const propErrors = checkProps(InputField, expectedProps);
            expect(propErrors).toBe( "Failed props type: Invalid props `positionClassname` of type `number` supplied to `InputField`, expected `string`." );
        });

        // id
        test ( 'Test invalid id', () => {
            const expectedProps = {
                inputType: "text",
                name: "fieldName",
                label: "Label Name",
                id: 0
            };
            const propErrors = checkProps(InputField, expectedProps);
            expect(propErrors).toBe( "Failed props type: Invalid props `id` of type `number` supplied to `InputField`, expected `string`." );
        });

        // name
        test ( 'Test invalid name', () => {
            const expectedProps = {
                inputType: "text",
                id: "fieldId",
                label: "Label Name",
                name: 0
            };
            const propErrors = checkProps(InputField, expectedProps);
            expect(propErrors).toBe( "Failed props type: Invalid props `name` of type `number` supplied to `InputField`, expected `string`." );
        });

        // label
        test ( 'Test invalid label', () => {
            const expectedProps = {
                inputType: "text",
                id: "fieldId",
                name: "fieldName",
                label: 0
            };
            const propErrors = checkProps(InputField, expectedProps);
            expect(propErrors).toBe( "Failed props type: Invalid props `label` of type `number` supplied to `InputField`, expected `string`." );
        });

        // value
        test ( 'Test invalid value', () => {
            const expectedProps = {
                inputType: "text",
                id: "fieldId",
                name: "fieldName",
                label: "Label Name",
                value: 0
            };
            const propErrors = checkProps(InputField, expectedProps);
            expect(propErrors).toBe( "Failed props type: Invalid props `value` of type `number` supplied to `InputField`, expected `string`." );
        });

        // placeholder
        test ( 'Test invalid placeholder', () => {
            const expectedProps = {
                inputType: "text",
                id: "fieldId",
                name: "fieldName",
                label: "Label Name",
                placeholder: 0
            };
            const propErrors = checkProps(InputField, expectedProps);
            expect(propErrors).toBe( "Failed props type: Invalid props `placeholder` of type `number` supplied to `InputField`, expected `string`." );
        });

        // onChangeHandler
        test ( 'Test invalid onChangeHandler', () => {
            const expectedProps = {
                inputType: "text",
                id: "fieldId",
                name: "fieldName",
                label: "Label Name",
                onChangeHandler: 0
            };
            const propErrors = checkProps(InputField, expectedProps);
            expect(propErrors).toBe( "Failed props type: Invalid props `onChangeHandler` of type `number` supplied to `InputField`, expected `function`." );
        });

        // required
        test ( 'Test invalid required', () => {
            const expectedProps = {
                inputType: "text",
                id: "fieldId",
                name: "fieldName",
                label: "Label Name",
                required: 0
            };
            const propErrors = checkProps(InputField, expectedProps);
            expect(propErrors).toBe( "Failed props type: Invalid props `required` of type `number` supplied to `InputField`, expected `boolean`." );
        });

        // validationError
        test ( 'Test invalid validationError', () => {
            const expectedProps = {
                inputType: "text",
                id: "fieldId",
                name: "fieldName",
                label: "Label Name",
                validationError: 'tester'
            };
            const propErrors = checkProps(InputField, expectedProps);
            expect(propErrors).toBeUndefined(  );
        });

        // systemError
        test ( 'Test invalid systemError', () => {
            const expectedProps = {
                inputType: "text",
                id: "fieldId",
                name: "fieldName",
                label: "Label Name",
                systemError: 'tester'
            };
            const propErrors = checkProps(InputField, expectedProps);
            expect(propErrors).toBeUndefined(  );
        });

    });

    describe ( 'Check input field Renders', () => {

         let props;

        beforeEach (() => {
            props = {
                inputType: 'text',
                positionClassname: 'position-class',  
                dataTest: 'InputField',
                id: 'InputField_id',
                name: 'InputField_name',
                label: 'InputField_label',
                value: 'InputValue',
                placeholder: 'InputField_placeholder',
                onChangeHandler: () => { return true},
                required: true,
                minLength: '10',
                validationError: <span className="form__input--error">Validation Error Message</span>,
                systemError: <span className="form__input--error">System Error Message</span>
            }
        });

        test ( 'Test Rendering - inputType ', () => {
            const wrapper = shallow(<InputField {...props} />);
            const component = wrapper.find("input" );
            expect(component.length).toBe(1);
            expect(component.props()['type']).toBe('text');
        });

        test ( 'Test Rendering - name ', () => {
            const wrapper = shallow(<InputField {...props} />);
            const component = wrapper.find("input" );
            expect(component.length).toBe(1);
            expect(component.props()['name']).toBe('InputField_name');
        });

        test ( 'Test Rendering - className ', () => {
            const wrapper = shallow(<InputField {...props} />);
            const component = wrapper.find("input" );
            expect(component.length).toBe(1);
            expect(component.props()['className']).toBe('form__input');
        });

        test ( 'Test Rendering - value ', () => {
            const wrapper = shallow(<InputField {...props} />);
            const component = wrapper.find("input" );
            expect(component.length).toBe(1);
            expect(component.props()['value']).toBe('InputValue');
        });

        test ( 'Test Rendering - placeholder', () => {
            const wrapper = shallow(<InputField {...props} />);
            const component = wrapper.find("input" );
            expect(component.length).toBe(1);
            expect(component.props()['placeholder']).toBe('InputField_placeholder');
        });

        test ( 'Test Rendering - id', () => {
            const wrapper = shallow(<InputField {...props} />);
            const component = wrapper.find("input" );
            expect(component.length).toBe(1);
            expect(component.props()['id']).toBe('InputField_id');
        });

        test ( 'Test Rendering - required', () => {
            const wrapper = shallow(<InputField {...props} />);
            const component = wrapper.find("input" );
            expect(component.length).toBe(1);
            expect(component.props()['required']).toBeDefined();
        });

        test ( 'Test Rendering - minlen', () => {
            const wrapper = shallow(<InputField {...props} />);
            const component = wrapper.find("input" );
            expect(component.length).toBe(1);
            expect(component.props()['minLength']).toBe('10');

        });

        test ( 'Test Rendering - onChange', () => {
            const wrapper = shallow(<InputField {...props} />);
            const component = wrapper.find("input" );
            expect(component.length).toBe(1);
            expect(component.props()['onChange']).toBeDefined();

        });
    });

    describe ( 'Check label Renders', () => {

        let props;

        beforeEach (() => {
            props = {
                inputType: 'text',
                positionClassname: 'position-class',  
                dataTest: 'InputField',
                id: 'InputField_id',
                name: 'InputField_name',
                label: 'InputField_label',
                value: 'InputValue',
                placeholder: 'InputField_placeholder',
                onChangeHandler: () => { return true},
                required: true,
                minLength: '10',
                validationError: <span className="form__input--error">Validation Error Message</span>,
                systemError: <span className="form__input--error">System Error Message</span>
            }
        });

        test ( 'Test Rendering - htmlFor ', () => {
            const wrapper = shallow(<InputField {...props} />);
            const component = wrapper.find("label" );
            expect(component.length).toBe(1);
            expect(component.props()['htmlFor']).toBe('InputField_id');
        });

        test ( 'Test Rendering - className ', () => {
            const wrapper = shallow(<InputField {...props} />);
            const component = wrapper.find("label" );
            expect(component.length).toBe(1);
            expect(component.props()['className']).toBe('form__label');
        });

        // The label text is stored as a child to the label
        test ( 'Test Rendering - label text ', () => {
            const wrapper = shallow(<InputField {...props} />);
            const component = wrapper.find("label" );
            expect(component.length).toBe(1);
            expect(component.props()['children']).toBe('InputField_label');
        });

   });

   describe ( 'Check Div containing label and input field', () => {

        let props;

        beforeEach (() => {
            props = {
                inputType: 'text',
                positionClassname: 'position-class',  
                dataTest: 'InputField',
                id: 'InputField_id',
                name: 'InputField_name',
                label: 'InputField_label',
                value: 'InputValue',
                placeholder: 'InputField_placeholder',
                onChangeHandler: () => { return true},
                required: true,
                minLength: '10',
                validationError: <span className="form__input--error">Validation Error Message</span>,
                systemError: <span className="form__input--error">System Error Message</span>
            }
        });

        test ( 'Test Rendering - div ', () => {
            const wrapper = shallow(<InputField {...props} />);
            const component = wrapper.find("div" );
            expect(component.length).toBe(1);
            expect(component.find('input').length).toBe(1);
            expect(component.find('label').length).toBe(1);
            expect(component.props()['className']).toBe('form-group mt-2 position-class');
        });

    });

});

describe ( 'SelectField', () => {

    describe ( 'Check Prop types - required fields', () => {

        test ( 'Test proptype', () => {
            const expectedProps = {
                id: 'SelectField_id',
                name: 'SelectField_name',
                label: 'SelectField_label',
                onChangeHandler: () => { return true}
            };
            const propErrors = checkProps(SelectField, expectedProps);
            expect(propErrors).toBeUndefined();
        });

        test ( 'Test proptype (id) is required ', () => {
            const expectedProps = {
                name: 'SelectField_name',
                label: 'SelectField_label',
                onChangeHandler: () => { return true}
            };
            const propErrors = checkProps(SelectField, expectedProps);
            expect(propErrors).toBe( 'Failed props type: The props `id` is marked as required in `SelectField`, but its value is `undefined`.' );
        });

        test ( 'Test proptype (name) is required ', () => {
            const expectedProps = {
                id: 'SelectField_id',
                label: 'SelectField_label',
                onChangeHandler: () => { return true}
            };
            const propErrors = checkProps(SelectField, expectedProps);
            expect(propErrors).toBe( 'Failed props type: The props `name` is marked as required in `SelectField`, but its value is `undefined`.' );
        });

        test ( 'Test proptype (label) is required ', () => {
            const expectedProps = {
                id: 'SelectField_id',
                name: 'SelectField_name',
                onChangeHandler: () => { return true}
            };
            const propErrors = checkProps(SelectField, expectedProps);
            expect(propErrors).toBe( 'Failed props type: The props `label` is marked as required in `SelectField`, but its value is `undefined`.' );
        });

        test ( 'Test proptype (onChangeHandler) is required ', () => {
            const expectedProps = {
                id: 'SelectField_id',
                name: 'SelectField_name',
                label: 'SelectField_label'
            };
            const propErrors = checkProps(SelectField, expectedProps);
            expect(propErrors).toBe( 'Failed props type: The props `onChangeHandler` is marked as required in `SelectField`, but its value is `undefined`.' );
        });

    });

    describe ( 'Check Prop types - invalid values', () => {

        let expectedProps = {};

        beforeEach ( () => {
            expectedProps['dataTest'] = 'data-test',
            expectedProps['id'] = 'id',
            expectedProps['name'] = 'Name',
            expectedProps['label'] = 'Label',
            expectedProps['onChangeHandler'] = () => { return true},
            expectedProps['onFocusHandler'] = () => { return true},
            expectedProps['value'] = 'Value',
            expectedProps['size'] = '10',
            expectedProps['required'] = true,
            expectedProps['notSelectedValue'] = 'Not selected value',
            expectedProps['options'] = [],
            expectedProps['optionKey'] = 'Option Key',
            expectedProps['optionValue'] = 'Option Value',
            expectedProps['positionClassname'] = 'Position Class',
            expectedProps['validationError'] = <div>Hello</div>
        })

        test ( 'Test prop (dataTest)', () => {
            expectedProps['dataTest'] = 0;
            const propErrors = checkProps(SelectField, expectedProps);
            expect(propErrors).toBe("Failed props type: Invalid props `dataTest` of type `number` supplied to `SelectField`, expected `string`.");
        });

        test ( 'Test prop (id)', () => {
            expectedProps['id'] = 0;
            const propErrors = checkProps(SelectField, expectedProps);
            expect(propErrors).toBe("Failed props type: Invalid props `id` of type `number` supplied to `SelectField`, expected `string`.");
        });

        test ( 'Test prop (name)', () => {
            expectedProps['name'] = 0;
            const propErrors = checkProps(SelectField, expectedProps);
            expect(propErrors).toBe("Failed props type: Invalid props `name` of type `number` supplied to `SelectField`, expected `string`.");
        });

        test ( 'Test prop (label)', () => {
            expectedProps['label'] = 0;
            const propErrors = checkProps(SelectField, expectedProps);
            expect(propErrors).toBe("Failed props type: Invalid props `label` of type `number` supplied to `SelectField`, expected `string`.");
        });

        test ( 'Test prop (onChangeHandler)', () => {
            expectedProps['onChangeHandler'] = 0;
            const propErrors = checkProps(SelectField, expectedProps);
            expect(propErrors).toBe("Failed props type: Invalid props `onChangeHandler` of type `number` supplied to `SelectField`, expected `function`.");
        });

        test ( 'Test prop (onFocusHandler)', () => {
            expectedProps['onFocusHandler'] = 0;
            const propErrors = checkProps(SelectField, expectedProps);
            expect(propErrors).toBe("Failed props type: Invalid props `onFocusHandler` of type `number` supplied to `SelectField`, expected `function`.");
        });

        test ( 'Test prop (value)', () => {
            expectedProps['value'] = 0;
            const propErrors = checkProps(SelectField, expectedProps);
            expect(propErrors).toBe("Failed props type: Invalid props `value` of type `number` supplied to `SelectField`, expected `string`.");
        });

        test ( 'Test prop (size)', () => {
            expectedProps['size'] = 0;
            const propErrors = checkProps(SelectField, expectedProps);
            expect(propErrors).toBe("Failed props type: Invalid props `size` of type `number` supplied to `SelectField`, expected `string`.");
        });

        test ( 'Test prop (required)', () => {
            expectedProps['required'] = 0;
            const propErrors = checkProps(SelectField, expectedProps);
            expect(propErrors).toBe("Failed props type: Invalid props `required` of type `number` supplied to `SelectField`, expected `boolean`.");
        });

        test ( 'Test prop (notSelectedValue)', () => {
            expectedProps['notSelectedValue'] = 0;
            const propErrors = checkProps(SelectField, expectedProps);
            expect(propErrors).toBe("Failed props type: Invalid props `notSelectedValue` of type `number` supplied to `SelectField`, expected `string`.");
        });

        test ( 'Test prop (options)', () => {
            expectedProps['options'] = 0;
            const propErrors = checkProps(SelectField, expectedProps);
            expect(propErrors).toBe("Failed props type: Invalid props `options` of type `number` supplied to `SelectField`, expected `array`.");
        });

        test ( 'Test prop (optionKey)', () => {
            expectedProps['optionKey'] = 0;
            const propErrors = checkProps(SelectField, expectedProps);
            expect(propErrors).toBe("Failed props type: Invalid props `optionKey` of type `number` supplied to `SelectField`, expected `string`.");
        });

        test ( 'Test prop (optionValue)', () => {
            expectedProps['optionValue'] = 0;
            const propErrors = checkProps(SelectField, expectedProps);
            expect(propErrors).toBe("Failed props type: Invalid props `optionValue` of type `number` supplied to `SelectField`, expected `string`.");
        });

        test ( 'Test prop (positionClassname)', () => {
            expectedProps['positionClassname'] = 0;
            const propErrors = checkProps(SelectField, expectedProps);
            expect(propErrors).toBe("Failed props type: Invalid props `positionClassname` of type `number` supplied to `SelectField`, expected `string`.");
        });

        test ( 'Test prop (validationError)', () => {
            expectedProps['validationError'] = null;
            const propErrors = checkProps(SelectField, expectedProps);
            expect(propErrors).toBeUndefined();
        });

    });


    describe ( 'Check input field Renders', () => {

        let props;

        beforeEach (() => {
            props = {
                dataTest: 'SelectField_data-test',
                id: 'SelectField_id',
                name: 'SelectField_name',
                label: 'SelectField_Label',
                onChangeHandler: () => { return true},
                onFocusHandler: () => { return true},
                value: 'Value',
                size: '10',
                required: true,
                notSelectedValue: 'Not selected value',
                options: [],
                optionKey: 'Option Key',
                optionValue: 'Option Value',
                positionClassname: 'PositionClass',
                validationError: <span className="form__input--error">Validation Error Message</span>
            }
        });

        test ( 'Test Rendering - className ', () => {
            const wrapper = shallow(<SelectField {...props} />);
            const component = wrapper.find("select" );
            expect(component.length).toBe(1);
            expect(component.props()['className']).toBe('form__input');
        });

        test ( 'Test Rendering - id ', () => {
            const wrapper = shallow(<SelectField {...props} />);
            const component = wrapper.find("select" );
            expect(component.length).toBe(1);
            expect(component.props()['id']).toBe('SelectField_id');
        });

        test ( 'Test Rendering - name ', () => {
            const wrapper = shallow(<SelectField {...props} />);
            const component = wrapper.find("select" );
            expect(component.length).toBe(1);
            expect(component.props()['name']).toBe('SelectField_name');
        });

        test ( 'Test Rendering - onChange ', () => {
            const wrapper = shallow(<SelectField {...props} />);
            const component = wrapper.find("select" );
            expect(component.length).toBe(1);
            expect(component.props()['onChange']).toBeDefined();
        });

        test ( 'Test Rendering - onFocus', () => {
            const wrapper = shallow(<SelectField {...props} />);
            const component = wrapper.find("select" );
            expect(component.length).toBe(1);
            expect(component.props()['onFocus']).toBeDefined();
        });

        // test ( 'Test Rendering - value', () => {
        //     const wrapper = shallow(<SelectField {...props} />);
        //     const component = wrapper.find("select" );
        //     expect(component.length).toBe(1);
        //     expect(component.props()['value']).toBe('form__input');
        // });

        test ( 'Test Rendering - size', () => {
            const wrapper = shallow(<SelectField {...props} />);
            const component = wrapper.find("select" );
            expect(component.length).toBe(1);
            expect(component.props()['size']).toBe('10');
        });

        test ( 'Test Rendering - required ', () => {
            const wrapper = shallow(<SelectField {...props} />);
            const component = wrapper.find("select" );
            expect(component.length).toBe(1);
            expect(component.props()['required']).toBeDefined();
        });

    });

    describe ( 'Check label Renders', () => {

        let props;

        beforeEach (() => {
            props = {
                dataTest: 'SelectField_data-test',
                id: 'SelectField_id',
                name: 'SelectField_name',
                label: 'SelectField_Label',
                onChangeHandler: () => { return true},
                onFocusHandler: () => { return true},
                value: 'Value',
                size: '10',
                required: true,
                notSelectedValue: 'Not selected value',
                options: [],
                optionKey: 'Option Key',
                optionValue: 'Option Value',
                positionClassname: 'PositionClass',
                validationError: <span className="form__input--error">Validation Error Message</span>
            }
        });

        test ( 'Test Rendering - htmlFor', () => {
            const wrapper = shallow(<SelectField {...props} />);
            const component = wrapper.find("label" );
            expect(component.length).toBe(1);
            expect(component.props()['htmlFor']).toBe('SelectField_id');
        });

        test ( 'Test Rendering - className', () => {
            const wrapper = shallow(<SelectField {...props} />);
            const component = wrapper.find("label" );
            expect(component.length).toBe(1);
            expect(component.props()['className']).toBe('form__label');
        });

        test ( 'Test Rendering - children', () => {
            const wrapper = shallow(<SelectField {...props} />);
            const component = wrapper.find("label" );
            expect(component.length).toBe(1);
            expect(component.props()['children']).toBe('SelectField_Label');
        });

    });

    describe ( 'Check Div containing label and input field', () => {

        let props;

        beforeEach (() => {
            props = {
                dataTest: 'SelectField_data-test',
                id: 'SelectField_id',
                name: 'SelectField_name',
                label: 'SelectField_Label',
                onChangeHandler: () => { return true},
                onFocusHandler: () => { return true},
                value: 'Value',
                size: '10',
                required: true,
                notSelectedValue: 'Not selected value',
                options: [],
                optionKey: 'Option Key',
                optionValue: 'Option Value',
                positionClassname: 'position-class',
                validationError: <span className="form__input--error">Validation Error Message</span>
            }
        });

        test ( 'Test Rendering - div ', () => {
            const wrapper = shallow(<SelectField {...props} />);
            const component = wrapper.find("div" );
            expect(component.length).toBe(1);
            expect(component.find('select').length).toBe(1);
            expect(component.find('label').length).toBe(1);
            expect(component.find('span').length).toBe(1);
            expect(component.props()['className']).toBe('form-group mt-2 position-class');
        });

    });

});
