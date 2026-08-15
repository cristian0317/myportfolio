import React from 'react';
import Home from './pages/Home';
import { LanguageProvider } from './context/LanguageContext';
import './styles/globals.css';

function App() {
  return (
    <LanguageProvider>
      <div className="App selection:bg-blue-500/30">
        <Home />
      </div>
    </LanguageProvider>
  );
}

export default App;
