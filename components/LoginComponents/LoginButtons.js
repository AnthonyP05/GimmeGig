import { useState } from 'react';

export default function LoginButtons() {
  const [selectedButton, setSelectedButton] = useState('musician');

  const musicianButtonStyle = {
    backgroundColor: selectedButton === 'musician' ? '#9f7aea' : '#e2e8f0',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '0.25rem',
    color: selectedButton === 'musician' ? '#fff' : '#1a1a1a',
    cursor: 'pointer',
    fontWeight: 'bold',
  };

  const eventButtonStyle = {
    backgroundColor: selectedButton === 'event' ? '#9f7aea' : '#e2e8f0',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '0.25rem',
    color: selectedButton === 'event' ? '#fff' : '#1a1a1a',
    cursor: 'pointer',
    fontWeight: 'bold',
  };

  const buttonContainerStyle = {
    display: 'flex',
    gap: '2.5rem',
    justifyContent: 'center', // Center the buttons horizontally
    width: '100%', // Ensure the container takes the full width
  };

  return (
    <div style={buttonContainerStyle}>
      <button
        style={musicianButtonStyle}
        onClick={() => setSelectedButton('musician')}
      >
        Musician
      </button>
      <button
        style={eventButtonStyle}
        onClick={() => setSelectedButton('event')}
      >
        Event Holder
      </button>
    </div>
  );
}