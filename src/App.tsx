import React from 'react';
import './App.css';
import Home from './pages/Home';
import SearchProvider from './providers/SearchProvider';

function App() {
  return (
    <div className="App">
      <SearchProvider>
        <Home />
      </SearchProvider>
    </div>
  );
}

export default App;
