import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {

    constructor(properties) {

        super(properties);

        this.handleClick = this.handleClick.bind(this);

    }

    handleClick(event) {

        event.preventDefault();

        if (this.props.onclick !== undefined) {

            this.props.onclick(event);

        }

    }

    render() {

        const attributes = {
            type: 'button',
            name: this.props.id,
            id: this.props.id,
            value: this.props.children,
            onClick: this.handleClick
        };

        if (this.props.disabled) {

            attributes.disabled = true;

        }

        if (this.props.type) {

            attributes.type = this.props.type;

        }

        if (this.props.className) {

            attributes.className = this.props.className;

        }

        return (
            <div className={'button'}>
                <label
                    htmlFor={this.props.id}
                    className={this.props.hiddenLabel ? 'hidden' : ''}
                >
                    {this.props.children}
                </label>
                <input {...attributes} />
            </div>
        );

    }

}

Button.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array,
        PropTypes.string
    ]),
    disabled: PropTypes.bool,
    onclick: PropTypes.func,
    className: PropTypes.string,
    hiddenLabel: PropTypes.bool,
    type: PropTypes.string
};

Button.defaultProps = {
    children: ' ',
    disabled: false,
    onclick: undefined,
    className: '',
    hiddenLabel: false,
    type: undefined
};

export default Button;
