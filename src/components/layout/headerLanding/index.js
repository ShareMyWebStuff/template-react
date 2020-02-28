import React, {Component}  from 'react';


// 
// Component: HeaderLanding
// 
// Description: This component is called from the Header component. It allows users to enter tutor search criteria 
// from the landing page in order to see what the site offers.
// 
// Props:   None.
// 
class HeaderLanding extends Component {

    state = {
        faceToFace: true,
        online: false,
        subject: '',
        level: '',
        location: ''
    };

    onChangeHandler = (e) => {
        this.setState( { [e.target.name]: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();

        console.log (this.state);
    }

    render () {

        return (
            <div className="hsb" data-test="header-landing">

                <div className="hsb__statements" data-test="header-landing-statements">
                    <div className="">
                        <h2 className="hsb__statements-title">Completely Free</h2>
                        <p className="hsb__statements-desc ml-4">- we pride ourselves on offering a quality service free of charge.</p>
                    </div>
                    <div className="my-4">
                        <h2 className="hsb__statements-title">Convenient to Use</h2>
                        <p className="hsb__statements-desc ml-4">- Search for tutors available on the days and times that work for you.</p>
                    </div>
                    <div className="">
                        <h2 className="hsb__statements-title">You are in control</h2>
                        <p className="hsb__statements-desc ml-4">- Want to know what your child is learning?</p>
                        <p className="hsb__statements-desc ml-4">- If homework has been set?</p>
                        <p className="hsb__statements-desc ml-4">- Our tutors provide feedback tailored to suit your needs.</p>
                    </div>
                </div>
    
                <div id="header__search-form" className="hsb__form form-search" data-test="header-landing-sf">
                    <div className="text-center">
                        <h2 className="heading heading-light" data-test="header-landing-sf-header">FindMyTutor</h2>
                    </div>
        
                    <form onSubmit={e => this.onSubmit(e)} data-test="header-landing-form">
        
                        <div className="form-search__tutor-type" data-test="header-landing-sf-tuition-type">
                            <input 
                                onClick={() => this.setState( { faceToFace: true, online: false } )  } 
                                onChange={() => this.setState( { faceToFace: true, online: false } )  } 
                                type="radio" 
                                name="tuitionType" 
                                value="face" 
                                id="tutorTypeFace" 
                                checked={this.state.faceToFace} 
                            />
                            <label htmlFor="tutorTypeFace">Face To Face</label>
                            <input 
                                onClick={() => this.setState( { faceToFace: false, online: true } ) }  
                                onChange={() => this.setState( { faceToFace: false, online: true } ) }  
                                type="radio" 
                                name="tuitionType" 
                                value="online" 
                                id="tutorTypeOnline" 
                                checked={this.state.online} 
                            />
                            <label htmlFor="tutorTypeOnline">Online</label>
                        </div>
        
                    <div className="form-group mt-2" data-test="header-landing-sf-subject">
                        <label htmlFor="subject" className="form__label">Subject</label>
                        <input 
                                onChange={this.onChangeHandler} 
                                type="text" 
                                name="subject" 
                                className="form__input" 
                                value={this.state.subject} 
                                placeholder="Subject" 
                                id="subject" 
                                required/>
                    </div>
        
                    <div className="form-group mt-2" data-test="header-landing-sf-level">
                        <label htmlFor="level" className="form__label">Level</label>
                        <input 
                                onChange={this.onChangeHandler} 
                                type="text" 
                                name="level" 
                                className="form__input" 
                                value={this.state.level} 
                                placeholder="Level" 
                                id="level" 
                                required/>
                    </div> 
        
                    <div className="form-group mt-2" id="tutorTypeLocation" data-test="header-landing-sf-location">
                        <label htmlFor="location" className="form__label">Location</label>
                        <input 
                                onChange={this.onChangeHandler} 
                                type="text" 
                                name="location" 
                                className="form__input" 
                                value={this.state.location} 
                                placeholder="Location" 
                                id="location" 
                                required/>
                    </div>
        
                    <button className="btn btn-blk btn-submit mt-4" data-test="header-landing-sf-submit-btn">Search</button>
        
                </form>
        
            </div>
        
        </div> 
        );
    
    }

}

export default HeaderLanding;
