import React from 'react';
import history from 'components/history';
import Logo from '../../../images/logo.png';
import ToggleBars from '../../../icons/ToggleBars';
import IconCaret from '../../../icons/IconCaret';
import { connect } from 'react-redux';
import { logout } from '../../../actions/auth';


class Navbar extends React.Component {

    state = {dropdown: false, navTogglerDropdown: false};

    dropdownStatus = () => { return (this.state.dropdown?"nav__dropdown nav__dropdown-active":"nav__dropdown") };

    dropdownContent = () => { 
        if (this.state.dropdown) {
            return (
                <ul className="nav__dropdown-container">
                    <li className="menu-item" onClick={() => { history.push('/register-student'); this.setState( { dropdown: false });}}>Student</li>
                    <li className="menu-item" onClick={() => { history.push('/register-parent'); this.setState( { dropdown: false });}}>Parent</li>
                    <li className="menu-item" onClick={() => { history.push('/register-tutor'); this.setState( { dropdown: false });}}>Tutor</li>
                </ul>
            )
        }
        return;
    };

    authNavbar = () => {

        const navToggler = "nav " + (this.state.navTogglerDropdown? 'nav-toggler-display': '');

        return (
            <ul id="nav-main" className={navToggler} data-test='nav-main-auth'>
                <li className="menu-item" onClick={this.props.logout}>Sign out</li>
            </ul>
        );
    };

    guestNavbar = () => {

        const navToggler = "nav " + (this.state.navTogglerDropdown? 'nav-toggler-display': '');

        return (
            <ul id="nav-main" className={navToggler} data-test='nav-main-guest'>
                <li className="menu-item" onClick={() => { history.push('/register-tutor')}}>Become a Tutor</li>
                <li className="menu-item" onClick={() => { history.push('/login')}}>Login</li>
                <li>
                    <div className={this.dropdownStatus()} onClick={ () => {this.setState( { dropdown: !this.state.dropdown })} }>
                        <span>Register</span>
                        <IconCaret height="17"/>
                    </div>

                    {this.dropdownContent()}
                </li>
            </ul>
        );
    };


    renderNavbar = () => {
        return (this.props.auth.isAuthenticated ? this.authNavbar() : this.guestNavbar() );
    };

    render () {

        const navDisplay = this.renderNavbar();

        return (
            <nav id="nav" data-test='nav'>
    
                <div className="nav-brand" data-test='nav-logo' >
                    <img onClick={ () => {history.push('/'); this.setState( { dropdown: false });} } src={Logo} alt="Logo" className="nav-brand__logo" />
                </div>
    
                <p className="nav-mission" data-test='nav-mission'>Learning made easy</p>

                <div id="nav-toggler" onClick={ () => {this.setState(({navTogglerDropdown: !this.state.navTogglerDropdown}))}} data-test='nav-toggler'>
                    <div className="nav-toggler-icon">
                        <ToggleBars />
                    </div>
                </div>
    
                {navDisplay}

            </nav>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect (mapStateToProps, {logout})(Navbar);
