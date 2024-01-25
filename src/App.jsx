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
        setGigs(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app-container">
      <h1>Upcoming Gigs</h1>
      {gigs.map(gig => (
        <Gig key={gig.event_id} {...gig} />
      ))}
    </div>
  );
};

export default App;
