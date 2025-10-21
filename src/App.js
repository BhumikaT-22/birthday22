import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import PhotoAlbum from './components/PhotoAlbum';
import BirthdayCard from './components/BirthdayCard';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [pinVerified, setPinVerified] = useState(false);

  const handlePinSuccess = () => {
    setPinVerified(true);
    setCurrentView('album');
  };

  const handleViewCard = () => {
    setCurrentView('card');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
  };

  return (
    <div className="App">
      {currentView === 'home' && (
        <Home 
          onPinSuccess={handlePinSuccess}
          onViewCard={handleViewCard}
        />
      )}
      {currentView === 'album' && pinVerified && (
        <PhotoAlbum onBack={handleBackToHome} />
      )}
      {currentView === 'card' && (
        <BirthdayCard onBack={handleBackToHome} />
      )}
    </div>
  );
}

export default App;