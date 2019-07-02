import React from 'react';

function Button(props) {
  const { show, onTrigger, type, body } = props;

  if (!show) {
    return null;
  } else {
    return (
      <button onClick={onTrigger} className={type}>
        {body}
      </button>
    );
  }
}

export default Button;
