import React from 'react';

class Panel extends React.Component {

    render() {
        return (
            <div className={'panel' + (this.props.transparent ? ' transparent' : '')} id={this.props.id}>
                {this.props.children}
            </div>
        );
    }
}

export default Panel;
