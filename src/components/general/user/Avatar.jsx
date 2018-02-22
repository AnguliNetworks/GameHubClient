import React from 'react';
import PropTypes from 'prop-types';

function Avatar(props) {

    return (
        <div className={`avatar-container ${props.status ? props.status : ''}`}>
            <figure
                className={'avatar'}
                style={{ backgroundImage: `url(${props.src})` }}
            />
        </div>
    );

}

Avatar.propTypes = {
    src: PropTypes.string.isRequired,
    status: PropTypes.string
};

Avatar.defaultProps = {
    status: undefined
};

export default Avatar;
