import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalWindow } from './Modal.styled';

const modalRoot = document.querySelector('#root2');

export class Modal extends Component {
  componentDidMount() {
    console.log('Modal componentDidMount');
    window.addEventListener('keydown', this.handeleKeyDown);
  }

  componentWillUnmount() {
    console.log('Modal componentWillUnmound');

    window.removeEventListener('keydown', this.handeleKeyDown);
  }

  handeleKeyDown = e => {
    if (e.code === 'Escape') {
      console.log('Нажали Esc');
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    console.log('Кликнули в бекдроп');

    console.log('currentTarget', e.currentTarget);
    console.log('target:', e.target);

    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <ModalWindow>{this.props.children}</ModalWindow>
      </Overlay>,
      modalRoot
    );
  }
}
