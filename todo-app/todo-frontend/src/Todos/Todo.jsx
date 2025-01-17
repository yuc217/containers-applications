import React from 'react';

const Todo = ({ text, done }) => {
  return (
    <div>
      <input type="checkbox" checked={done} readOnly />
      <span>{text}</span>
    </div>
  );
};

export default Todo;