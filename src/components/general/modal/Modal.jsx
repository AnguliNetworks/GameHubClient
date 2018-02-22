import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link';

class Modal extends React.Component {

    constructor(props) {

        super(props);

        this.props.bindModal(this);

        this.state = {
            hide: true
        };

        this.closeModal = this.closeModal.bind(this);
        this.showModal = this.showModal.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);

    }

    componentDidMount() {

        document.addEventListener('mousedown', this.handleMouseDown);

    }

    componentWillUnmount() {

        document.removeEventListener('mousedown', this.handleMouseDown);

    }

    handleMouseDown(event) {

        if (this.state.hide) {

            return;

        }

        if (event.target.className !== 'modal') {

            return;

        }

        this.closeModal();

    }

    closeModal() {

        this.setState({ hide: true });

    }

    showModal() {

        this.setState({ hide: false });

    }

    render() {

        return (
            <div className={`modal${this.state.hide ? ' hidden' : ''}`} id={this.props.title}>
                <div className={'body'}>
                    <header>
                        <span className={'title'}>{this.props.title}</span>
                        <Link onclick={this.closeModal} color={'black'} className={'cross'}>
                            <span className={'cross-one'}>cross-one</span>
                            <span className={'cross-two'}>cross-two</span>
                        </Link>
                    </header>
                    <div className={'content'}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );

    }

}

Modal.propTypes = {
    bindModal: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
};

export default Modal;
