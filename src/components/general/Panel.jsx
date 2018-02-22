import React from 'react';
import PropTypes from 'prop-types';

function Panel(props) {

    return (
        <div
            className={`panel${(props.transparent ? ' transparent' : '')}`}
            id={props.id}
        >
            {props.children}
        </div>
    );

}

Panel.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
};

export default Panel;
