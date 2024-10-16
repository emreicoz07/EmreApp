import React from 'react';
import Navbar from './components/Navbar'; // Assume Navbar is already defined

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Properly indented */}
      <div className="content">
        <h1>Welcome to My Website</h1>
        <p>This is a simple page with a navigation bar.</p>
      </div>
    </div>
  );
}

export default App;
