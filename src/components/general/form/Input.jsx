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
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div>
                <label htmlFor={this.props.id}>{this.props.children}</label>
                <input
                    type={this.props.type}
                    name={this.props.id}
                    id={this.props.id}
                    placeholder={this.props.children}
                    value={this.state.value}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

export default Input;
