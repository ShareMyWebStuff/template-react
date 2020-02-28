import React, {Component}  from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../../actions/alert';
import { register, resetAuthErrors } from '../../../actions/auth';
import history from 'components/history';

class HeaderRegisterTutor extends Component {

    constructor (props) {
        super (props);
        this.state = {
            username: 'dadfromwoking',
            email: 'dad@dad.co.uk',
            password: 'Sybase01',
            password2: 'Sybase01'
        };
        resetAuthErrors();
    }

    onChangeHandler = (e) => {
        this.setState( { [e.target.name]: e.target.value })
    }

    onSubmit = async (e) => {
        e.preventDefault();

        if (this.state.password !== this.state.password2) {
            this.props.setAlert ('Passwords do not match', 'danger');
        } else {
            
            this.props.register(this.state.username, this.state.email, this.state.password, this.state.password2, 1);
        }
    }

    componentDidUpdate () {
        if (this.props.isAuthenticated) {
            history.push ('/home');
        }
    }

    render () {

        const usernameError = (this.props.error && this.props.error["username"] ? <span className="form__input--error">{this.props.error["username"]}</span> :null);
        const emailError = (this.props.error && this.props.error["email"] ? <span className="form__input--error">{this.props.error["email"]}</span> :null);
        const passwordError = (this.props.error && this.props.error["password"] ? <span className="form__input--error">{this.props.error["password"]}</span> :null);
        const password2Error = (this.props.error && this.props.error["password2"] ? <span className="form__input--error">{this.props.error["password2"]}</span> :null);
        const msgError = (this.props.error && this.props.error["msg"] ? <span className="form__input--error">{this.props.error["msg"]}</span> :null);

        return (
            <div className="hsb" data-test='tutor-reg'>
    
                <div className="hsb__statements" data-test="tutor-reg-statements">
                    <div className="">
                        <h2 className="hsb__statements-title">Our Diary</h2>
                        <p className="hsb__statements-desc ml-4">- we provide a comprehensive diary to manage your lessons.</p>
                        <p className="hsb__statements-desc ml-4">- book holidays that automatically notify students.</p>
                        <p className="hsb__statements-desc ml-4">- receive enquiries for when you are available.</p>
                        <p className="hsb__statements-desc ml-4">- notify existing students of student cancellation.</p>
                    </div>
                    <div className="my-4">
                        <h2 className="hsb__statements-title">Lessons</h2>
                        <p className="hsb__statements-desc ml-4">- Make notes about what was covered in lessons.</p>
                        <p className="hsb__statements-desc ml-4">- Record student homework and notes for the following lessons.</p>
                        <p className="hsb__statements-desc ml-4">- We are here to help you and the student get the most out of tutoring.</p>
                    </div>
                    <div className="">
                        <h2 className="hsb__statements-title">After Service</h2>
                        <p className="hsb__statements-desc ml-4">- why not ask your existing students to register.</p>
                        <p className="hsb__statements-desc ml-4">- let our totally free service manage all your students.</p>
                    </div>
                </div>
    
                <div id="header__search-form" className="hsb__form form-search" data-test="tutor-reg-sf">
                    <div className="text-center">
                        <h2 className="heading heading-light" data-test="tutor-reg-sf-header">Register Now</h2>
                    </div>
    
                    <form onSubmit={e => this.onSubmit(e)} data-test="tutor-reg-form">
    
                        <div className="form-group mt-2" data-test="tutor-reg-sf-email">
                            <label htmlFor="email" className="form__label">Email</label>
                            <input 
                                onChange={this.onChangeHandler} 
                                type="text" 
                                name="email" 
                                className="form__input" 
                                value={this.state.email} 
                                placeholder="Email" 
                                id="email" 
                                required/>
                            {emailError}
                        </div>
    
                        <div className="form-group mt-2" data-test="tutor-reg-sf-username">
                            <label htmlFor="username" className="form__label">Username</label>
                            <input 
                                onChange={this.onChangeHandler} 
                                type="text" 
                                name="username" 
                                className="form__input" 
                                value={this.state.username} 
                                placeholder="Username" 
                                id="username" 
                                required/>
                            {usernameError}
                        </div> 
    
                        <div className="form-group mt-2" id="tutorTypeLocation" data-test="tutor-reg-sf-pwd">
                            <label htmlFor="password" className="form__label">Password</label>
                            <input 
                                onChange={this.onChangeHandler} 
                                type="password" 
                                name="password" 
                                className="form__input" 
                                value={this.state.password} 
                                placeholder="Password" 
                                id="password" 
                                minLength='6'/>
                            {passwordError}
                        </div>
    
                        <div className="form-group mt-2" id="tutorTypeLocation" data-test="tutor-reg-sf-pwd2">
                            <label htmlFor="password2" className="form__label">Confirm Password</label>
                            <input 
                                onChange={this.onChangeHandler} 
                                type="password" 
                                name="password2" 
                                className="form__input" 
                                value={this.state.password2} 
                                placeholder="Confirm Password" 
                                id="password2" 
                                minLength='6'/>
                            {password2Error}
                            {msgError}
                        </div>
    
                        <button className="btn btn-blk btn-submit mt-4"  data-test="tutor-reg-sf-submit_btn">Register</button>
                    </form>
                </div>
            </div> 
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.auth.error
})

export default connect(mapStateToProps, { setAlert, register } )(HeaderRegisterTutor);
