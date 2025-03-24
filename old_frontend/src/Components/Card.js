import React from 'react';

const Card = ({ children, bg = 'bg-gray-100' }) => {
  return (
    React.createElement(
      'div',
      { className: `${bg} p-6 rounded-lg shadow-md` },
      children
    )
  );
}

export default Card;
