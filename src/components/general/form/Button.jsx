import React from 'react';

class Button extends React.Component {

    render() {
        return (
            <div>
                <label htmlFor={this.props.id}>{this.props.children}</label>
                <input type={'button'} name={this.props.id} id={this.props.id} value={this.props.children}/>
            </div>
        );
    }
}

export default Button;
