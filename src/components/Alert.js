import React from 'react';

function Alert(props) {
  const { show, type, body, onClose } = props;

  if (!show) {
    return null;
  } else {
    return (
      <div className={type}>
        <button type="button" className="close" onClick={onClose}>
          &times;
        </button>
        {body}
      </div>
    );
  }
}

export default Alert;
