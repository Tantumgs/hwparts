import React from 'react';

export default function PartA({ onNavigate }) {
  // A1 – Simple Heading
  const A1 = React.createElement('h1', null, 'Hello, React!');

  // A2 – Wrapper with Two Children
  const A2 = React.createElement(
    'div',
    { className: 'card' },
    React.createElement('h2', null, 'Profile'),
    React.createElement('p', null, 'Welcome to your profile page.')
  );

  // A3 – Using Variables Inside JSX
  const name = 'Nurlan';
  const age = 42;
  const A3 = React.createElement('p', null, `${name} is ${age} years old.`);

  // A4 – Component Return Value (Greeting)
  function Greeting({ name }) {
    return React.createElement(
      'div',
      { className: 'greeting' },
      React.createElement('h1', null, `Hello, ${name}!`)
    );
  }

  // A5 – List Rendering (TopicList)
  const items = ['JSX', 'Components', 'Hooks'];
  function TopicList() {
    return React.createElement(
      'ul',
      null,
      items.map((topic, index) => React.createElement('li', { key: index }, topic))
    );
  }

  // A6 – Nested Components (Button + App)
  function ButtonCE({ label }) {
    return React.createElement('button', { className: 'btn' }, label);
  }

  function AppCE() {
    return React.createElement(
      'div',
      { className: 'app' },
      React.createElement('h1', null, 'My App'),
      React.createElement(ButtonCE, { label: 'Click me' })
    );
  }

  // A7 – Inline Styles
  const A7 = React.createElement(
    'div',
    { style: { padding: '10px', borderRadius: '8px' } },
    'Inline styled box'
  );

  // A8 – Fragment
  function Info() {
    return React.createElement(
      React.Fragment,
      null,
      React.createElement('h2', null, 'Title'),
      React.createElement('p', null, 'Description text here.')
    );
  }

  return React.createElement(
    'div',
    null,
    React.createElement('h2', null, 'Part A'),
    React.createElement('p', null, 'Это страница Part A.'),
    React.createElement('div', { style: { marginTop: 12 } },
      React.createElement('button', { onClick: () => onNavigate('home') }, 'Home'),
      ' ',
      React.createElement('button', { onClick: () => onNavigate('partb') }, 'Go to Part B'),
      ' ',
      React.createElement('button', { onClick: () => onNavigate('partc') }, 'Go to Part C')
    ),

    React.createElement('hr', null),
    React.createElement('h3', null, 'Exercises (created with React.createElement)'),
    React.createElement('div', { style: { paddingLeft: 8 } },
      React.createElement('div', null, React.createElement('strong', null, 'A1:'), ' ', A1),
      React.createElement('div', null, React.createElement('strong', null, 'A2:'), ' ', A2),
      React.createElement('div', null, React.createElement('strong', null, 'A3:'), ' ', A3),
      React.createElement('div', null, React.createElement('strong', null, 'A4:'), ' ', React.createElement(Greeting, { name: 'Nurlan' })),
      React.createElement('div', null, React.createElement('strong', null, 'A5:'), ' ', React.createElement(TopicList)),
      React.createElement('div', null, React.createElement('strong', null, 'A6:'), ' ', React.createElement(AppCE)),
      React.createElement('div', null, React.createElement('strong', null, 'A7:'), ' ', A7),
      React.createElement('div', null, React.createElement('strong', null, 'A8:'), ' ', React.createElement(Info))
    )
  );
}