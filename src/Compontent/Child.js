import React from 'react';

function Child(props) {
  return (
    <div>
      <h2>This is the ES6 Component</h2>
      <p>Message: {props.message}</p>
    </div>
  );
}

export default Child;