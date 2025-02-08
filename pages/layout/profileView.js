import React from 'react';
import Sidebar from '../../components/ExploreComponents/sidebar';

const ProfileView = () => {

    const [isEditing, setIsEditing] = React.useState(false);
    
    const [name, setName] = React.useState('Your Band Name');

    const NameEdit = () => {
        return (
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold">John Doe</h1>
            <button 
              className="p-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-100"
              onClick={() => console.log('Edit clicked')}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                <path d="m15 5 4 4"/>
              </svg>
            </button>
          </div>
        );
    }

    const handleNameChange = (newName) => {
        setName(newName);
    };

    const [profileDescription, setProfileDescription] = React.useState('Professional musician with over 10 years of experience. Specializing in classical piano and contemporary compositions.');

    const handleDescriptionChange = (newDescription) => {
        setDescription(newDescription);
    };

    const containerStyles ={
        display: 'flex'
    }

    const sideBarStyles = {
        display: 'block',
    };

    const mainContentStyles = {
        display: 'flex',
        gap: '24px',
        flex: 1,
        marginLeft: '50px', // Add margin to account for the sidebar width
        scrollbarWidth: 'none', // Hide scrollbar for Firefox
        msOverflowStyle: 'none',
        padding: '20px',
        paddingTop: '3vh',
        paddingLeft: '8vh',
        backgroundColor: '#333333',
        height: '100vh',
        overflowY: 'auto'
    };

    // Profile section styles
    const profileSection = {
        flex: 1,
        display: 'flex',
        gap: '24px'
    };

    const profilePic = {
        width: '128px',
        height: '128px',
        borderRadius: '50%',
        overflow: 'hidden',
        flexShrink: 0
    };

    // Content styles
    const content = {
        flex: 1
    };

    const header = {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '16px'
    };

    const descriptionStyle = {
        color: 'white'
    };

    const button = {
        backgroundColor: '#2563eb',
        color: 'white',
        padding: '8px 16px',
        borderRadius: '4px',
        border: 'none',
        cursor: 'pointer'
    };

    const ButtonContainer = {
        display: 'flex',
        gap: '8px',
        margin: '8px'
    };

    // Footer styles
    const divider = {
        borderTop: '1px solid #e5e7eb',
        margin: '24px 0'
    };

    const tabs = {
        display: 'flex',
        gap: '24px'
    };

    const tab = {
        color: 'white',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: 0
    };

  return (
    <div style={containerStyles}>
        {/* Include the Sidebar component */}
        <div style={sideBarStyles}>
            <Sidebar />
        </div>
        <div style={mainContentStyles}>
            <div style={content}>
                {/* Profile section */}
                <div style={profileSection}>
                    <div style={profilePic}>
                        <img 
                            src="/api/placeholder/128/128" 
                            alt="Profile picture"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>

                    {/* Info section */}
                    <div style={content}>
                        <div style={header}>
                            <div>
                                <h1 style={{ fontSize: '24px', marginBottom: '8px', color: 'white' }}>
                                    {isEditing ? (
                                        <input 
                                            type="text" 
                                            value={name} 
                                            onChange={(e) => handleNameChange(e.target.value)} 
                                            style={{ 
                                                background: 'transparent', 
                                                border: 'none', 
                                                color: 'white', 
                                                fontSize: '24px', 
                                                marginBottom: '8px' 
                                            }} 
                                        />
                                    ) : (
                                        <>
                                            {name}
                                        </>
                                    )}
                                </h1>
                                {isEditing ? (
                                    <textarea 
                                        value={profileDescription} 
                                        onChange={(e) => handleDescriptionChange(e.target.value)} 
                                        style={{ 
                                            background: 'transparent', 
                                            border: 'none', 
                                            color: 'white', 
                                            width: '100%', 
                                            height: '100px' 
                                        }} 
                                    />
                                ) : (
                                    <p style={descriptionStyle}>{profileDescription}</p>
                                )}
                            </div>
                            <div style={ButtonContainer}>
                                <button style={button} onClick={() => setIsEditing(!isEditing)}>
                                    {isEditing ? '✔️' : '✏️'}
                                </button>
                            </div>
                            <div>
                                <p style={descriptionStyle}>Check out my music:</p>
                            </div>
                            <div style={{ marginLeft: 'auto' }}>
                                <button style={button} onClick={() => alert('Booking functionality not implemented yet')}>
                                    Book Now
                                </button>
                            </div>
    
                        </div>
                    </div>
                    </div>

                    <div style={divider} />

                    {/* Tabs */}
                <div style={tabs}>
                    <button style={tab}>Top Songs</button>
                    <button style={tab}>Reviews</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ProfileView;