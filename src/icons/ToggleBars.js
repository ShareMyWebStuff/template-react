import React from 'react';

const ToggleBars = props => {

    const height = props.height || 28;
    const width = props.height || 24;
    // const fill=props.fill ? `${props.fill}` : '';

    return (
        <svg className="dropdown-caret" xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 28">
            <title>bars</title>
            <path d="M24 21v2c0 0.547-0.453 1-1 1h-22c-0.547 0-1-0.453-1-1v-2c0-0.547 0.453-1 1-1h22c0.547 0 1 0.453 1 1zM24 13v2c0 0.547-0.453 1-1 1h-22c-0.547 0-1-0.453-1-1v-2c0-0.547 0.453-1 1-1h22c0.547 0 1 0.453 1 1zM24 5v2c0 0.547-0.453 1-1 1h-22c-0.547 0-1-0.453-1-1v-2c0-0.547 0.453-1 1-1h22c0.547 0 1 0.453 1 1z"></path>
        </svg>
    );
}

export default ToggleBars;
