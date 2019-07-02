import React from 'react';
import './Modal.css';

class Modal extends React.Component {
  render() {
    const { show, onClose, onRemove } = this.props;

    if (!show) {
      return null;
    }

    return (
      <div className="modal-style">
        <div className="backdrop-style">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Remove User</h4>
                <button type="button" className="close" onClick={onClose}>
                  &times;
                </button>
              </div>

              <div className="modal-body">
                Hey! You are going to{' '}
                <span className="text-danger">remove</span> data!
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={onRemove}
                >
                  I know, just do it!
                </button>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={onClose}
                >
                  Oh no, bring me back!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
