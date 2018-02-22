import React from 'react';
import PropTypes from 'prop-types';
import Modal from './modal/Modal';

class Link extends React.Component {

    constructor(props) {

        super(props);

        this.handleClick = this.handleClick.bind(this);

    }

    handleClick(event) {

        if (this.props.link === '/') {

            event.preventDefault();

        }

        if (this.props.modal) {

            this.props.modal.showModal();

        }

        if (this.props.onclick) {

            this.props.onclick(event);

        }

    }

    render() {

        const attributes = {
            href: this.props.link,
            onClick: this.handleClick,
            className: this.props.color
        };

        if (this.props.className) {

            attributes.className += ` ${this.props.className}`;

        }

        if (this.props.extern) {

            attributes.target = '_blank';

        }

        return (
            <a {...attributes}>
                {this.props.children}
            </a>
        );

    }

}

Link.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array,
        PropTypes.string
    ]),
    color: PropTypes.string,
    className: PropTypes.string,
    link: PropTypes.string,
    modal: PropTypes.instanceOf(Modal),
    onclick: PropTypes.func,
    extern: PropTypes.bool
};

Link.defaultProps = {
    children: ' ',
    color: 'blue',
    className: undefined,
    link: '/',
    modal: undefined,
    onclick: undefined,
    extern: false
};

export default Link;
