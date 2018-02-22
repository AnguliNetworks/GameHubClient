import React from 'react';
import PropTypes from 'prop-types';

function Panel(props) {

    const attributes = {
        className: `panel${(props.transparent ? ' transparent' : '')}`
    };

    if (props.id) {

        attributes.id = props.id;

    }

    return (
        <div {...attributes}>
            {props.children}
        </div>
    );

}

Panel.propTypes = {
    children: PropTypes.element.isRequired,
    id: PropTypes.string,
    transparent: PropTypes.bool
};

Panel.defaultProps = {
    id: undefined,
    transparent: false
};

export default Panel;
