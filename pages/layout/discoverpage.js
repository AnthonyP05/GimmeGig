import React from 'react';
import Sidebar from '../../components/sidebar';

const DiscoverPage = () => {
    // Inline styles for the main content area
    const mainContentStyles = {
        flex: 1,
        padding: '20px',
        paddingTop: '3vh',
        paddingLeft: '8vh',
        backgroundColor: '#f4f4f4',
        height: '100vh',
        overflowY: 'auto',
        marginLeft: '250px', // Add margin to account for the sidebar width
    };

    const sideBarStyles = {
        display: 'block',
    }

    // Inline styles for the container (to hold Sidebar and main content)
    const containerStyles = {
        display: 'flex',
    };

    const forYouContainer = {
        
    }

    const forYouStyles = {
        fontSize: '2rem',
        color: '#2c3e50',

    };

    const forYouCards = {

    }

    const exploreContainer = {

    }

    const exploreStyles = {
        fontSize: '2rem',
        color: '#2c3e50',
    }

    const exploreCards = {
        
    }

    return (
        <div style={containerStyles}>
            {/* Include the Sidebar component */}
            <div style={sideBarStyles}>
                <Sidebar />
            </div>

            {/* Main content area */}
            <main style={mainContentStyles}>
                <div style={forYouContainer}>
                    <div style={forYouStyles}>Side Title</div>
                </div>
                <div style={exploreContainer}>
                    <div style={exploreStyles}>Side Title</div>
                </div>
            </main>
        </div>
    );
};

export default DiscoverPage;