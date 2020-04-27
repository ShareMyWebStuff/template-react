import React, {Component, Fragment}  from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import { register, resetRegisterErrors } from '../../../actions/register';
import history from 'components/history';
import { userTypes } from '../../../config/constants';
import { InputField } from '../../form/InputFields';

class HeaderRegisterUser extends Component {

    constructor (props) {
        super (props);

        const stateSetup = {
            token: null,
            errorMsg: {},
        };

        stateSetup['username'] = (props.username === undefined ? 'dadfromwoking': props.username);
        stateSetup['email'] = (props.email === undefined ? 'dad@dad.co.uk': props.email);
        stateSetup['password'] = (props.password === undefined ? 'Sybase01': props.password);
        stateSetup['password2'] = (props.password === undefined ? 'Sybase01': props.password);

        // stateSetup['username'] = (props.username === undefined ? '': props.username);
        // stateSetup['email'] = (props.email === undefined ? '': props.email);
        // stateSetup['password'] = (props.password === undefined ? '': props.password);
        // stateSetup['password2'] = (props.password === undefined ? '': props.password);

        stateSetup['userType'] = props.userType;
        if (props.title     !== undefined) stateSetup['title']     = props.title;
        if (props.firstname !== undefined) stateSetup['firstname'] = props.firstname;
        if (props.lastname  !== undefined) stateSetup['lastname']  = props.lastname;
        if (props.address1  !== undefined) stateSetup['address1']  = props.address1;
        if (props.address2  !== undefined) stateSetup['address2']  = props.address2;
        if (props.town      !== undefined) stateSetup['town']      = props.town;
        if (props.county    !== undefined) stateSetup['county']    = props.county;
        if (props.postcode  !== undefined) stateSetup['postcode']  = props.postcode;
        if (props.phone     !== undefined) stateSetup['phone']     = props.phone;
        if (props.mobile    !== undefined) stateSetup['mobile']    = props.mobile;


        this.state = {
            ...stateSetup
        };
        resetRegisterErrors();
    }

    onChangeHandler = (e) => {
        this.setState( { [e.target.name]: e.target.value })
    }

    onSubmit = async (e) => {
        try {
            e.preventDefault();

            const errorMsg = {};
            const userType = userTypes[this.state.userType].userTypeId;

            if ( userType === undefined ) {
                errorMsg['msg'] = 'Please set user type (TUTOR)';
            }
            if ( this.state.password !== this.state.password2 ) {
                errorMsg['password2'] = 'Confirm password must match password.';
            }

            if ( Object.keys(errorMsg).length ) {
                this.setState ( { errorMsg: errorMsg});
            } else {

                const config = {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    validateStatus: function (status) {
                        return ( ( status >= 200 && status < 300 ) || status === 409 || status === 422 || status === 500 || status === 503 )
                    },
                    crossDomain: true
                }

                const body = JSON.stringify({username: this.state.username, email: this.state.email, password: this.state.password, password2: this.state.password2, type: userType});
                const res = await axios.post(`${process.env.REACT_APP_API_URL}user`, body, config);
                // const res = await axios.post(`/user`, body, config);
                const data = res.data;

                if ( data.token === undefined) {
                    this.setState ({errorMsg: data.errorMsg});
                } else {
                    this.setState ({token: data.token});
                    const sentState = {
                        token: data.token, 
                        userType: this.state.userType, 
                        username: this.state.username, 
                        email: this.state.email, 
                        password: this.state.password
                    };
                    if (this.state.title !== undefined) sentState['title'] = this.state.title;
                    if (this.state.firstname !== undefined) sentState['firstname'] = this.state.firstname;
                    if (this.state.lastname !== undefined) sentState['lastname'] = this.state.lastname;
                    if (this.state.address1 !== undefined) sentState['address1'] = this.state.address1;
                    if (this.state.address2 !== undefined) sentState['address2'] = this.state.address2;
                    if (this.state.town !== undefined) sentState['town'] = this.state.town;
                    if (this.state.county !== undefined) sentState['county'] = this.state.county;
                    if (this.state.postcode !== undefined) sentState['postcode'] = this.state.postcode;
                    if (this.state.phone !== undefined) sentState['phone'] = this.state.phone;
                    if (this.state.mobile !== undefined) sentState['mobile'] = this.state.mobile;

                    history.push(  { pathname: '/user-contact-details', search: '', 
                                    state:{ ...sentState } } );
                                    }
            }
        } catch (err) {
            console.log ('headerUserRegistration');
            console.log (err);
        }
    }

    tutorBullets = () => {
        return (
            <Fragment>
                <div className="">
                    <h2 className="hsb__statements-title">Tutor - Our Diary</h2>
                    <p className="ml-4">- we provide a comprehensive diary to manage your lessons.</p>
                    <p className="ml-4">- book holidays that automatically notify students.</p>
                    <p className="ml-4">- receive enquiries for when you are available.</p>
                    <p className="ml-4">- notify existing students of student cancellation.</p>
                </div>
                <div className="my-4">
                    <h2 className="hsb__statements-title">Lessons</h2>
                    <p className="ml-4">- Make notes about what was covered in lessons.</p>
                    <p className="ml-4">- Record student homework and notes for the following lessons.</p>
                    <p className="ml-4">- We are here to help you and the student get the most out of tutoring.</p>
                </div>
                <div className="">
                    <h2 className="hsb__statements-title">After Service</h2>
                    <p className="ml-4">- why not ask your existing students to register to use services.</p>
                    <p className="ml-4">- let our totally free service manage all your students.</p>
                </div>
            </Fragment>
        );
    }

    parentBullets = () => {
        return (
            <Fragment>
                <div className="">
                    <h2 className="hsb__statements-title">Parent - After Service</h2>
                    <p className="ml-4">- we allow visibility into your childs lessons.</p>
                    <p className="ml-4">- tutor can make notes and homework visible to you.</p>
                    <p className="ml-4">- tutor can add notes to homework handed in.</p>
                </div>
                <div className="">
                    <h2 className="hsb__statements-title">Our Diary</h2>
                    <p className="ml-4">- receive reminders of lessons.</p>
                    <p className="ml-4">- book holidays that notify the tutor.</p>
                    <p className="ml-4">- register child sickness, the tutor may be able to find a replacement student for that lesson.</p>
                </div>
                <div className="my-4">
                    <h2 className="hsb__statements-title">Knowledge base</h2>
                    <p className="ml-4">- View or knowledge base maintained by our tutors, parents and students.</p>
                </div>
            </Fragment>
        );
    }

    studentBullets = () => {
        return (
            <Fragment>
                <div className="">
                    <h2 className="hsb__statements-title">Student - After Service</h2>
                    <p className="ml-4">- the tutor can make notes that you can view at a later time.</p>
                    <p className="ml-4">- set reminders for lessons via email or text.</p>
                </div>
                <div className="">
                    <h2 className="hsb__statements-title">Our Diary</h2>
                    <p className="ml-4">- quickly find tutors that have availity when you require.</p>
                </div>
                <div className="my-4">
                    <h2 className="hsb__statements-title">Groups</h2>
                    <p className="ml-4">- A group is where similar people get together.</p>
                    <p className="ml-4">- A tutor may put on extra paid tuition for a limited number of people.</p>
                    <p className="ml-4">- A student may create a group to connect with other students of a similar interest.</p>
                </div>
            </Fragment>
        );
    }

    bulletPoints = ( userType) => {
        if ( userType === 'TUTOR') {
            return this.tutorBullets();
        } else if ( userType === 'PARENT') {
            return this.parentBullets();
        }
        else if ( userType === 'STUDENT') {
            return this.studentBullets();
        }
        else {
            return (
                <div></div>
            );
        }
    } 

    componentDidUpdate () {
        if (this.props.isAuthenticated) {
            history.push ('/home');
        }
    }

    render () {

        const emailError     = (this.state.errorMsg["email"] ? <span className="form__input--error">{this.state.errorMsg["email"]}</span> :null);
        const usernameError  = (this.state.errorMsg["username"] ? <span className="form__input--error">{this.state.errorMsg["username"]}</span> :null);
        const passwordError  = (this.state.errorMsg["password"] ? <span className="form__input--error">{this.state.errorMsg["password"]}</span> :null);
        const password2Error = (this.state.errorMsg["password2"] ? <span className="form__input--error">{this.state.errorMsg["password2"]}</span> :null);
        const systemError    = (this.state.errorMsg["msg"] ? <span className="form__input--error">{this.state.errorMsg["msg"]}</span> :null);
        const userBullets = this.bulletPoints(this.props.userType);

        return (
            <div className="hsb" data-test='tutor-reg'>
    
                <div className="hsb__statements" data-test="tutor-reg-statements">
                    {userBullets}
                </div>
    
                <div id="header__search-form" className="hsb__form form-search" data-test="tutor-reg-sf">
                    <div className="text-center">
                        <h2 className="heading heading-light" data-test="tutor-reg-sf-header">Register Now</h2>
                    </div>
    
                    <form onSubmit={e => this.onSubmit(e)} data-test="tutor-reg-form">

                        <InputField inputType="text"
                                    id="email"
                                    name="email"
                                    label="Email"
                                    placeholder="Email"
                                    value={this.state.email}
                                    onChangeHandler={this.onChangeHandler}
                                    validationError={emailError} />
    
                        <InputField inputType="text"
                                    id="username"
                                    name="username"
                                    label="Username"
                                    placeholder="Username"
                                    value={this.state.username}
                                    onChangeHandler={this.onChangeHandler}
                                    validationError={usernameError} />

                        <InputField inputType="password"
                                    id="password"
                                    name="password"
                                    label="Password"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChangeHandler={this.onChangeHandler}
                                    validationError={passwordError}
                                    minLength="6" />

                        <InputField inputType="password"
                                    id="password2"
                                    name="password2"
                                    label="Confirm Password"
                                    placeholder="Confirm Password"
                                    value={this.state.password2}
                                    onChangeHandler={this.onChangeHandler}
                                    validationError={password2Error}
                                    systemError={systemError}/>

                        <button className="btn btn-blk btn-submit mt-4"  data-test="tutor-reg-sf-submit_btn">Register</button>
                    </form>
                </div>
            </div> 
        );
    }
}

HeaderRegisterUser.propTypes = {
    isAuthenticated: PropTypes.bool,
    username: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    userType: PropTypes.string,
    title: PropTypes.string,
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    address1: PropTypes.string,
    address2: PropTypes.string,
    town: PropTypes.string,
    county: PropTypes.string,
    postcode: PropTypes.string,
    phone: PropTypes.string,
    mobile: PropTypes.string
}

const mapStateToProps = state => ({
    isAuthenticated: state.login.isAuthenticated
})

export default connect(mapStateToProps, { register } )(HeaderRegisterUser);
