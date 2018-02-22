import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event) {

        const { value } = event.target;
        this.setState({ value });

        if (this.props.onchange) {

            this.props.onchange(this, value);

        }

        if (this.props.validation === undefined) {

            return;

        }

        let valid = false;

        switch (this.props.validation.type) {

            case 'mail':
                valid = /^[_A-Za-z0-9]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/.test(value);
                break;
            case 'username':
                valid = /^[a-zA-Z0-9_.-]{3,}$/.test(value);
                break;
            case 'password':
                valid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d!-}ä-üÄ-Üß §]{8,}$/.test(value);
                break;
            default:

        }

        if (value === '') {

            valid = undefined;

        }

        this.setState({
            valid
        });

        this.props.validation.fn(this.props.id, value, valid);

    }

    render() {

        const attributes = {
            id: this.props.id,
            type: this.props.type,
            name: this.props.id,
            placeholder: this.props.children,
            value: this.state.value,
            onChange: this.handleChange
        };

        if (this.state.valid !== undefined) {

            attributes.className = this.state.valid ? 'valid' : 'invalid';

        }

        return (
            <div>
                <label htmlFor={this.props.id}>{this.props.children}</label>
                <input {...attributes} />
            </div>
        );

    }

}

Input.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onchange: PropTypes.func,
    validation: PropTypes.shape({
        type: PropTypes.string,
        fn: PropTypes.func
    })
};

Input.defaultProps = {
    onchange: undefined,
    validation: undefined
};

export default Input;
