import React, {Component}  from 'react';
import axios from 'axios';
import { InputField } from '../../form/InputFields';

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
        this.setState( { [e.target.name]: e.target.value })
    }

    async emailUserDetails (path) {

        let res;

        try {
            
            const config = {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-Auth-Token': this.state.token
                },
                validateStatus: function (status) {
                    return ( ( status >= 200 && status < 300 ) || status === 404 || status === 422 || status === 500 || status === 503 )
                },
                crossDomain: true
            }

            const body = JSON.stringify({ username: this.state.username, password: this.state.password });
            res = await axios.post(path, body, config);

        } catch (err) {

            throw (err);
        }
        return (res);
    }

    onSubmit = async (e) => {
        try {
            e.preventDefault();

            const res = await this.verifyLogin ();

            
            // if ( res.status === 200 || res.status === 201 ) {
            //     const token = JSON.parse (res.data.message).token;
            //     await this.props.login ( {token});
            //     history.push ('/home');
            // } else {
            //     this.setState ({errorMsg: res.data.errorMsg});
            // }

        } catch (err) {
            console.log ('Login');
            console.log (err);
        }
    }

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

