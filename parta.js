const React = require('react');
const ReactDOMServer = require('react-dom/server');

//A1
const A1 = React.createElement('h1', null, 'Hello, React!');
console.log(ReactDOMServer.renderToStaticMarkup(A1));

//A2
const A2 = React.createElement(
  'div',
  { className: 'card' },
  React.createElement('h2', null, 'Profile'),
  React.createElement('p', null, 'Welcome to your profile page.')
);
console.log(ReactDOMServer.renderToStaticMarkup(A2));

//A3
const name = "Nurlan";
const age = 42;
const A3 = React.createElement('p', null, `${name} is ${age} years old.`);
console.log(ReactDOMServer.renderToStaticMarkup(A3));

//A4
function Greeting({ name }) {
  return React.createElement(
    'div',
    { className: 'greeting' },
    React.createElement('h1', null, `Hello, ${name}!`)
  );
}
console.log(ReactDOMServer.renderToStaticMarkup(React.createElement(Greeting, { name: 'Nurlan' })));

//A5
const items = ["JSX", "Components", "Hooks"];
function TopicList() {
  return React.createElement(
    'ul',
    null,
    items.map((topic, index) => React.createElement('li', { key: index }, topic))
  );
}
console.log(ReactDOMServer.renderToStaticMarkup(React.createElement(TopicList)));

//A6
function Button({ label }) {
  return React.createElement('button', { className: 'btn' }, label);
}
function App() {
  return React.createElement(
    'div',
    { className: 'app' },
    React.createElement('h1', null, 'My App'),
    React.createElement(Button, { label: 'Click me' })
  );
}
console.log(ReactDOMServer.renderToStaticMarkup(React.createElement(App)));

//A7
const A7 = React.createElement('div', { style: { padding: '10px', borderRadius: '8px' } }, 'Inline styled box');
console.log(ReactDOMServer.renderToStaticMarkup(A7));

//A8
function Info() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement('h2', null, 'Title'),
    React.createElement('p', null, 'Description text here.')
  );
}
console.log(ReactDOMServer.renderToStaticMarkup(React.createElement(Info)));
