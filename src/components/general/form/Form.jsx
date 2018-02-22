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
    children: PropTypes.element.isRequired
};

export default Form;
