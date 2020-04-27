import React, {Component}  from 'react';
import { connect } from 'react-redux';
import { InputField, SelectField } from '../../form/InputFields';


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
        location: '',
        errorMsg: {}
    };


    onChangeSelectHandler = (e) => {
        this.setState ({[e.target.name]: e.target.value});
    }

    onChangeHandler = (e) => {
        this.setState( { [e.target.name]: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();

        console.log ('e');
        console.log (this.state);
    }


    render () {
        const subjectError  = (this.state.errorMsg["subject"]  ? <span className="form__input--error">{this.state.errorMsg["subject"]}</span> :null);
        const levelError    = (this.state.errorMsg["level"]    ? <span className="form__input--error">{this.state.errorMsg["level"]}</span> :null);
        const locationError = (this.state.errorMsg["location"] ? <span className="form__input--error">{this.state.errorMsg["location"]}</span> :null);

        return (
            <div className="hsb" data-test="header-landing">

                <div className="hsb__statements" data-test="header-landing-statements">
                    <div >
                        <h2 className="hsb__statements-title">Completely Free</h2>
                        <p className="ml-4">- we pride ourselves on offering a quality service free of charge.</p>
                    </div>
                    <div className="my-4">
                        <h2 className="hsb__statements-title">Convenient to Use</h2>
                        <p className="ml-4">- Search for tutors available on the days and times that work for you.</p>
                    </div>
                    <div className="">
                        <h2 className="hsb__statements-title">You are in control</h2>
                        <p className="ml-4">- Want to know what your child is learning?</p>
                        <p className="ml-4">- If homework has been set?</p>
                        <p className="ml-4">- Our tutors provide feedback tailored to suit your needs.</p>
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

                        <SelectField    id="subject" 
                                        name="subject" 
                                        label="Subject" 
                                        value={this.state.subject} 
                                        notSelectedValue="Any Level" 
                                        options={this.props.subjectsSearch} 
                                        optionKey="subject_id" 
                                        optionValue="subject" 
                                        onChangeHandler={this.onChangeSelectHandler} 
                                        onFocusHandler={this.onFocusSelectHandler}
                                        validationError={subjectError} />

                        <SelectField    id="level" 
                                        name="level" 
                                        label="Level" 
                                        value={this.state.level} 
                                        notSelectedValue="Any Level" 
                                        options={this.props.subjectsLevels} 
                                        optionKey="subject_level_id" 
                                        optionValue="subject_level" 
                                        onChangeHandler={this.onChangeSelectHandler} 
                                        onFocusHandler={this.onFocusSelectHandler}
                                        validationError={levelError} />
                        
                        <InputField     inputType="text"
                                        id="location"
                                        name="location"
                                        label="Location"
                                        placeholder="Location"
                                        value={this.state.location}
                                        onChangeHandler={this.onChangeHandler}
                                        validationError={locationError} />

                    <button className="btn btn-blk btn-submit mt-4" data-test="header-landing-sf-submit-btn">Search</button>
        
                </form>
        
            </div>
        
        </div> 
        );
    
    }

}

const mapStateToProps = state => ({
    subjectsSearch: ( state.subjects['Academic'] ? state.subjects['Academic'].subjects : []),
    subjectsLevels: ( state.subjects['Academic'] ? state.subjects['Academic'].subject_levels : [] )
})

export default connect(mapStateToProps)(HeaderLanding);
