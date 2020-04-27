import React, {Component, Fragment} from 'react';
import axios from 'axios';
import history from 'components/history';
import { InputField } from '../../form/InputFields';

// 
// VerfyMedia
// 
// When a user registers a verification code is emailed to them. This verification code can be manually 
// entered into this component or passed as a prop. This component then sends the verification code to the 
// backend where it is validated. If the code is correct and active then the veriftMedia component passes 
// us through to the login screen.
// 

class VerifyMedia extends Component {

    constructor (props){
        super(props);

        const { match: { params } } = this.props;

        this.state = {
            verificationCode: ( params.verificationCode ? params.verificationCode : ''),
            verifying: ( params.verificationCode ? true : false),
            verified: false,
            lastname: '',
            errorMsgs: {},
        };
    }

    async verifyAccount () {

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

            const body = JSON.stringify({ verificationCode: this.state.verificationCode });
            res = await axios.post(`/user-media-verify`, body, config);

        } catch (err) {

            throw (err);
        }
        return (res);
    }

    onSubmit = async (e) => {
        try {
            e.preventDefault();

            const res = await this.verifyAccount ();

            if ( res.status === 200 || res.status === 201 ) {
                console.log ('Data error');
                history.push(  { pathname: '/login', search: '', state:{ waitingValidation: false } } );
            } else {
                this.setState ({errorMsgs: res.data.errorMsg});
            }

        } catch (err) {
            console.log (err);
            throw(err);
        }
    };

    async componentDidMount() {
        // Send verification request
        let res;
        const { match: { params } } = this.props;

        try {
            if ( params.verificationCode !== undefined) {

                res = await this.verifyAccount ();

                if ( res.status === 200 || res.status === 201 ) {
                    history.push(  { pathname: '/login', search: '', state:{ waitingValidation: false } } );
                } else {
                    this.setState ({errorMsgs: res.data.errorMsg});
                }
            }
        } catch (err) {
            console.log (err);
            throw(err);
        }
    }

    onChangeHandler = (e) => {
        this.setState( { [e.target.name]: e.target.value });
    }

    verificationMedia = (side) => {
        const cardSide = "email-card email-card-center-" + (side || 'left');
        const verifyError     = (this.state.errorMsgs["verificationCode"] ? <p className="fg-yellow my-3">{this.state.errorMsgs["verificationCode"]}</p> :<Fragment><p className="my-3">We are currently verifying your account.</p><p>Once your account is verfied we will redirect you to the login page.</p></Fragment>);

        return (
            <div className={cardSide} data-test="user-verify-media" >
                <div className="email-card__picture-area" data-test="user-verify-media__picture" >
                    <div className="send_email_img"></div>
                </div>
                <div className="email-card__desc" data-test="user-verify-media__desc">
                    <h2 className="heading fg-white">Verify Media</h2>
                    {verifyError}
                </div>
            </div>
        );
    }


    verificationForm = (side) => {
        const cardSide    = "email-card email-card-center-" + (side || 'left');
        const verifyError     = (this.state.errorMsgs["verificationCode"] ? <span className="form__input--error">{this.state.errorMsgs["verificationCode"]}</span> :null);

        return (
            <div className={cardSide} data-test="user-verify-form" >
                <div className="email-card__picture-area" data-test="user-verify-form__picture" >
                    <div className="send_email_img"></div>
                </div>
                <div className="email-card__desc" data-test="user-verify-form__desc">
                    <h2 className="heading fg-white">Verify Media</h2>

                    <p>You will have received an email or SMS, enter the code you received below in order to valid your email address or the mobile phone.</p>

                    <form className="email-card-resend" onSubmit={e => this.onSubmit(e)} data-test="user-verify-form__form">

                        <div className="email-card-resend-input">
                            <InputField inputType="text"
                                    id="verificationCode"
                                    name="verificationCode"
                                    label="Verification Code"
                                    placeholder="Verification Code"
                                    value={this.state.verificationCode}
                                    onChangeHandler={this.onChangeHandler}
                                    validationError={verifyError} />
                        </div>
                        <button className="btn btn-blk btn-submit email-card-resend-btn"  data-test="tutor-reg-sf-submit_btn">Verify</button>

                    </form>

                </div>
            </div>
        );
    }


    render () {

        const verifyForm = ( this.state.verifying ? this.verificationMedia() : this.verificationForm () );

        return (
            <main className="main" data-test='user-verify'>
                <section className="container">

                    {verifyForm}

                </section>
            </main>

        );
    }
}

export default VerifyMedia;
