import React from 'react';
import Navbar from '../navbar';
import HeaderRegisterTutor from 'components/layout/headerRegisterTutor';
import HeaderLanding from 'components/layout/headerLanding';

// 
// Header
// 
// This component displays the header, including the NavBar and a subheading such a register tutor.
// 
class Header extends React.Component {

    constructor(props) {
        super(props);

        const tmpState = this.setProperties();

        this.state = tmpState;
    };

    setProperties () {

        const tmpState = {};

        if (this.props === undefined || this.props.location === undefined || this.props.location.pathname === undefined) {
            tmpState.pathname = '';
        } else {
            tmpState.pathname = this.props.location.pathname;
        }

        switch (tmpState.pathname) {
            case "/":
                tmpState.dataTest        = "HeaderLanding";
                tmpState.headerComponent = HeaderLanding;
                tmpState.headerClass     = "header header-landing";
                break;
            case "/register-tutor":
                tmpState.dataTest        = "HeaderRegisterTutor";
                tmpState.headerComponent = HeaderRegisterTutor; 
                tmpState.headerClass     = "header header-landing";
                break;
            default:
                tmpState.dataTest        = "Header";
                tmpState.headerComponent = null; 
                tmpState.headerClass     = "header header-landing";
                break;
        };

        return tmpState;
    };

    componentDidUpdate (prevProps, prevState) {
        if (this.state.pathname !== null && this.props.location.pathname !== this.state.pathname ) {
            const tmpState = this.setProperties ();
            this.setState ({...tmpState});
        }
    }


    render () {

        return (
            <header className={this.state.headerClass} data-test={this.state.dataTest}>
                <div className="container">
                    <Navbar />
                    {this.state.headerComponent ? <this.state.headerComponent />:null}
                </div>
                <div className="gradient gradient-bottom gradient-bottom-white"></div>
            </header>
        );
    };
};

export default Header
