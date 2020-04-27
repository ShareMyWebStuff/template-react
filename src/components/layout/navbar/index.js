import React from 'react';
import { connect } from 'react-redux';
import history from 'components/history';
import Logo from '../../../images/logo.png';
import ToggleBars from '../../../icons/ToggleBars';
import IconCaret from '../../../icons/IconCaret';
import { logout } from '../../../actions/login';

// 
// Component:   Navbar
// 
// Description: The Navbar component handles the displaying on the login / register / logout / account functionality
// 
class Navbar extends React.Component {

    state = {dropdown: false, navTogglerDropdown: false};

    dropdownStatus = () => { return (this.state.dropdown?"nav__dropdown nav__dropdown-active":"nav__dropdown") };

    // Create the JSX for the dropdown menu for registration
    dropdownContent = () => { 
        if (this.state.dropdown) {
            return (
                <ul className="nav__dropdown-container" data-test="nav__dropdown-container">
                    <li className="menu-item" onClick={() => { this.setState( { dropdown: !this.state.dropdown }); history.push(  { pathname: '/user-registration-parent', search: '', state:{ userType: 'PARENT'} } )}}>Parent</li>
                    <li className="menu-item" onClick={() => { this.setState( { dropdown: !this.state.dropdown }); history.push(  { pathname: '/user-registration-student', search: '', state:{ userType: 'STUDENT'} } )}}>Student</li>
                    <li className="menu-item" onClick={() => { this.setState( { dropdown: !this.state.dropdown }); history.push(  { pathname: '/user-registration-tutor', search: '', state:{ userType: 'TUTOR'} } )}}>Tutor</li>
                </ul>
            )
        }
        return;
    };

    // Create the JSX for the navigation bar when a user is logged in
    authNavbar = () => {

        const navToggler = "nav " + (this.state.navTogglerDropdown? 'nav-toggler-display': '');

        return (
            <ul id="nav-main" className={navToggler} data-test='nav-main-auth'>
                <li className="menu-item" >Account</li>
                <li className="menu-item" onClick={this.props.logout}>Sign out</li>
            </ul>
        );
    };

    // Create the JSX for the navigation bar for a guest user
    guestNavbar = () => {

        const navToggler = "nav " + (this.state.navTogglerDropdown? 'nav-toggler-display': '');

        return (
            <ul id="nav-main" className={navToggler} data-test='nav-main-guest'>

                <li className="menu-item" onClick={() => { history.push(  { pathname: '/user-registration-tutor', search: '', state:{ userType: 'TUTOR'} } )}}>Become a Tutor</li>


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
        return (this.props.isAuthenticated ? this.authNavbar() : this.guestNavbar() );
    };

    render () {

        const navDisplay = this.renderNavbar();
        const homePath = ( this.props.isAuthenticated ? '/home' : '/' );

        return (
            <nav id="nav" data-test='nav'>
    
                <div className="nav-brand" data-test='nav-logo' >
                    <img onClick={ () => {history.push(homePath); this.setState( { dropdown: false });} } src={Logo} alt="Logo" className="nav-brand__logo" />
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
    isAuthenticated: state.login.isAuthenticated
});

export default connect (mapStateToProps, {logout})(Navbar);
