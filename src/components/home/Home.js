import React from 'react'

const Home = props => {
    return (

        <main className="main my-4" data-test='home'>
            <section className="container">

                <div className="plain-card">
                    <div className="plain-card__header" data-test='home__header'>
                        <h2>Welcome</h2>
                    </div>
                    <div className="plain-card__content" data-test='home__content'>
                        Welcome to ShareMyTutoring, were the latest place to spring up helping you find a tutor. 
                    </div>

                </div>
            </section>
        </main>
    )
}

export default Home;
