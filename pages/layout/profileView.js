import React from 'react';
import Sidebar from '../../components/ExploreComponents/sidebar';

const ProfileView = () => {
  // Layout styles

    const containerStyles ={
        display: 'flex'
    }

    const sideBarStyles = {
        display: 'block',
    };

    const layout = {
        display: 'flex',
        gap: '24px',
        flex: 1
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

    const description = {
        color: '#666'
    };

    const button = {
        backgroundColor: '#2563eb',
        color: 'white',
        padding: '8px 16px',
        borderRadius: '4px',
        border: 'none',
        cursor: 'pointer'
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
        color: '#666',
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
        <div style={layout}>
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
                                <h1 style={{ fontSize: '24px', marginBottom: '8px' }}>John Doe</h1>
                                <p style={description}>
                                    Professional musician with over 10 years of experience. 
                                    Specializing in classical piano and contemporary compositions.
                                </p>
                            </div>
                        <button style={button}>Book Me</button>
                        </div>
                    </div>
                </div>

                <div style={divider} />

                {/* Tabs */}
                <div style={tabs}>
                    <button style={tab}>Reviews</button>
                    <button style={tab}>Top Songs</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ProfileView;