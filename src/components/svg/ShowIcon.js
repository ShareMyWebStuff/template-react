import React from 'react';
import PropTypes from 'prop-types';
import { iconTypes } from './iconTypes';

function ShowIcon ( {iconName, className, fill }) {

    return (
        <svg width={iconTypes[iconName].width} height={iconTypes[iconName].height} viewBox={iconTypes[iconName].viewBox} className={className} >
            <title>male</title>
            <path fill={fill} d={iconTypes[iconName].d}></path>
        </svg>
    )
}

ShowIcon.propTypes = {
    className: PropTypes.string,
    fill: PropTypes.string
}

ShowIcon.defaultProps = {
    className: undefined,
    fill: '#666'
}

export default ShowIcon;
