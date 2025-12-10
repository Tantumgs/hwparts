import React from 'react';

// Fixed examples for Exercises B1 - B10
function Header() {
  return (
    <div className="header">
      <h1 onClick={() => alert('Hello')}>Welcome</h1>
    </div>
  );
}

function BadComponentFixed() {
  return (
    <>
      <h1>Title</h1>
      <p>Subtitle</p>
    </>
  );
}

function ImageCard() {
  return (
    <div className="card">
      <img src="/logo.png" alt="logo" />
      <p>Logo of our app</p>
    </div>
  );
}

function Status({ isOnline }) {
  return <div>{isOnline ? <p>User is online</p> : <p>User is offline</p>}</div>;
}

function UserCard(props) {
  return (
    <div className="usercard">
      <h3>{props.name}</h3>
    </div>
  );
}

function LoginForm() {
  return (
    <form>
      <label htmlFor="email" className="label">
        Email
      </label>
      <input id="email" type="email" />
    </form>
  );
}

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={todo.id ?? index}>{todo.text}</li>
      ))}
    </ul>
  );
}

function Box() {
  return (
    <div style={{ backgroundColor: 'red', padding: '10px' }}>
      Warning
    </div>
  );
}

function Counter() {
  function handleClick() {
    // simple example handler
    console.log('clicked');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

function HtmlBlock({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

export default function PartB({ onNavigate }) {
  const todos = [
    { id: 1, text: 'Buy milk' },
    { id: 2, text: 'Walk dog' },
  ];
  const sampleHtml = '<strong>This is bold HTML from a string</strong>';

  return (
    <div>
      <h2>Part B</h2>
      <p>Исправленные примеры JSX (B1–B10)</p>
      <div style={{ marginTop: 12 }}>
        <button onClick={() => onNavigate('home')}>Home</button>{' '}
        <button onClick={() => onNavigate('parta')}>Go to Part A</button>{' '}
        <button onClick={() => onNavigate('partc')}>Go to Part C</button>
      </div>

      <hr />
      <div style={{ paddingLeft: 8 }}>
        <div><strong>B1:</strong> <Header /></div>
        <div><strong>B2:</strong> <BadComponentFixed /></div>
        <div><strong>B3:</strong> <ImageCard /></div>
        <div><strong>B4:</strong> <Status isOnline={true} /></div>
        <div><strong>B5:</strong> <UserCard name="Nurlan" /></div>
        <div><strong>B6:</strong> <LoginForm /></div>
        <div><strong>B7:</strong> <TodoList todos={todos} /></div>
        <div><strong>B8:</strong> <Box /></div>
        <div><strong>B9:</strong> <Counter /></div>
        <div><strong>B10:</strong> <HtmlBlock html={sampleHtml} /></div>
      </div>
    </div>
  );
}
