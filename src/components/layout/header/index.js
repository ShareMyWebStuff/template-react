import React from 'react';
import Navbar from '../Navbar';
import HeaderUserRegistration from '../HeaderUserRegistration';
import HeaderLanding from '../HeaderLanding';
// import HeaderTutorSearch from '../HeaderTutorSearch';

// 
// Header
// 
// This component displays the header, including the NavBar and a subheading such as register tutor.
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
                tmpState.props           = this.props.location.state;
                tmpState.headerClass     = "header header-landing";
                tmpState.showGradient    = true;
                break;
            case "/user-registration-student":
            case "/user-registration-parent":
            case "/user-registration-tutor":
                tmpState.dataTest        = "HeaderUserRegistration";
                tmpState.headerComponent = HeaderUserRegistration; 
                tmpState.props           = this.props.location.state;
                tmpState.headerClass     = "header header-landing";
                tmpState.showGradient    = true;
                break;
            // case "/tutor-search":
            //     tmpState.dataTest        = "HeaderTutorSearch";
            //     tmpState.headerComponent = HeaderTutorSearch; 
            //     tmpState.props           = this.props.location.state;
            //     tmpState.headerClass     = "header header-tutor-search";
            //     tmpState.showGradient    = true;
            //     break;
            case "/user-contact-details":
            case "/verify-media":
                tmpState.dataTest        = "Header";
                tmpState.headerComponent = null; 
                tmpState.props           = this.props.location.state;
                tmpState.headerClass     = "header header-landing";
                tmpState.showGradient    = false;
                break;
            case "/login":
                tmpState.dataTest        = "Header";
                tmpState.headerComponent = null; 
                tmpState.props           = this.props.location.state;
                tmpState.headerClass     = "header";
                tmpState.showGradient    = false;
                break;
            default:
                tmpState.dataTest        = "Header";
                tmpState.headerComponent = null; 
                tmpState.props           = (this.props.location ? this.props.location.state : undefined );
                tmpState.headerClass     = "header header-landing";
                tmpState.showGradient    = false;
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

        const headerComp = (this.state.headerComponent ? <this.state.headerComponent { ...this.state.props} />:null );
        const displayGradient = (this.state.showGradient ? <div className="gradient gradient-bottom gradient-bottom-white"></div>:null );

        return (
            <header className={this.state.headerClass} data-test={this.state.dataTest}>
                <div className="container">
                    <Navbar />
                    {headerComp}
                </div>
                {displayGradient}
            </header>
        );
    };
};

export default Header
