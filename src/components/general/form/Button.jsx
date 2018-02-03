import React from 'react';

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
        let attributes = {
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

        return (
            <div>
                <label htmlFor={this.props.id}>{this.props.children}</label>
                <input {...attributes} />
            </div>
        );
    }
}

export default Button;
