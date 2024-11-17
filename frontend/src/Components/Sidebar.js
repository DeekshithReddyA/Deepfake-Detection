const React = require('react');
const logo = require('../assets/logo.png');
const { NavLink } = require('react-router-dom');

const navbar = () => {
  const linkClass = ({ isActive }) => isActive ? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2' : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2';

  return (
    React.createElement(React.Fragment, null,
      React.createElement('nav', { className: 'bg-red-800 border-b border-red-800' },
        React.createElement('div', { className: 'mx-auto max-w-7xl px-2 sm:px-6 lg:px-8' },
          React.createElement('div', { className: 'flex h-20 items-center justify-between' },
            React.createElement('div', { className: 'flex flex-1 items-center justify-center md:items-stretch md:justify-start' },
              /* Logo */
              React.createElement(NavLink, { className: 'flex flex-shrink-0 items-center mr-4', to: '/' },
                React.createElement('img', { className: 'h-10 w-auto', src: logo, alt: '42' }),
                React.createElement('span', { className: 'hidden md:block text-white text-2xl font-bold ml-2' }, 'Random State 42')
              ),
              React.createElement('div', { className: 'md:ml-auto' },
                React.createElement('div', { className: 'flex space-x-2' },
                  React.createElement(NavLink, { to: '/', className: linkClass }, 'Home'),
                  React.createElement(NavLink, { to: '/model', className: linkClass }, 'Model'),
                  React.createElement(NavLink, { to: '/dataset', className: linkClass }, 'Dataset')
                )
              )
            )
          )
        )
      )
    )
  );
}

module.exports = navbar;