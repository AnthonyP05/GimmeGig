import React from 'react';
import ProfileCard from '../../components/profileCard';

const mainContentStyles = {
    flex: 1,
    padding: '20px',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4jcT56DGGyLZN5ljG_1g2U2HN7g9X3YLTmg&s")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
};

const containerStyles = {
    display: 'flex',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
};

const cardStyles = {
    backgroundColor: '#e0e0e0', // Grayer background
    padding: '5px', // Increased padding for wider card
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '500px', // Increased max width for wider card
    width: '100%',
    textAlign: 'center',
};

const ProfileInfo = () => {
    return (
        <div style={containerStyles}>
            <div style={mainContentStyles}>
                <div style={cardStyles}>
                    <ProfileCard />
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;