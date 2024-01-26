// App.jsx
import React, { useState, useEffect } from 'react';
import Gig from './Gig';
import './App.css'; 

const App = () => {
  const [gigs, setGigs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://makers-gig-backend.onrender.com/events')
      .then(response => response.json())
      .then(data => {
        setGigs(data.map(gig => ({ ...gig, favourited: false })));
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
        setLoading(false);
      });
  }, []);

  const handleLike = (event_id) => {
    setGigs(prevGigs => {
      const updatedGigs = prevGigs.map(gig => 
        gig.event_id === event_id ? { ...gig, favourited: !gig.favourited } : gig
      );
      return updatedGigs.sort((a, b) => (b.favourited ? 1 : -1));
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app-container">
      <h1>Upcoming Gigs</h1>
      {gigs.map(gig => (
        <Gig key={gig.event_id} {...gig} onLike={() => handleLike(gig.event_id)}
        image_url = "../src/assets/gigs.jpg"
        />
      ))}
    </div>
  );
};

export default App;

