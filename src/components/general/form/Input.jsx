import React from 'react';

class Input extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        
        const value = event.target.value;
        this.setState({value: value});

        if (this.props.onchange) {
            this.props.onchange(this, value);
        }

        if(this.props.validation === undefined) {
            return
        }

        let validation = false;

        switch (this.props.validation.type) {
            case 'mail':
                validation = /^[_A-Za-z0-9]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/.test(value);
                break;
            case 'username':
                validation = /^[a-zA-Z0-9_.-]{3,}$/.test(value);
                break;
            case 'password':
                validation = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!-}ä-üÄ-Üß]{8,}$/.test(value);
                break;
            default:
        }

        if (value === '') {
            validation = undefined;
        }

        this.setState({valid: validation});
        this.props.validation.fn(this, validation);
    }

    render() {
        return (
            <div>
                <label htmlFor={this.props.id}>{this.props.children}</label>
                <input
                    className={this.state.valid === undefined ? '' : (this.state.valid ? 'valid' : 'invalid')}
                    type={this.props.type}
                    name={this.props.id}
                    id={this.props.id}
                    placeholder={this.props.children}
                    value={this.state.value}
                    onChange={this.handleChange}
                    onBlur={this.handleChange}
                />
            </div>
        );
    }
}

export default Input;
