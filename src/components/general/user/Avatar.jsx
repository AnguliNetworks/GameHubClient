import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../modal/Modal';

const handleClick = props => (event) => {

    event.preventDefault();

    if (props.modal) {

        props.modal.showModal();

    }

    if (props.onclick) {

        props.onclick(event);

    }

};

function Avatar(props) {

    const attributes = {
        className: `avatar-container ${props.status ? props.status : ''}`,
        onClick: handleClick(props)
    };

    return (
        <div {...attributes}>
            <figure
                className={'avatar'}
                style={{ backgroundImage: `url(${props.src})` }}
            />
        </div>
    );

}

Avatar.propTypes = {
    src: PropTypes.string.isRequired,
    status: PropTypes.string,
    modal: PropTypes.instanceOf(Modal),
    onclick: PropTypes.func
};

Avatar.defaultProps = {
    status: undefined,
    modal: undefined,
    onclick: undefined
};

export default Avatar;
