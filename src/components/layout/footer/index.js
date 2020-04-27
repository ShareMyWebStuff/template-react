import React from 'react'
import history from 'components/history';
import Logo from '../../../images/logo.png'
import Facebook from '../../../images/facebook.png'
import Twitter from '../../../images/twitter.png'
import SendEmail from '../../../images/envelop.png'

// Footer
// 
// This component displays a footer at the bottom of each page
//
function Footer(props) {
    let pathname = "";
    let gradient = null;
    if (props === undefined || props.location === undefined || props.location.pathname === undefined) {
        pathname = '';
    } else {
        pathname = props.location.pathname;
    }

    switch (pathname) {

        case "/":
        case "/user-registration-student":
        case "/user-registration-parent":
        case "/user-registration-tutor":
        case "/tutor-search":
        case "/user-contact-details":
        case "/verify-media":
            gradient=<div className="gradient gradient-top gradient-top-white "></div>;
            break;
        default:
            gradient = null;
    }

    return (

        <footer className="footer" data-test='footer'>
            {gradient}

            <div className="container">
                <div className="footer-box" data-test='footer-box'>

                    <div className="footer-box__logo" data-test='footer-box__logo' >
                        <img onClick={ () => {history.push('/'); } } src={Logo} alt="Logo" className="nav-brand__logo" />
                    </div>

                    <div className="footer-box__social-media" data-test='footer-box__social-media'>
                        <img className="footer-box__social-media-icons footer-box__social-media-fb" src={Facebook} alt="Facebook Logo" data-test='footer-box__fb' />
                        <img className="footer-box__social-media-icons footer-box__social-media-twitter" src={Twitter} alt="Twitter Logo"  data-test='footer-box__twitter' />
                        <img className="footer-box__social-media-icons footer-box__social-media-email" src={SendEmail} alt="Send Email" data-test='footer-box__email' />
                    </div>

                    <p className="footer-box__mission-statement" data-test='footer-box__ms'>Empowering students to achieve more.</p>
                    <p className="footer-box__copyright" data-test='footer-box__copyright'> <span className="line-break">Copyright &copy; 2015 - 2019</span> Cameron and Guy Limited </p>
                    <div className="footer-box__footer_nav" data-test='footer-box__navigation'>
                        <span className="nav-link-styling" onClick={() => { history.push('/home')}}>Home</span>
                        <span className="footer-box__nav-bar">|</span> 
                        <span className="nav-link-styling" href="./privacy.html">Privacy </span> 
                        <span className="footer-box__nav-bar">|</span> 
                        <span className="nav-link-styling" href="./terms.html">Terms &amp; Conditions</span>
                    </div>

                </div>
            </div>
        </footer>
    )

}

export default Footer
