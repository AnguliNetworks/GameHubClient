import React from 'react';

class Form extends React.Component {

    render() {
        return (
            <form className={'form'} method={'POST'} action={''}>
                {this.props.children}
            </form>
        );
    }
}

export default Form;
