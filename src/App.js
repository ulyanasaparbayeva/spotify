import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import SidebarSecondary from './components/SidebarSecondary';
import Main from './components/main/Main';
import ProductDetails from './components/ProductDetails';
import Liked from './components/Liked';
import Audio from './components/Audio';

function App() {
  const [selectedSong, setSelectedSong] = useState(null);

  const handleSongSelect = (song) => {
    setSelectedSong(song);
  };

  return (
    <div className="App">
      <div className="Apps">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/ProductDetails/:playlistId" element={<ProductDetails />} />
          <Route path="/liked" element={<Liked />} />
        </Routes>
        <SidebarSecondary />
      </div>
      {/* Always render the Audio component */}
      <Audio selectedSong={selectedSong} />
    </div>
  );
}

export default App;
