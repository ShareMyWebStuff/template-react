import React, {Component}  from 'react';
import axios from 'axios';
import { InputField } from '../../form/InputFields';
import history from 'components/history';


// 
// ResetLoginDetails
// 
// When a user is having issues logging on a needs a reminder of their username or to reset their password,
// this screen handles that.
// 
class ResetLoginDetails extends Component {

    constructor(props) {
        super (props);

        this.state = {
            showForm: ( props.location.state && props.location.state.showForm ? props.location.state.showForm : 'Password' ),
            username: '',
            email: '',
            errorMsg: {}
        };
    }

    onChangeHandler = (e) => {

        this.setState ({errorMsg: {}});
        this.setState( { [e.target.name]: e.target.value })
    }

    async emailUsernames () {

        try {

            let axiosInstance = axios.create( {
                validateStatus: function (status) {
                    return status >= 200 && status <= 503;
                },
            });

            this.setState ({errorMsg: {email: 'Sending email...'}});
            const response = await axiosInstance.get(`${process.env.REACT_APP_API_URL}user-email-usernames?email=${this.state.email}&domainName=${process.env.REACT_APP_DOMAIN_NAME}&websiteName=${process.env.REACT_APP_WEBSITE_NAME}`);

            if (response.status === 200 ){
                this.setState ({errorMsg: {email: response.data.email } });
                history.push(  { pathname: '/login', search: '', state:{ alertMessage: response.data.email } } );
            } else {
                this.setState ({errorMsg: response.data.errorMsg});
            }

        } catch (err) {
            this.setState ({errorMsg: err });
            throw (err);
        }

    }

    async emailPasswordReset () {

        try {
            const config = {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                validateStatus: function (status) {
                    return ( ( status >= 200 && status < 300 ) || status === 401 || status === 422 || status === 500 || status === 503 )
                },
                crossDomain: true
            }

            const body = JSON.stringify({
                username: this.state.username, 
                domainName: process.env.REACT_APP_DOMAIN_NAME,
                websiteName: process.env.REACT_APP_WEBSITE_NAME
            });

            this.setState ({errorMsg: {username: 'Sending email...'}});
            const response = await axios.put(`${process.env.REACT_APP_API_URL}user-password-reset`, body, config);

            if (response.status === 200 ){
                this.setState ({errorMsg: {username: response.data.username } });
            } else {
                this.setState ({errorMsg: response.data.errorMsg});
            }

        } catch (err) {
            this.setState ({errorMsg: err });
            throw (err);
        }

    }

    onSubmit = async (e) => {
        try {
            e.preventDefault();

            if ( this.state.showForm === 'Email' ) {
                await this.emailUsernames ();
            } else if ( this.state.showForm === 'Password' ) {
                await this.emailPasswordReset ();
            }

        } catch (err) {
            console.log (err);
            throw(err);
        }
    };

    emailUsername = () => {
        const emailError     = (this.state.errorMsg["email"] ? <span className="form__input--error">{this.state.errorMsg["email"]}</span> :null);

        return (
            <div className="login-box"  data-test='reset_username'>
                <div className="login-box--form" data-test='reset_username__box'>
                    <h2 className="login-box--heading">Send Username</h2>
                    <form className="mt-2" onSubmit={e => this.onSubmit(e)} data-test='reset_username__form'>

                        <p className="login-box--username mb-4">Enter your email here and we will email you your username.</p>

                        <InputField inputType="text"
                                    id="email"
                                    name="email"
                                    label="Email"
                                    positionClassname="login-box--username"
                                    placeholder="Email"
                                    value={this.state.email}
                                    onChangeHandler={this.onChangeHandler}
                                    validationError={emailError} />

                        <div className="login-box--btn">
                            <button className="btn btn-blk btn-submit my-3" >Send</button>
                        </div>

                    </form>

                </div>

                <div className="login-box--info ">

                </div>
            </div>
        );
    };

    emailPassword = () => {
        const usernameError     = (this.state.errorMsg["username"] ? <span className="form__input--error">{this.state.errorMsg["username"]}</span> :null);

        return (
            <div className="login-box"  data-test='reset_password'>
                <div className="login-box--form" data-test='reset_password__box'>
                    <h2 className="login-box--heading">Reset password</h2>
                    <form className="mt-2" onSubmit={e => this.onSubmit(e)} data-test='reset_password__form'>
                        <p className="login-box--username mb-4">Enter your username here and we will send you a new password.</p>

                        <InputField inputType="text"
                                    id="username"
                                    name="username"
                                    label="Username"
                                    placeholder="Username"
                                    positionClassname="login-box--username"
                                    value={this.state.username}
                                    onChangeHandler={this.onChangeHandler}
                                    validationError={usernameError} />
                        <div className="login-box--btn">
                            <button className="btn btn-blk btn-submit my-3" >Reset</button>
                        </div>

                    </form>

                </div>

                <div className="login-box--info data-test='reset_password__info_box'">

                </div>
            </div>
        );
    };

    render () {

        const emailForm = (this.state.showForm === 'Password' ? this.emailPassword() : this.emailUsername() );

        return (
            <main className="main" data-test='login'>
                <section className="container">

                    { emailForm }

                </section>
            </main>
        );
    
    }

}

export default ResetLoginDetails;

