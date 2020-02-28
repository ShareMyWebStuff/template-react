import React from 'react';
import ReactDOM from 'react-dom';
import history from 'components/history';
import { connect } from 'react-redux';
import { login, resetAuthErrors } from 'actions/auth';

class LoginModal extends React.Component {


    constructor (props) {
        super (props);
        this.state = {
            username: 'dadfromwoking', 
            password: 'Sybase01'
        };
        resetAuthErrors();
    }


    onChangeHandler = (e) => {
        this.setState( { [e.target.name]: e.target.value })
    }

    onSubmit = async e => {
        e.preventDefault();

        this.props.login(this.state.username, this.state.password);
    }

    componentDidUpdate () {
        if (this.props.isAuthenticated) {
            history.push ('/home');
        }
    }

    render () {

        const usernameMsg = (this.props.error && this.props.error["username"] ? <span className="form__input--error">{this.props.error["username"]}</span> :null);
        const passwordMsg = (this.props.error && this.props.error["password"] ? <span className="form__input--error">{this.props.error["password"]}</span> :null);
        const errorMsg = (this.props.error && this.props.error["msg"] ? <span className="form__input--error">{this.props.error["msg"]}</span> :null);

        return (
            ReactDOM.createPortal(
                <div onClick={ () => history.push ('/')} className="popup" data-test='modal-login'>
                    <div onClick={(e) => {e.stopPropagation()}} className="popup-box popup-box-w30 faded rounded-all">
                        <div className="popup-header text-center">
                            <h1>Sign In</h1>
                            <span onClick={ () => history.push ('/')} className="popup_close">&times;</span>
                        </div>
        
                        <div className="popup-body">
        
                            <form onSubmit={ e => this.onSubmit(e)}>
                                <div className="form-group mt-2">
                                    <label htmlFor="username" className="form__label">Username</label>
                                    <input 
                                        onChange={e => this.onChangeHandler(e)} 
                                        type="text" 
                                        name="username" 
                                        className="form__input" 
                                        value={this.state.username} 
                                        placeholder="Username" 
                                        id="username" 
                                        required/>
                                    {usernameMsg}
                                </div>
        
                                <div className="form-group mt-2">
                                    <label htmlFor="password" className="form__label">Password</label>
                                    <input 
                                        onChange={e => this.onChangeHandler(e)} 
                                        type="password" 
                                        name="password" 
                                        className="form__input" 
                                        value={this.state.password} 
                                        placeholder="Password" 
                                        id="password" 
                                        minLength='6'/>
                                    {passwordMsg}
                                    {errorMsg}
                                </div>
        
                                <input type="submit" className="btn btn-blk btn-submit mt-4" value="Login" />
                            </form>
        
                            <div className="my-3 text-center fg-yellow">
                                <p className="my-1">Do you have an account?</p>
                                <p className="hover-orange small-text">Forgotten Username?</p>
                                <p className="hover-orange small-text">Forgotten Password?</p>
                            </div>
                        </div>
                    </div>
                </div>,
                document.querySelector('#modal')
            )
        );

    }

}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.auth.error
})

export default connect (mapStateToProps, {login, resetAuthErrors} )(LoginModal);
