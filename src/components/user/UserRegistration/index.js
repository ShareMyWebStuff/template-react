import React from 'react'

const UserRegistration = (props) => {

    const userTypeContent = {
        TUTOR: {
            headerText: <h2>Why Tutor with Us</h2>,
            overviewText: <p>Here at ShareMyTutoring we value the exchange of knowledge. This site has been designed to aid students to get the most from their tutor and to help tutors maximise the time they can spend with students. This is one of the many reasons that if you connect on another tutoring site we have no issues if you purely use our site for the extra functionality we offer. On your profile you can even add links to profiles you have on other sites.<br />Below are some of the many reasons tutors are joining use</p>,
            bullets: <ul className="my-3">
                        <li><span>Our advanced diary</span></li>
                        <li><span>lets you specify when you are available.</span></li>
                        <li><span>Groups - setup a study groups</span></li>
                        <li><span>Create the group - for instance Maths tuition this easter.</span></li>
                        <li><span>Click advertise and a message will be sent to all Maths students.</span></li>
                        <li><span>Group allows students to subscribe.</span></li>
                        <li><span>You can rate no show students.</span></li>
                        <li><span>Knowledge Center - allows you to share your knowledge and become more marketable.</span></li>
                      </ul>
        },
        PARENT: {
            headerText: <h2>Why choose us</h2>,
            overviewText: <p>ShareMyTuytoring was created after one of the founders got tutors for his children. The issue with alot of tutoring sites is they connect the parent with tutors and thats where the service ends. There is little insight into what the tutors working on or if any homework is set. </p>,
            bullets: <ul className="my-3">
                        <li><span>We expediate the tutor search by allowing you to select only tutors that are available.</span></li>
                        <li><span>We can send reminders of the lessons at specific times.</span></li>
                        <li><span>The tutor can make notes and document the homework, ensuring the homework remit is not forgotten and giving the parent insight into how they can help their child.</span></li>
                        <li><span>Homework can be marked at the next lesson and the comments can be viewed by the chikld and parent.</span></li>
                        <li><span>Groups - study groups can be joined</span></li>
                        <li><span>Knowledge Center - we have a knowledge center where you and your child can find items to help you.</span></li>
                        <li><span>Question and Answers - Students can ask questions which may be answered by other students or tutors.</span></li>
                      </ul>
        },
        STUDENT: {
            headerText: <h2>Why choose us</h2>,
            overviewText: <p>ShareMyTutoring is so much more than a site connecting students with tutors. We have been designed to help you connect with available tutors and hence not waste your time. We allso offer tools to help you connect with other like minded students, ask questions to our community base and peruse our knowledge center to see if we can help there. </p>,
            bullets: <ul className="my-3">
                        <li><span>We expediate the tutor search by allowing you to select only tutors that are available.</span></li>
                        <li><span>We can send reminders of the lessons at specific times.</span></li>
                        <li><span>The tutor can make notes and document any work required before the next session, this is available for you to view at any time.</span></li>
                        <li><span>Groups - you can create a group if you want to meet like minded individuals.</span></li>
                        <li><span>Groups - a group can be sent to all students / tutors that have the same interests.</span></li>
                        <li><span>Knowledge Center - we have a knowledge center where you can find items to help you and you can post articles that will help others.</span></li>
                        <li><span>Question and Answers - You can ask questions which may be answered by other students or tutors.</span></li>
                      </ul>
        },
    }

    return (
        <section className="container my-4" data-test='user_registration'>

            <div className="plain-card"  data-test='user_registration__card'>
                <div className="plain-card__header" data-test='user_registration__card_header'>
                    {props.location && props.location.state && props.location.state.userType ? userTypeContent[props.location.state.userType].headerText : null}
                </div>
                <div className="plain-card__content" data-test='user_registration__card_body'>
                    {props.location && props.location.state && props.location.state.userType ? userTypeContent[props.location.state.userType].overviewText : null}
                    {props.location && props.location.state && props.location.state.userType ? userTypeContent[props.location.state.userType].bullets : null}
                </div>

            </div>
        </section>

    )
}

export default UserRegistration
