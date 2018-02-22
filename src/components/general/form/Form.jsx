import React from 'react';
import PropTypes from 'prop-types';

function Form(props) {

    return (
        <form className={'form'} method={'POST'} action={''}>
            {props.children}
        </form>
    );

}

Form.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array,
        PropTypes.string
    ])
};

Form.defaultProps = {
    children: ' '
};

export default Form;
