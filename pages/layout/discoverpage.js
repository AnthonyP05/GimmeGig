import React from 'react';
import Sidebar from '../../components/sidebar';

const DiscoverPage = () => {
 // Inline styles for the main content area
    const mainContentStyles = {
        flex: 1,
        padding: '20px',
        backgroundColor: '#f4f4f4',
        height: '100vh',
        overflowY: 'auto',
    };

    // Inline styles for the container (to hold Sidebar and main content)
    const containerStyles = {
        display: 'flex',
    };

    return (
        <div style={containerStyles}>
        {/* Include the Sidebar component */}
        <Sidebar />

        {/* Main content area */}
        <main style={mainContentStyles}>
            <h1>Discover Page</h1>
            <p>Welcome to the Discover Page!</p>
            <p>Here you can explore and find new content.</p>
        </main>
        </div>
  );
};

export default DiscoverPage;