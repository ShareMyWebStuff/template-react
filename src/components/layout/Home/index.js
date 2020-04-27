import React from 'react'

const Home = props => {
    return (

        <main className="main my-4" data-test='home'>
            <section className="container">

                <div className="plain-card" data-test='home__plain_card'>
                    <div className="plain-card__header" >
                        <h2>Welcome</h2>
                    </div>
                    <div className="plain-card__content" data-test='home__content'>

                        <div className="subject-lists" data-test='home__content__subject-list'>
                            <h2 className="subject-lists__title">Account Activity</h2>

                            <p className="subject-lists__item-desc">Unread messages</p>
                            <span className="subject-lists__item-info-1">7</span>
                            <button className="btn-narrow btn-blk btn-submit">View</button>

                            <p className="subject-lists__item-desc">Knowledge Center Comments</p>
                            <span className="subject-lists__item-info-1">0</span>
                            <p className="subject-lists__item-desc">Knowledge Center Likes</p>
                            <span className="subject-lists__item-info-1">0</span>

                            <h2 className="subject-lists__title">Profile Views</h2>
                            <p className="subject-lists__item-desc">This Week</p>
                            <span className="subject-lists__item-info-1">3</span>
                            <span className="subject-lists__item-info-2 success">&#x2191; 10%</span>

                            <p className="subject-lists__item-desc">Last Week</p>
                            <span className="subject-lists__item-info-1">2</span>
                            <span className="subject-lists__item-info-2 error">&#8595; 10%</span>

                            <h2 className="subject-lists__title">To Start Tutoring</h2>
                            <p className="subject-lists__item-desc">Add Subjects Taught</p>
                            <button className="subject-lists__item-info-2 btn-narrow btn-blk btn-submit">&#10230;</button>
                            <p className="subject-lists__item-desc">Add Tuition Locaton</p>
                            <button className="subject-lists__item-info-2 btn-narrow btn-blk btn-submit">&#10230;</button>


                            <h2 className="subject-lists__title">To Increase Profile Popularity</h2>
                            <p className="subject-lists__item-desc">Add a profile picture</p>
                            <button className="subject-lists__item-info-2 btn-narrow btn-blk btn-submit">&#10230;</button>
                            <p className="subject-lists__item-desc">Add profile description</p>
                            <button className="subject-lists__item-info-2 btn-narrow btn-blk btn-submit">&#10230;</button>
                            <p className="subject-lists__item-desc">Add Education</p>
                            <button className="subject-lists__item-info-2 btn-narrow btn-blk btn-submit">&#10230;</button>
                            <p className="subject-lists__item-desc">Add Tutoring Schedule</p>
                            <button className="subject-lists__item-info-2 btn-narrow btn-blk btn-submit">&#10230;</button>

                        </div>

                    </div>

                </div>
            </section>
        </main>
    )
}

export default Home;
