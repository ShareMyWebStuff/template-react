import React, {Component}  from 'react';
import { connect } from 'react-redux';

class HeaderRegisterUser extends Component {

    constructor (props) {
        super (props);

        this.state = {
        };
    }

    onChangeHandler = (e) => {
        this.setState( { [e.target.name]: e.target.value })
    }

    onSubmit = async (e) => {
        e.preventDefault();

        console.log ('Search for tutor pressed.');
    }

    // Add selected for the specified option
    createLevelOptions () {
        return (this.props.subjectsLevels.map ( lvl => {
            return (
                <option key={lvl.subject_level_id} value={lvl.subject_level}>{lvl.subject_level}</option>
            )
        }));
    }

    createSubjectOptions () {
        return (this.props.subjectsSearch.map ( lvl => {
            return (
                <option key={lvl.subject_id} value={lvl.subject}>{lvl.subject}</option>
            )
        }));
    }


    // componentDidUpdate () {
    //     if (this.props.isAuthenticated) {
    //         history.push ('/home');
    //     }
    // }

    render () {
        const defaultLevelValue = [<option key="0" value="Any Level">Any Level</option>];
        const levelOptions =  [...defaultLevelValue, this.createLevelOptions()];
        const defaultSubjectValue = [<option key="0" value="Any Level">Any Level</option>];
        const subjectOptions =  [...defaultSubjectValue, this.createSubjectOptions()];

        // const usernameError = (this.props.error && this.props.error["username"] ? <span className="form__input--error">{this.props.error["username"]}</span> :null);
        // const emailError = (this.props.error && this.props.error["email"] ? <span className="form__input--error">{this.props.error["email"]}</span> :null);
        // const passwordError = (this.props.error && this.props.error["password"] ? <span className="form__input--error">{this.props.error["password"]}</span> :null);
        // const password2Error = (this.props.error && this.props.error["password2"] ? <span className="form__input--error">{this.props.error["password2"]}</span> :null);
        // const msgError = (this.props.error && this.props.error["msg"] ? <span className="form__input--error">{this.props.error["msg"]}</span> :null);

        return (

            <form className="form ts-form" action="">

                <div className="form-group ts-form__tutor-subject">
                    <label htmlFor="subject" className="form__label">Subject</label>

                    <select name="subject" 
                            className="form__input" 
                            id="subject" >
                        {subjectOptions}
                    </select>
                </div>

                <div className="form-group ts-form__tutor-level">
                    <label htmlFor="level" className="form__label">Level</label>

                    <select name="level" 
                            className="form__input" 
                            id="level" >
                        {levelOptions}
                    </select>
                </div> 

                <div className="form-group ts-form__tutor-location" id="tutorTypeLocation">
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

                <button className="btn btn-submit ts-form__search-btn">Search</button>

            </form>


        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    subjectsSearch: ( state.subjects['Academic'] ? state.subjects['Academic'].subjects : []),
    subjectsLevels: ( state.subjects['Academic'] ? state.subjects['Academic'].subject_levels : [] )
})

export default connect(mapStateToProps, {  } )(HeaderRegisterUser);
