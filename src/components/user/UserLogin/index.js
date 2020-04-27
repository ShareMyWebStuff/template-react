import React, {Component}  from 'react';
import history from 'components/history';
import { connect } from 'react-redux';
import { userLogin, resetLoginErrors } from 'actions/login';
import { InputField } from '../../form/InputFields';

class Login extends Component {

    constructor(props) {
        super (props);

        this.state = {
            waitingValidation: ( props.location && props.location.state && props.location.state.waitingValidation ? true : false ),
            username: 'dadfromwoking',
            password: 'Sybase01',
            email: ''
        };
        resetLoginErrors();
    }

    onChangeHandler = (e) => {

        this.setState( { [e.target.name]: e.target.value })
    }

    componentDidUpdate ( prevProps, prevState) {
        
        if ( prevProps.isAuthenticated !== this.props.isAuthenticated && this.props.isAuthenticated ) {
            history.push ('/home');
        }

    } 

    onSubmit = async (e) => {
        try {
            e.preventDefault();

            const { username, password } = this.state;

            this.props.userLogin (username, password);

        } catch (err) {
            console.log ('Login');
            console.log (err);
        }
    }

    emailSentMsg = (side) => {
        const cardSide = "email-card email-card-center-" + (side || 'left');
        const emailError     = (this.state.errorMsg && this.state.errorMsg["email"] ? <span className="form__input--error">{this.state.errorMsg["email"]}</span> :null);

        return (
            <div className={cardSide} data-test='login_email_sent' >
                <div className="email-card__picture-area" data-test="login_email_sent_picture" >
                    <div className="send_email_img"></div>
                </div>
                <div className="email-card__desc" data-test="login_email_sent_desc">
                    <h2 className="heading fg-white">Email Sent</h2>
                    <span onClick={ () => this.setState({waitingValidation: false})} className="email-card_close">&times;</span>

                    <p>We sent you an email when you created this account. In order to be able to login you will need to click on the link inside the email to validate your account, your account request can be cancelled if not validated in 4 hours. If you cant find this email and have checked your spam folder, enter your email and click resend.</p>

                    <form className="email-card-resend" onSubmit={e => this.onSubmit(e)} data-test="login_email_sent_form">

                        <div className="email-card-resend-input">
                            <InputField inputType="text"
                                    id="email"
                                    name="email"
                                    label="Email"
                                    placeholder="Email"
                                    value={this.state.email}
                                    onChangeHandler={this.onChangeHandler}
                                    validationError={emailError} />
                        </div>
                        <button className="btn btn-blk btn-submit email-card-resend-btn"  data-test="tutor-reg-sf-submit_btn">Resend</button>

                    </form>

                </div>
            </div>
        );
    }

    loginForm = () => {
        const usernameError     = (this.props.errorMsg && this.props.errorMsg["username"] ? <span className="form__input--error">{this.props.errorMsg["username"]}</span> :null);
        const passwordError     = (this.props.errorMsg && this.props.errorMsg["password"] ? <span className="form__input--error">{this.props.errorMsg["password"]}</span> :null);

        return (
            <div className="login-box" data-test='login_box'>
                <div className="login-box--form">
                    <h2 className="login-box--heading">Sign In</h2>
                    {/* <p>Please enter your username and password below.</p> */}
                    <form className="mt-2" onSubmit={e => this.onSubmit(e)} data-test='login_form'>

                        <InputField inputType="text"
                                id="username"
                                name="username"
                                label="Username"
                                placeholder="Username"
                                positionClassname="login-box--username"
                                value={this.state.username}
                                onChangeHandler={this.onChangeHandler}
                                validationError={usernameError} />

                        <InputField inputType="password"
                                id="password"
                                name="password"
                                label="Password"
                                placeholder="Password"
                                positionClassname="login-box--password"
                                value={this.state.password}
                                onChangeHandler={this.onChangeHandler}
                                validationError={passwordError} />
                        <div className="login-box--btn">
                            <button className="btn btn-blk btn-submit my-3" >Login</button>
                        </div>

                    </form>

                    <div className="text-center fg-yellow" data-test='login_reset_links'>
                        <p className="1">Do you have an account?</p>
                        <p className="hover-orange small-text" onClick={ () => history.push(  { pathname: '/reset-login-details', search: '', state:{ showForm: 'Email'} } ) } >Forgotten Username?</p>
                        <p className="hover-orange small-text" onClick={ () => history.push(  { pathname: '/reset-login-details', search: '', state:{ showForm: 'Password'} } ) } >Forgotten Password?</p>
                    </div>

                </div>

                <div className="login-box--info ">

                    {/* <p>Why not check our questions and answers section out.</p>
                    <p>Contribute to our knowledge center.</p> */}
                </div>
            </div>
        );
    };

    render () {

        const emailSent = (this.state.waitingValidation? this.emailSentMsg (): null);
        const login = this.loginForm();

        return (
            <main className="main" data-test='login'>
                <section className="container">

                    { emailSent }

                    { login }

                </section>
            </main>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.login.isAuthenticated, 
    errorMsg: state.login.errorMsg
})

export default connect (mapStateToProps, {userLogin, resetLoginErrors} )(Login);

