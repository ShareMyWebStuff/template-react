import React, {Component}  from 'react';
import LoginModal from '../modals/loginModal';

class Login extends Component {

    state = {
        username: 'dadfromwoking',
        password: 'Sybase01'
    };

    onChangeHandler = (e) => {
        this.setState( { [e.target.name]: e.target.value })
    }

    onSubmit = async (e) => {
        e.preventDefault();

        console.log ('userLogin', this.state);
        
    }

    render () {
        return (
            <div>
                <div style={{height: '60vh'}}>
                </div>
                <LoginModal />
            </div>
        );
    
    }

}

export default Login;
