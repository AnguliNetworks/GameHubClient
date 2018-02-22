import React from 'react';
import PropTypes from 'prop-types';

function Message(props) {

    const attributes = {
        className: `message ${props.type}`
    };

    if (props.id) {

        attributes.id = props.id;

    }

    return (
        <p {...attributes}>
            {props.children}
        </p>
    );

}

Message.propTypes = {
    type: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array,
        PropTypes.string
    ]),
    id: PropTypes.string
};

Message.defaultProps = {
    type: '',
    children: ' ',
    id: undefined
};

export default Message;
