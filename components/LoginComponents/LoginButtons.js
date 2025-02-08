import { useState } from 'react';
import { useRouter } from 'next/router';

export default function LoginButtons() {
  const [selectedButton, setSelectedButton] = useState('musician');
  const router = useRouter();

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
    gap: '3.5rem',
    justifyContent: 'center', // Center the buttons horizontally
    width: '100%', // Ensure the container takes the full width
  };

  const handleButtonClick = (button) => {
    setSelectedButton(button);
    router.push('/api/auth/login');
    // Enter into database login type
  };

  return (
    <div style={buttonContainerStyle}>
      <button
        style={musicianButtonStyle}
        onClick={() => handleButtonClick('musician')}
      >
        Musician
      </button>
      <button
        style={eventButtonStyle}
        onClick={() => handleButtonClick('event')}
      >
        Event Holder
      </button>
    </div>
  );
}