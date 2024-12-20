const React = require('react');

const hero = ({ title, subtitle }) => {
  return (
    React.createElement('div', null,
      React.createElement('section', { className: 'bg-red-800 py-10 mb-4' },
        React.createElement('div', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center' },
          React.createElement('div', { className: 'text-center' },
            React.createElement('h1', { className: 'text-3xl font-Roboto text-white sm:text-5xl md:text-6xl font-bold' }, title || 'Deepfake Detection'),
            React.createElement('p', { className: 'my-4 text-xl text-white' }, subtitle || 'Predict whether given image is a deepfake or not')
          )
        )
      )
    )
  );
}

module.exports = hero;