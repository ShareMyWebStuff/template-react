import React, {Component, Fragment} from 'react';
import axios from 'axios';
import history from 'components/history';
import { InputField } from '../../form/InputFields';

// 
// UserResetPassword
// 
// When a user reset a password a reset code is emailed to them. This component then sends the reset code to the 
// backend where it is validated. If the code is correct and active then this component passes 
// us through to the login screen.
// 

class UserResetPassword extends Component {

    constructor (props){
        super(props);

        console.log (props);
        const { match: { params } } = this.props;

        this.state = {
            resetCode: ( params.resetCode ? params.resetCode : ''),
            password: '',
            password2: '',
            errorMsgs: {},
        };
    }

    async resetPassword () {

        let res;

        try {
            
            const config = {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                validateStatus: function (status) {
                    return ( ( status >= 200 && status < 300 ) || status === 404 || status === 422 || status === 500 || status === 503 )
                },
                crossDomain: true
            }

            this.setState ({errorMsgs: {password2: 'Reseting password...'}});
            const body = JSON.stringify({ resetCode: this.state.resetCode, password: this.state.password, password2: this.state.password2 });
            res = await axios.post(`${process.env.REACT_APP_API_URL}user-password-reset`, body, config);
            console.log ('Reset Password');
            console.log (res);

            if (res.status === 200 || res.status === 201 ){
                // this.setState ({errorMsgs: {password2: 'Password has been reset.' } });
                history.push(  { pathname: '/login', search: '', state:{ alertMessage: 'Password has been reset.' } } );
            } else {
                this.setState ({errorMsgs: res.data.errorMsg});
            }

        } catch (err) {

            throw (err);
        }
        return (res);
    }

    onSubmit = async (e) => {
        try {
            e.preventDefault();

            const res = await this.resetPassword ();
            console.log ('onSubmit');
            console.log (res);

        } catch (err) {
            console.log (err);
            throw(err);
        }
    };

    onChangeHandler = (e) => {
        this.setState( { [e.target.name]: e.target.value });
    }

    // verificationForm = (side) => {
    //     const cardSide    = "email-card email-card-center-" + (side || 'left');
    //     const verifyError     = (this.state.errorMsgs["verificationCode"] ? <span className="form__input--error">{this.state.errorMsgs["verificationCode"]}</span> :null);

    //     return (
    //         <div className={cardSide} data-test="user-verify-form" >
    //             <div className="email-card__picture-area" data-test="user-verify-form__picture" >
    //                 <div className="send_email_img"></div>
    //             </div>
    //             <div className="email-card__desc" data-test="user-verify-form__desc">
    //                 <h2 className="heading fg-white">Verify Media</h2>

    //                 <p>You will have received an email or SMS, enter the code you received below in order to valid your email address or the mobile phone.</p>

    //                 <form className="email-card-resend" onSubmit={e => this.onSubmit(e)} data-test="user-verify-form__form">

    //                     <div className="email-card-resend-input">
    //                         <InputField inputType="text"
    //                                 id="verificationCode"
    //                                 name="verificationCode"
    //                                 label="Verification Code"
    //                                 placeholder="Verification Code"
    //                                 value={this.state.verificationCode}
    //                                 onChangeHandler={this.onChangeHandler}
    //                                 validationError={verifyError} />
    //                     </div>
    //                     <button className="btn btn-blk btn-submit email-card-resend-btn"  data-test="tutor-reg-sf-submit_btn">Verify</button>

    //                 </form>

    //             </div>
    //         </div>
    //     );
    // }


    render () {
        const resetCodeError     = (this.state.errorMsgs["resetCode"] ? <span className="form__input--error">{this.state.errorMsgs["resetCode"]}</span> :null);
        const passwordError      = (this.state.errorMsgs["password"] ? <span className="form__input--error">{this.state.errorMsgs["password"]}</span> :null);
        const password2Error     = (this.state.errorMsgs["password2"] ? <span className="form__input--error">{this.state.errorMsgs["password2"]}</span> :null);

        return (
            <main className="main" data-test='user-reset-password'>
                <section className="container">

                    <div className="email-card" data-test="user-reset-password-form" >

                        <div className="email-card__picture-area email-card__pa-40" data-test="user-reset-password-form__picture" >
                            <div className="send_email_img"></div>
                        </div>
                        <div className="email-card__desc email-card__desc-60" data-test="user-reset-password-form__desc">
                            <h2 className="heading fg-white">Reset Password</h2>

                            <p>Enter a new password and confirm it.</p>

                            <form className="email-card-resend-col" onSubmit={e => this.onSubmit(e)} data-test="user-reset-password-form__form">

                                <InputField inputType="text"
                                            id="resetCode"
                                            name="resetCode"
                                            label="Reset Code"
                                            placeholder="Reset Code"
                                            disabled="true"
                                            value={this.state.resetCode}
                                            onChangeHandler={this.onChangeHandler}
                                            validationError={resetCodeError} />

                                <InputField inputType="text"
                                            id="password"
                                            name="password"
                                            label="Password"
                                            placeholder="Password"
                                            value={this.state.password}
                                            onChangeHandler={this.onChangeHandler}
                                            validationError={passwordError} />

                                <InputField inputType="text"
                                            id="password2"
                                            name="password2"
                                            label="Confirmed Password"
                                            placeholder="Password2"
                                            positionClassname=""
                                            value={this.state.password2}
                                            onChangeHandler={this.onChangeHandler}
                                            validationError={password2Error} />

                                <button className="btn btn-blk btn-submit my-3"  data-test="">Reset Password</button>

                            </form>
                        </div>
                    </div>
                </section>
            </main>

        );
    }
}

export default UserResetPassword;
