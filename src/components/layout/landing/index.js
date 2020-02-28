import React, {Component}  from 'react';
import { connect } from 'react-redux';
import history from 'components/history';
import InfoCard from 'components/cards/infoCard'

class Landing extends Component {

    componentDidUpdate () {
        if (this.props.isAuthenticated) {
            history.push ('/home');
        }
    }

    render () {
        return (
            <main className="main" data-test='landing'>
                <section className="container">

                    <h2 className="text-center" data-test='landing-header'><span className="heading heading-dark">How It Works</span></h2>

                    <InfoCard   header="1. Search Our tutors" 
                                img_class="info-card__back-img"
                                desc="Specify a subject, the required level and a location or online tutoring. The search can be enhanced with many other requirements, our favorite is to specify the day of week and times you are available and we will only return tutors who potentially are free at these times. We aim to simplify the searching."
                                desc_header="Search By" 
                                desc_items={['Subject', 'Subject level e.g GCSE', 'Local to you or online', 'Tutors that are actually available when you require them.']} >
                    </InfoCard>

                    <InfoCard   side="right"
                                header="2. Select a Tutor" 
                                img_class="info-card__back-img"
                                desc="Discuss your learning requirements with your shortlisted tutors, where the tutoring will occur and the payment terms. The booking of the tutor can be done via our site or via the tutor. This is all completely free."
                                desc_header="Selecting a Tutor" 
                                desc_items={['Get an understanding of the tutors knowledge of the subjects ciriculum.', 'The tutors experience.', 'Where the tutoring takes place.','Payment terms - a preferred method of paying the tutor.']} >
                    </InfoCard>

                    <InfoCard   header="3. Meet and Learn" 
                                img_class="info-card__back-img"
                                desc="This is where the fun starts. Your tutor will personalise each session to your requirements. In order for you and your child to get the most out of tutoring the tutor can be requested to provide feedback on lessons and homework set."
                                desc_header="Start Learning" 
                                desc_items={['Discuss subjects you have issues with.', 'Get shown methodologies to help solve these problems.', 'Get shown how and when to apply these methodologies.', 'Gain life changing convidence.' ]} >
                    </InfoCard>


                    <InfoCard   side="right"
                                header="4. Tutor Provides feedback" 
                                img_class="info-card__back-img"
                                desc="The tutor has the ability to write a brief description about what was covered in the lesson. They can also write or upload homework that the student and parent can view along with comments on the homework."
                                desc_header="Tutor Feedback" 
                                desc_items={['Tutor enters what was studied in lesson.', 'Tutor enters extracurricular studies.','Tutor enters comments about previous extracurricular studies.']} >
                    </InfoCard>

                    <InfoCard   header="5. Parent / Student Feedback" 
                                img_class="info-card__back-img"
                                desc="The parent / student can view the comments and homework set at any time via the website. This allows the parent a greater insite in to how there child is doing and helps the parent support their child."
                                desc_header="Feedback Review" 
                                desc_items={['Homework - recorded so its not forgotten.', 'Homework comments are easily assessable.', 'Parents can assess homework and lesson matter so they have a clear insight into what their child is doing so they can support them.']} >
                    </InfoCard>

                </section>
            </main>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Landing);
