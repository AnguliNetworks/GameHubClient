import React from 'react';
import Column from './Column';
import PropTypes from 'prop-types';

function Message(props) {

    return (
        <p className={`message ${props.type}`} id={props.id}>
            {props.children}
        </p>
    );

}

Column.propTypes = {
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
};

export default Message;
