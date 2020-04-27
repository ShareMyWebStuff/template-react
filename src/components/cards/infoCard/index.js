import React from 'react';
import PropTypes from 'prop-types';

// InfoCard
// 
// Displays a card with an image background on the left or right. When the image is hovered over
// the picture area text with be displayed.
// 
// Props
// side         undefined | left | right     Undefined defaults to left
// header       The header outside the picture area
// img_class    This is the class name with the associated svg image for the background
// desc         The description of the header
// desc_header  The picture header
// desc_items   The picture description
// 
const InfoCard = (props) => {

    const items = props.desc_items.map( (item, idx) => {
        return <li key={idx}>{item}</li>
    });

    const cardSide = "info-card info-card-center-" + (props.side || 'left');

    return (
        <div className={cardSide} data-test="InfoCard" >
            <div className="info-card__picture-area" data-test="infocard__pa" >
                <div className="info-card__picture" ></div>
                <div className={props.img_class}>
                    <h2 data-test="infocard__pa-header">{props.desc_header}</h2>

                    <ul data-test="infocard__pa-list">
                        {items}
                    </ul>
                </div>
            </div>
            <div className="info-card__desc" data-test="infocard__desc">
                <h2 className="info-card__header" data-test="infocard__desc-header">{props.header}</h2>
                <p className="info-card__paragraph" data-test="infocard__desc-paragraph">{props.desc}
                </p>
            </div>
        </div>
    );
}

InfoCard.propTypes = {
    side: PropTypes.string,
    header: PropTypes.string.isRequired,
    img_class: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    desc_header: PropTypes.string.isRequired,
    desc_items: PropTypes.array.isRequired
};

export default InfoCard;

