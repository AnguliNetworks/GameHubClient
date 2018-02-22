import React from 'react';
import PropTypes from 'prop-types';

function Message(props) {

    return (
        <p className={`message ${props.type}`} id={props.id}>
            {props.children}
        </p>
    );

}

Message.propTypes = {
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
};

export default Message;
