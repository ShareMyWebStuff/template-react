import React from 'react'
import history from 'components/history';
import Logo from '../../../images/logo.png'
import Facebook from '../../../images/facebook.png'
import Twitter from '../../../images/twitter.png'
import SendEmail from '../../../images/envelop.png'

// Footer
// 
// This component displays a footer at the bottom of each page
function Footer() {
    return (

        <footer className="footer" data-test='footer'>
            <div className="gradient gradient-top gradient-top-white "></div>

            <div className="container">
                <div className="footer-box" data-test='footer-box'>
                    <a className="footer-box__logo" href="./index.html" data-test='footer-box__logo'>
                        <img onClick={ () => {history.push('/'); this.setState( { dropdown: false });} } src={Logo} alt="Logo"  />
                    </a>

                    <div className="footer-box__social-media" data-test='footer-box__social-media'>
                        <img className="footer-box__social-media-icons footer-box__social-media-fb" src={Facebook} alt="Facebook Logo" data-test='footer-box__fb' />
                        <img className="footer-box__social-media-icons footer-box__social-media-twitter" src={Twitter} alt="Twitter Logo"  data-test='footer-box__twitter' />
                        <img className="footer-box__social-media-icons footer-box__social-media-email" src={SendEmail} alt="Send Email" data-test='footer-box__email' />
                    </div>

                    <p className="footer-box__mission-statement" data-test='footer-box__ms'>Empowering students to achieve more.</p>
                    <p className="footer-box__copyright" data-test='footer-box__copyright'> <span className="line-break">Copyright &copy; 2015 - 2019</span> Cameron and Guy Limited </p>
                    <div className="footer-box__footer_nav" data-test='footer-box__navigation'>
                        <a className="nav-link-styling" href="./index.html">Home </a> 
                        <span className="footer-box__nav-bar">|</span> 
                        <a className="nav-link-styling" href="./privacy.html">Privacy </a> 
                        <span className="footer-box__nav-bar">|</span> 
                        <a className="nav-link-styling" href="./terms.html">Terms &amp; Conditions</a>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer
