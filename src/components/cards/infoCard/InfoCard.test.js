import React from 'react';
import { shallow } from 'enzyme';
import { checkProps, findByDataTestAttr } from '../../../../Utils';
import InfoCard from '.';


describe ( 'Test InfoCard', () => {

    describe ( 'Check Prop types', () => {

        test ( 'Test proptype (side) is not required ', () => {
            const expectedProps = {
                header: "header",
                img_class: "img_class",
                desc: "desc",
                desc_header: "desc_header",
                desc_items: ["desc_items"]
            };
            const propErrors = checkProps(InfoCard, expectedProps);
            expect(propErrors).toBeUndefined();
        });

        test ( 'Test proptype (header) is required ', () => {
            const expectedProps = {
                img_class: "img_class",
                desc: "desc",
                desc_header: "desc_header",
                desc_items: ["desc_items"]
            };
            const propErrors = checkProps(InfoCard, expectedProps);
            expect(propErrors).toBe('Failed props type: The props `header` is marked as required in `InfoCard`, but its value is `undefined`.');
        });

        test ( 'Test proptype (img_class) is required ', () => {
            const expectedProps = {
                header: "header",
                desc: "desc",
                desc_header: "desc_header",
                desc_items: ["desc_items"]
            };
            const propErrors = checkProps(InfoCard, expectedProps);
            expect(propErrors).toBe('Failed props type: The props `img_class` is marked as required in `InfoCard`, but its value is `undefined`.');
        });

        test ( 'Test proptype (desc) is required ', () => {
            const expectedProps = {
                header: "header",
                img_class: "img_class",
                desc_header: "desc_header",
                desc_items: ["desc_items"]
            };
            const propErrors = checkProps(InfoCard, expectedProps);
            expect(propErrors).toBe('Failed props type: The props `desc` is marked as required in `InfoCard`, but its value is `undefined`.');
        });

        test ( 'Test proptype (desc_header) is required ', () => {
            const expectedProps = {
                header: "header",
                img_class: "img_class",
                desc: "desc",
                desc_items: ["desc_items"]
            };
            const propErrors = checkProps(InfoCard, expectedProps);
            expect(propErrors).toBe('Failed props type: The props `desc_header` is marked as required in `InfoCard`, but its value is `undefined`.');
        });

        test ( 'Test proptype (desc_items) is required ', () => {
            const expectedProps = {
                header: "header",
                img_class: "img_class",
                desc: "desc",
                desc_header: "desc_header"
            };
            const propErrors = checkProps(InfoCard, expectedProps);

            expect(propErrors).toBe('Failed props type: The props `desc_items` is marked as required in `InfoCard`, but its value is `undefined`.');
        });

    });

    describe ( 'Check InfoCard Renders', () => {

        let props;

        beforeEach (() => {
            props = {
                header: "header",
                img_class: "info-card__back-img",
                desc: "desc",
                desc_header: "desc_header",
                desc_items: ['desc_items']
            };
        });

        test ( 'Test InfoCard is rendered ', () => {
            const wrapper = shallow(<InfoCard {...props} />);
            const component = findByDataTestAttr(wrapper, 'InfoCard' );
            expect(component.length).toBe(1);
        });

        test ( 'Test InfoCard subsections are rendered ', () => {
            const wrapper = shallow(<InfoCard {...props} />);
            let component = findByDataTestAttr(wrapper, 'infocard__pa' );
            expect(component.length).toBe(1);
            component = findByDataTestAttr(wrapper, 'infocard__desc' );
            expect(component.length).toBe(1);
        });

        test ( 'Test InfoCard picture area items are rendered ', () => {
            const wrapper = shallow(<InfoCard {...props} />);
            let component = findByDataTestAttr(wrapper, 'infocard__pa-header' );
            expect(component.length).toBe(1);
            component = findByDataTestAttr(wrapper, 'infocard__pa-list' );
            expect(component.length).toBe(1);
        });

        test ( 'Test InfoCard Description is rendered ', () => {
            const wrapper = shallow(<InfoCard {...props} />);
            let component = findByDataTestAttr(wrapper, 'infocard__desc-header' );
            expect(component.length).toBe(1);
            component = findByDataTestAttr(wrapper, 'infocard__desc-paragraph' );
            expect(component.length).toBe(1);
        });
    });

});



