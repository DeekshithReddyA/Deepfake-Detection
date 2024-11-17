import React from 'react';
import Card from './Card';
import { NavLink } from 'react-router-dom';

const HomeCards = () => {
  return (
    React.createElement(
      'div',
      null,
      React.createElement(
        'section',
        { className: 'py-4' },
        React.createElement(
          'div',
          { className: 'container-xl lg:container m-auto' },
          React.createElement(
            'div',
            { className: 'grid grid-cols-1 md:grid-cols- gap-4 p-4 rounded-lg' },
            React.createElement(
              Card,
              null,
              React.createElement(
                'h2',
                { className: 'text-2xl font-bold' },
                'What is a Deepfake'
              ),
              React.createElement(
                'p',
                { className: 'mt-2 mb-4 text-xl font-Roboto' },
                'A "deepfake" refers to a form of synthetic media that is created using deep learning techniques, typically involving artificial intelligence (AI) and machine learning algorithms. The term "deepfake" is derived from "deep learning" and "fake".',
                React.createElement('br'),
                React.createElement('br'),
                'Deepfakes are often used to create or manipulate video or audio content, making it appear as though a person in an existing image or video is saying or doing something they never actually did. This technology can be used for various purposes, ranging from harmless entertainment to more nefarious activities such as spreading disinformation or creating fake news.'
              ),
              React.createElement(
                'h2',
                { className: 'text-2xl font-bold' },
                'Problem Statement'
              ),
              React.createElement(
                'p',
                { className: 'mt-2 mb-4 text-xl font-Roboto' },
                'The rapid growth of AI has led to impressive advancements, particularly in generating realistic images and videos. However, this progress has also facilitated the rise of deepfakes, creating serious concerns around misinformation, privacy invasion, and digital security. Our deepfake detection model aims to combat these negative impacts by accurately identifying AI-generated fake content, thereby protecting individuals and organizations from potential harm and preserving the integrity of digital media.',
              )
            )
          )
        )
      )
    )
  );
}

export default HomeCards;
