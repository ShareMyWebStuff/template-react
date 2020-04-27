import React, {Component}  from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import history from 'components/history';
import { InputField, SelectField } from '../../form/InputFields';
import { userTypes, userTitles, countries } from '../../../config/constants';

class UserContactDetails extends Component {

    constructor (props) {
        super (props);

        this.state = {
            token: (props.location.state === undefined ? '': props.location.state.token),
            userType: (props.location.state === undefined ? '': props.location.state.userType),
            username: (props.location.state === undefined ? '': props.location.state.username),
            email: (props.location.state === undefined ? '': props.location.state.email),
            password: (props.location.state === undefined ? '': props.location.state.password),
            title: (props.location.state === undefined || props.location.state.title === undefined ? '': props.location.state.title),
            firstname: (props.location.state === undefined || props.location.state.firstname === undefined ? '': props.location.state.firstname),
            lastname: (props.location.state === undefined || props.location.state.lastname === undefined ? '': props.location.state.lastname),
            gender: (props.location.state === undefined || props.location.state.gender === undefined ? '': props.location.state.gender),
            address1: (props.location.state === undefined || props.location.state.address1 === undefined ? '': props.location.state.address1),
            address2: (props.location.state === undefined || props.location.state.address2 === undefined ? '': props.location.state.address2),
            town: (props.location.state === undefined || props.location.state.town === undefined ? '': props.location.state.town),
            county: (props.location.state === undefined || props.location.state.county === undefined ? '': props.location.state.county),
            postcode: (props.location.state === undefined || props.location.state.postcode === undefined ? '': props.location.state.postcode),
            country: (props.location.state === undefined || props.location.state.country === undefined ? '': props.location.state.country),
            phone: (props.location.state === undefined || props.location.state.phone === undefined ? '': props.location.state.phone),
            mobile: (props.location.state === undefined || props.location.state.mobile === undefined ? '': props.location.state.mobile),
            errorMsgs: {},
        };
        // resetRegisterErrors();

        if (props.location.state === undefined ) {
            history.push ('/');
        }

    }

    onChangeHandler = (e) => {
        this.setState( { [e.target.name]: e.target.value });
    }

    onSubmitBack = async (e) => {
        try {
            e.preventDefault();

            const passBack = {
                userType: this.state.userType, 
                username: this.state.username, 
                email: this.state.email, 
                password: this.state.password
            };

            if ( this.state.title !== '' && this.state.title !== 'Select') passBack['title'] = this.state.title;
            if ( this.state.firstname !== '' ) passBack['firstname'] = this.state.firstname;
            if ( this.state.lastname !== '' ) passBack['lastname'] = this.state.lastname;
            if ( this.state.address1 !== '' ) passBack['address1'] = this.state.address1;
            if ( this.state.address2 !== '' ) passBack['address2'] = this.state.address2;
            if ( this.state.town !== '' ) passBack['town'] = this.state.town;
            if ( this.state.county !== '' ) passBack['county'] = this.state.county;
            if ( this.state.postcode !== '' ) passBack['postcode'] = this.state.postcode;
            if ( this.state.country !== '' ) passBack['country'] = this.state.country;
            if ( this.state.phone !== '' ) passBack['phone'] = this.state.phone;
            if ( this.state.mobile !== '' ) passBack['mobile'] = this.state.mobile;

            history.push( { pathname: userTypes[this.state.userType].pathname, search: '', state:{ ...passBack } } );

        } catch (err) {
            console.log ('headerUserRegistration');
            console.log (err);
        }
    };

    formValidation = () => {
        const retObj = {
            valid: false,
            errorMsgs: {}
        }

        // title === '' / 'Select
        if ( this.state.title === '' || this.state.title === 'Select' ) {
            retObj.errorMsgs['title'] = 'Please select a title';
        }

        if ( this.state.firstname.length < 2 ) {
            retObj.errorMsgs['firstname'] = 'Your firstname is too short.';
        } else if  (this.state.firstname.length > 50 ) {
            retObj.errorMsgs['firstname'] = `Your firstname is too long (${this.state.firstname.length} / 50 characters).`;
        }

        if ( this.state.lastname.length < 2 ) {
            retObj.errorMsgs['lastname'] = 'Your lastname is too short.';
        } else if  (this.state.lastname.length > 50 ) {
            retObj.errorMsgs['lastname'] = `Your lastname is too long (${this.state.lastname.length} / 50 characters).`;
        }

        // if ( this.state.gender !== 'M' && this.state.gender !== 'F') {
        //     retObj.errorMsgs['gender'] = `Please entered your gender.`;
        // }

        if ( this.state.address1.length < 2 ) {
            retObj.errorMsgs['address1'] = 'Your address1 is too short.';
        } else if  (this.state.address1.length > 80 ) {
            retObj.errorMsgs['address1'] = `Your address1 is too long (${this.state.address1.length} / 80 characters).`;
        }

        if ( this.state.address2.length > 80 ) {
            retObj.errorMsgs['address2'] = `Your address2 is too long (${this.state.address2.length} / 80 characters).`;
        }

        if ( this.state.town.length < 2 ) {
            retObj.errorMsgs['town'] = 'Your town is too short.';
        } else if  (this.state.town.length > 80 ) {
            retObj.errorMsgs['town'] = `Your town is too long (${this.state.town.length} / 80 characters).`;
        }

        if ( this.state.county.length < 2 ) {
            retObj.errorMsgs['county'] = 'Your county is too short.';
        } else if  (this.state.county.length > 80 ) {
            retObj.errorMsgs['county'] = `Your county is too long (${this.state.county.length} / 80 characters).`;
        }

        if ( this.state.postcode.length < 3 ) {
            retObj.errorMsgs['postcode'] = 'Your postcode is too short.';
        } else if ( this.state.postcode.length > 11 ) {
            retObj.errorMsgs['postcode'] = `Your postcode is too long (${this.state.postcode.length} / 11 characters).`;
        }

        if ( this.state.country === '' || this.state.country === 'Select' ) {
            retObj.errorMsgs['country'] = 'Please select a country';
        }

        if ( this.state.phone.length > 20 ) {
            retObj.errorMsgs['phone'] = `Your phone is too long (${this.state.phone.length} / 11 characters).`;
        }

        if ( this.state.mobile.length > 20 ) {
            retObj.errorMsgs['mobile'] = `Your mobile is too long (${this.state.mobile.length} / 11 characters).`;
        }

        return retObj;
    }

    onSubmit = async (e) => {
        try {
            e.preventDefault();

            // 
            const retVal = this.formValidation ();

            if ( Object.keys(retVal.errorMsgs).length ) {
                this.setState ( { errorMsgs: retVal.errorMsgs});
            } else {

                const config = {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'X-Auth-Token': this.state.token
                    },
                    validateStatus: function (status) {
                        return ( ( status >= 200 && status < 300 ) || status === 401 || status === 422 || status === 500 || status === 503 )
                    },
                    crossDomain: true
                }
                const gender = userTitles.filter ( value => {
                    return (value.value === this.state.title);
                });

                const body = JSON.stringify({
                    title: this.state.title, 
                    firstname: this.state.firstname, 
                    lastname: this.state.lastname, 
                    gender: gender[0].gender,
                    address1: this.state.address1, 
                    address2: this.state.address2, 
                    town: this.state.town, 
                    county: this.state.county, 
                    postcode: this.state.postcode, 
                    country: this.state.country, 
                    phone: this.state.phone, 
                    mobile: this.state.mobile, 
                    domainName: process.env.REACT_APP_DOMAIN_NAME,
                    websiteName: process.env.REACT_APP_WEBSITE_NAME,
                    password: this.state.password
                });

                const res = await axios.post(`${process.env.REACT_APP_API_URL}user-contact-details`, body, config);
                const data = res.data;

                if ( res.status !== 200 && res.status !== 201 ) {
                    this.setState ({errorMsg: data.errorMsg});
                } else {
                    history.push(  { pathname: '/login', search: '', 
                                    state:{ waitingValidation: true } } );
                                    }
            }


        } catch (err) {
            console.log ('headerUserRegistration');
            console.log (err);
        }
    };

    render () {

        const accountCreation = {
            'TUTOR':<div className="contact-dets-desc" data-test="contact-dets-desc__tutor">
                        <h2 className="ml-2 my-2">Account Creation - Tutor</h2>
                        <p>Create an account with us now for unlimited access to the many features we offer. We have a host of features that are tailored to help 
                            improve and expand your tutoring business. Once you create the account, click on the link we have emailed you to validate the account.</p>
    
                        <h3 className="my-2">Student Lessons</h3>
                        <p className="ml-4">- record homework for you, students and parents to see.</p>
                        <p className="ml-4">- record homework marks so parents can work with the student.</p>
                        <p className="ml-4">- make private notes about the session to help with the next lesson.</p>
    
                        <h3 className="my-2">Create Study Groups</h3>
                        <p className="ml-4">- create a study group specifying the subjects and dates (e.g. easter half term).</p>
                        <p className="ml-4">- we will notify all local students taking these subjects.</p>
                        <p className="ml-4">- your group will be shown to students and parents looking for tuition in the specified subject.</p>
                        <p className="ml-4">- we record who is interested, so you have a good idea of the take up.</p>
    
                        <h3 className="my-2">Illness / Holidays</h3>
                        <p className="ml-4">We have a comprehensive diary that allows you and the students to record holidays and illness.</p>
                        <p className="ml-4">- this will be shown on the schedule for all to see.</p>
                        <p className="ml-4">- we will communicate with affected people via email or SMS.</p>
                        <p className="ml-4">- we allow sick students lessons to be offered to other students.</p>
                    </div>,
            'STUDENT':  <div className="contact-dets-desc" data-test="contact-dets-desc__student">
                            <h2 className="ml-2 my-2">Account Creation - Student</h2>
                            <p>Create an account with us now for unlimited access to the many features we offer. We have a host of features that are tailored to help 
                                improve and expand your tutoring business. Once you create the account, click on the link we have emailed you to validate the account.</p>
    
                            <h3 className="my-2">Student Lessons</h3>
                            <p className="ml-4">- record homework for you, students and parents to see.</p>
                            <p className="ml-4">- record homework marks so parents can work with the student.</p>
                            <p className="ml-4">- make private notes about the session to help with the next lesson.</p>
    
                            <h3 className="my-2">Create Study Groups</h3>
                            <p className="ml-4">- create a study group specifying the subjects and dates (e.g. easter half term).</p>
                            <p className="ml-4">- we will notify all local students taking these subjects.</p>
                            <p className="ml-4">- your group will be shown to students and parents looking for tuition in the specified subject.</p>
                            <p className="ml-4">- we record who is interested, so you have a good idea of the take up.</p>
    
                            <h3 className="my-2">Illness / Holidays</h3>
                            <p className="ml-4">We have a comprehensive diary that allows you and the students to record holidays and illness.</p>
                            <p className="ml-4">- this will be shown on the schedule for all to see.</p>
                            <p className="ml-4">- we will communicate with affected people via email or SMS.</p>
                            <p className="ml-4">- we allow sick students lessons to be offered to other students.</p>
                        </div>,
            'PARENT':   <div className="contact-dets-desc" data-test="contact-dets-desc__parent">
                            <h2 className="ml-2 my-2">Account Creation - Parent</h2>
                            <p>Create an account with us now for unlimited access to the many features we offer. We have a host of features that are tailored to help 
                                improve and expand your tutoring business. Once you create the account, click on the link we have emailed you to validate the account.</p>
    
                            <h3 className="my-2">Student Lessons</h3>
                            <p className="ml-4">- record homework for you, students and parents to see.</p>
                            <p className="ml-4">- record homework marks so parents can work with the student.</p>
                            <p className="ml-4">- make private notes about the session to help with the next lesson.</p>
    
                            <h3 className="my-2">Create Study Groups</h3>
                            <p className="ml-4">- create a study group specifying the subjects and dates (e.g. easter half term).</p>
                            <p className="ml-4">- we will notify all local students taking these subjects.</p>
                            <p className="ml-4">- your group will be shown to students and parents looking for tuition in the specified subject.</p>
                            <p className="ml-4">- we record who is interested, so you have a good idea of the take up.</p>
    
                            <h3 className="my-2">Illness / Holidays</h3>
                            <p className="ml-4">We have a comprehensive diary that allows you and the students to record holidays and illness.</p>
                            <p className="ml-4">- this will be shown on the schedule for all to see.</p>
                            <p className="ml-4">- we will communicate with affected people via email or SMS.</p>
                            <p className="ml-4">- we allow sick students lessons to be offered to other students.</p>
                        </div>                      
        };
    
    
        const titleError     = (this.state.errorMsgs["title"] ? <span className="form__input--error">{this.state.errorMsgs["title"]}</span> :null);
        const firstnameError = (this.state.errorMsgs["firstname"] ? <span className="form__input--error">{this.state.errorMsgs["firstname"]}</span> :null);
        const lastnameError  = (this.state.errorMsgs["lastname"] ? <span className="form__input--error">{this.state.errorMsgs["lastname"]}</span> :null);
        const address1Error  = (this.state.errorMsgs["address1"] ? <span className="form__input--error">{this.state.errorMsgs["address1"]}</span> :null);
        const address2Error  = (this.state.errorMsgs["address2"] ? <span className="form__input--error">{this.state.errorMsgs["address2"]}</span> :null);
        const townError      = (this.state.errorMsgs["town"] ? <span className="form__input--error">{this.state.errorMsgs["town"]}</span> :null);
        const countyError    = (this.state.errorMsgs["county"] ? <span className="form__input--error">{this.state.errorMsgs["county"]}</span> :null);
        const postcodeError  = (this.state.errorMsgs["postcode"] ? <span className="form__input--error">{this.state.errorMsgs["postcode"]}</span> :null);
        const countryError   = (this.state.errorMsgs["country"] ? <span className="form__input--error">{this.state.errorMsgs["country"]}</span> :null);
        const phoneError     = (this.state.errorMsgs["phone"] ? <span className="form__input--error">{this.state.errorMsgs["phone"]}</span> :null);
        const mobileError    = (this.state.errorMsgs["mobile"] ? <span className="form__input--error">{this.state.errorMsgs["mobile"]}</span> :null);
        const userTypeDesc   = (this.state.userType === null ? 'Unknown' : userTypes[this.state.userType].userTypeDesc);

        return (
            <section className="container my-4" data-test="contact-dets">

            <div className="plain-card" data-test="contact-dets__plain-card">

                <div className="plain-card__header" data-test="contact-dets__plain-card-header">
                    <h2>{userTypeDesc} Contact Details</h2>
                </div>

                <div className="plain-card__content" data-test="contact-dets__plain-card-body">

                    <div className="contact-details-page ">

                        {accountCreation[this.state.userType]}

                        <form onSubmit={e => this.onSubmit(e)} className="contact-dets-form" data-test="contact-dets__plain-card-form">

                            <SelectField    id="title" 
                                            name="title" 
                                            label="Title" 
                                            value={this.state.title} 
                                            selectedValue={this.state.title}
                                            options={userTitles} 
                                            optionKey="key" 
                                            optionValue="value" 
                                            positionClassname="title-style"
                                            onChangeHandler={this.onChangeHandler}
                                            validationError={titleError} />

                            <InputField inputType="text"
                                        id="firstname"
                                        name="firstname"
                                        label="Firstname"
                                        placeholder="Firstname"
                                        positionClassname="firstname-style"
                                        value={this.state.firstname}
                                        onChangeHandler={this.onChangeHandler}
                                        validationError={firstnameError} />

                            <InputField inputType="text"
                                        id="lastname"
                                        name="lastname"
                                        label="Lastname"
                                        placeholder="Lastname"
                                        positionClassname="lastname-style"
                                        value={this.state.lastname}
                                        onChangeHandler={this.onChangeHandler}
                                        validationError={lastnameError} />

                            <InputField inputType="text"
                                        id="address1"
                                        name="address1"
                                        label="Address 1"
                                        placeholder="Address 1"
                                        positionClassname="address-1-style"
                                        value={this.state.address1}
                                        onChangeHandler={this.onChangeHandler}
                                        validationError={address1Error} />

                            <InputField inputType="text"
                                        id="address2"
                                        name="address2"
                                        label="Address 2"
                                        placeholder="Address 2"
                                        positionClassname="address-2-style"
                                        value={this.state.address2}
                                        onChangeHandler={this.onChangeHandler}
                                        validationError={address2Error} />

                            <InputField inputType="text"
                                        id="town"
                                        name="town"
                                        label="Town"
                                        placeholder="Town"
                                        positionClassname="town-style"
                                        value={this.state.town}
                                        onChangeHandler={this.onChangeHandler}
                                        validationError={townError} />

                            <InputField inputType="text"
                                        id="county"
                                        name="county"
                                        label="County"
                                        placeholder="County"
                                        positionClassname="county-style"
                                        value={this.state.county}
                                        onChangeHandler={this.onChangeHandler}
                                        validationError={countyError} />

                            <InputField inputType="text"
                                        id="postcode"
                                        name="postcode"
                                        label="Postcode"
                                        placeholder="Postcode"
                                        positionClassname="postcode-style"
                                        value={this.state.postcode}
                                        onChangeHandler={this.onChangeHandler}
                                        validationError={postcodeError} />

                            <SelectField    id="country" 
                                            name="country" 
                                            label="Country" 
                                            value={this.state.country} 
                                            selectedValue={this.state.country}
                                            options={countries} 
                                            optionKey="key" 
                                            optionValue="value" 
                                            positionClassname="country-style"
                                            onChangeHandler={this.onChangeHandler}
                                            validationError={countryError} />

                            <InputField inputType="text"
                                        id="phone"
                                        name="phone"
                                        label="Phone"
                                        placeholder="Phone"
                                        positionClassname="phone-style"
                                        value={this.state.phone}
                                        onChangeHandler={this.onChangeHandler}
                                        validationError={phoneError} />

                            <InputField inputType="text"
                                        id="mobile"
                                        name="mobile"
                                        label="Mobile"
                                        placeholder="Mobile"
                                        positionClassname="mobile-style"
                                        value={this.state.mobile}
                                        onChangeHandler={this.onChangeHandler}
                                        validationError={mobileError} />

                            <button onClick={e => this.onSubmitBack(e)} className="btn btn-blk btn-submit mt-4 cdf__back">Back</button>
                            <button className="btn btn-blk btn-submit mt-4 cdf__create-account">Create Account</button>

                        </form>

                    </div>

                </div>

            </div>

        </section>

        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.login.isAuthenticated
})

export default connect(mapStateToProps, { } )(UserContactDetails);
