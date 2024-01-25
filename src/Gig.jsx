// Gig.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Gig.css';

const Gig = ({ image_url, band_name, description, time, location, favourited, onLike }) => {
  return (
    <div className={`gig-container ${favourited ? 'favourited' : ''}`}>
      <img className="band-image" src={image_url} alt={band_name} />
      <div className="details-container">
        <h3 className="band-name">{band_name}</h3>
        <p className="event-description">{description}</p>
        <p className="event-time">{time}</p>
        <p className="event-location">{location}</p>
        <button className="like-button" onClick={onLike}>
          {favourited ? '♥ Liked' : '♡ Like'}
        </button>
      </div>
    </div>
  );
};

Gig.propTypes = {
  band_name: PropTypes.string.isRequired,
  image_url: PropTypes.string,
  description: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  favourited: PropTypes.bool.isRequired,
  onLike: PropTypes.func.isRequired,
};

export default Gig;


