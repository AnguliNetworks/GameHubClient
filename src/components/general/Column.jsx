import React from 'react';
import PropTypes from 'prop-types';

function Column(props) {

    return (
        <div className={`column ${props.size}`}>
            {props.children}
        </div>
    );

}

Column.propTypes = {
    size: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array,
        PropTypes.string
    ])
};

Column.defaultProps = {
    children: ' '
};

export default Column;
