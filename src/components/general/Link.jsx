import React from 'react';
import PropTypes from 'prop-types';

class Link extends React.Component {

    constructor(props) {

        super(props);

        this.handleClick = this.handleClick.bind(this);

    }

    handleClick(event) {

        if (this.props.link === undefined) {

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
            href: this.props.link ? this.props.link : '/',
            className: this.props.color
        };

        if (this.props.onclick) {

            attributes.onClick = this.handleClick;

        }

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
    children: PropTypes.element.isRequired,
    color: PropTypes.string,
    className: PropTypes.string,
    link: PropTypes.string,
    modal: PropTypes.element,
    onclick: PropTypes.func,
    extern: PropTypes.bool
};

Link.defaultProps = {
    color: 'blue',
    className: undefined,
    link: '/',
    modal: undefined,
    onclick: undefined,
    extern: false
};

export default Link;
