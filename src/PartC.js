import React from 'react';

// Part C — JSX Practice solutions (Easy / Medium / Hard)
// Easy exercises
const titleElement = <h1>Welcome to Engineering College</h1>; // Exercise 1

const firstName = 'Nurlan'; // Exercise 2
const lastName = 'Shaidullaev';
const nameParagraph = <p>Hello, {firstName} {lastName}!</p>;

function HeaderFixed() {
  return (
    <div className="header">
      <h1 onClick={() => alert('Hi')}>Click me</h1>
    </div>
  );
}

function GreetingFixed() {
  return (
    <>
      <h1>Hello</h1>
      <p>Welcome to the course</p>
    </>
  );
}

function AvatarFixed() {
  return (
    <div>
      <img src="/avatar.png" alt="avatar" />
      <br />
      <span>Student</span>
    </div>
  );
}

function ClickerFixed() {
  function handleClick() {
    console.log('Clicked!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

function ProfileCard(props) {
  return (
    <div className="profilecard">
      <h3>{props.name}</h3>
    </div>
  );
}

function TitleWithComment() {
  return (
    <div>
      {/* Main title of the page. */}
      <h1>JSX Practice</h1>
    </div>
  );
}

// Medium exercises
const elementCE = React.createElement(
  'div',
  { className: 'card' },
  React.createElement('h2', null, 'Profile'),
  React.createElement('p', null, 'Welcome to your profile page.')
); // Exercise 6

function StudentCard(props) {
  return (
    <div className="student-card">
      <h3>{props.name}</h3>
      <p>Group: {props.group}</p>
    </div>
  );
}

function CourseInfo({ title, credits }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>Credits: {credits}</p>
    </div>
  );
}

function Status({ isOnline }) {
  return <p>{isOnline ? 'Online' : 'Offline'}</p>;
}

function Notification({ count }) {
  return (
    <div>
      <h2>Notifications</h2>
      {count > 0 && <p>You have {count} new notifications</p>}
    </div>
  );
}

function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>{task.title}</li>
      ))}
    </ul>
  );
}

function SelectButton() {
  function handleSelect(id) {
    console.log('Selected id:', id);
  }

  return <button onClick={() => handleSelect(5)}>Select student</button>;
}

function WarningBox() {
  return (
    <div style={{ backgroundColor: 'yellow', padding: '10px' }}>
      Warning!
    </div>
  );
}

function InfoFragment() {
  return (
    <>
      <h2>About the course</h2>
      <p>This course teaches React basics.</p>
    </>
  );
}

function Card({ title, children }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div className="card-body">{children}</div>
    </div>
  );
}

// Exercise 18 — spread props
const user = { name: 'Aida', age: 19, group: 'FE-01' };

function UserProfile({ name, age, group }) {
  return (
    <div>
      <h4>{name}</h4>
      <p>Age: {age}</p>
      <p>Group: {group}</p>
    </div>
  );
}

function Access({ isAdmin }) {
  return <div>{isAdmin ? <p>Welcome, admin!</p> : <p>Access denied</p>}</div>;
}

function NameInput() {
  const [name, setName] = React.useState('');
  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} />
      <p>Hello, {name}.</p>
    </div>
  );
}

function Dashboard({ user, notifications }) {
  return (
    <div>
      <h1>{user.name}'s Dashboard</h1>
      {notifications.length > 0 && <p>You have {notifications.length} new notifications.</p>}
    </div>
  );
}

// Exercise 25 — predict rendered text
const a = 2;
const b = 3;
function ExamplePredictions() {
  return (
    <div>
      <p>{a + b}</p>
      <p>{a > b ? 'a is bigger' : 'b is bigger or equal'}</p>
      <p>{false && 'This text'}</p>
    </div>
  );
}

// Hard exercises
// Exercise 12 – mapping without JSX
const students = ['Ali', 'Aida', 'Nurlan'];
function StudentListCE() {
  return React.createElement(
    'ul',
    null,
    students.map((name, index) => React.createElement('li', { key: index }, name))
  );
}

function HtmlBlockFixed({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

export default function PartC({ onNavigate }) {
  const tasks = [
    { id: 1, title: 'Task A' },
    { id: 2, title: 'Task B' },
  ];
  const notifications = [1, 2];
  const sampleHtml = '<em>Injected HTML</em>';

  return (
    <div>
      <h2>Part C</h2>
      <p>JSX Practice — Easy / Medium / Hard</p>
      <div style={{ marginTop: 12 }}>
        <button onClick={() => onNavigate('home')}>Home</button>{' '}
        <button onClick={() => onNavigate('parta')}>Go to Part A</button>{' '}
        <button onClick={() => onNavigate('partb')}>Go to Part B</button>
      </div>

      <hr />
      <div style={{ paddingLeft: 8 }}>
        <h3>Easy</h3>
        <div><strong>1:</strong> {titleElement}</div>
        <div><strong>2:</strong> {nameParagraph}</div>
        <div><strong>3:</strong> <HeaderFixed /></div>
        <div><strong>4:</strong> <GreetingFixed /></div>
        <div><strong>5:</strong> <AvatarFixed /></div>
        <div><strong>13:</strong> <ClickerFixed /></div>
        <div><strong>22:</strong> <ProfileCard name="Nurlan" /></div>
        <div><strong>23:</strong> <TitleWithComment /></div>

        <h3>Medium</h3>
        <div><strong>6 (createElement):</strong> {elementCE}</div>
        <div><strong>7:</strong> <StudentCard name="Ali" group="G1" /></div>
        <div><strong>8:</strong> <CourseInfo title="React 101" credits={3} /></div>
        <div><strong>9:</strong> <Status isOnline={true} /></div>
        <div><strong>10:</strong> <Notification count={2} /></div>
        <div><strong>11:</strong> <TaskList tasks={tasks} /></div>
        <div><strong>14:</strong> <SelectButton /></div>
        <div><strong>15:</strong> <WarningBox /></div>
        <div><strong>16:</strong> <InfoFragment /></div>
        <div><strong>17:</strong>
          <Card title="JSX Topic">
            <p>We are learning JSX today.</p>
          </Card>
        </div>
        <div><strong>18 (spread):</strong> <UserProfile {...user} />{' '}(explicit: <UserProfile name={user.name} age={user.age} group={user.group} />)</div>
        <div><strong>19:</strong> <Access isAdmin={false} /></div>
        <div><strong>20:</strong> <NameInput /></div>
        <div><strong>24:</strong> <Dashboard user={{ name: 'Nurlan' }} notifications={notifications} /></div>
        <div><strong>25 (prediction):</strong> <ExamplePredictions /></div>

        <h3>Hard</h3>
        <div><strong>12 (createElement mapping):</strong> <StudentListCE /></div>
        <div><strong>21 (dangerous HTML):</strong> <HtmlBlockFixed html={sampleHtml} /></div>
      </div>
    </div>
  );
}
