import React, { useState } from 'react';
import PartA from './PartA.js';
import PartB from './PartB.js';
import PartC from './PartC.js';

function App() {
  const [page, setPage] = useState('home');

  function navigate(to) {
    setPage(to);
  }

  if (page === 'parta') return <PartA onNavigate={navigate} />;
  if (page === 'partb') return <PartB onNavigate={navigate} />;
  if (page === 'partc') return <PartC onNavigate={navigate} />;

  return (
    <div>
      <h1>Welcome — choose a part</h1>
      <div style={{ marginTop: 12 }}>
        <button onClick={() => navigate('parta')}>Part A</button>{' '}
        <button onClick={() => navigate('partb')}>Part B</button>{' '}
        <button onClick={() => navigate('partc')}>Part C</button>
      </div>
    </div>
  );
}

export default App;
