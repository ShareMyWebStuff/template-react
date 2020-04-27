import React  from 'react';

// 
// PathNotFound
// 
// When a user navigates to a route that doesnt exist this component is rendered.
// 

function PathNotFound () {

    return (
        <section className="container my-4"  data-test='path_not_found'>
            <div className="plain-card">
                <div className="plain-card__header" data-test='path_not_found__header'>
                    404 - Page Not Found
                </div>
                <div className="plain-card__content" data-test='path_not_found__body'>
                    <p>The requested page does not exist.</p>
                </div>

            </div>
        </section>
    );

}

export default PathNotFound;

