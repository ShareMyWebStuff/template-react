import React from 'react';

const IconCaret = props => {

    const height = props.height || 28;
    const width = props.height || 16;
    // const fill=props.fill ? `${props.fill}` : '';

    return (
        <svg className="dropdown-caret" xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 16 28">
            <title>caret-down</title>
            <path className="header__nav-dropdown-caret" d="M16 11c0 0.266-0.109 0.516-0.297 0.703l-7 7c-0.187 0.187-0.438 0.297-0.703 0.297s-0.516-0.109-0.703-0.297l-7-7c-0.187-0.187-0.297-0.438-0.297-0.703 0-0.547 0.453-1 1-1h14c0.547 0 1 0.453 1 1z"></path>
        </svg>
    );
}

export default IconCaret;
