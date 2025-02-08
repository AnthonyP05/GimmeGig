import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/sidebar';

const DiscoverPage = () => {
    const [exploreCards, setExploreCards] = useState(Array.from({ length: 10 }, (_, i) => `Explore Card ${i + 1}`));
    const [forYouCards, setForYouCards] = useState(Array.from({ length: 6 }, (_, i) => `Profile Card ${i + 1}`));

    // Function to load more cards
    const loadMoreCards = () => {
        setExploreCards(prevCards => [
            ...prevCards,
            ...Array.from({ length: 10 }, (_, i) => `Explore Card ${prevCards.length + i + 1}`)
        ]);
    };

    // Infinite scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
                loadMoreCards();
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
    };

    // Inline styles for the container (to hold Sidebar and main content)
    const containerStyles = {
        display: 'flex',
    };

    const forYouContainer = {
        marginBottom: '40px',
        position: 'relative',
    };

    const forYouStyles = {
        fontSize: '2rem',
        color: '#2c3e50',
        marginBottom: '20px',
    };

    const forYouCardsContainer = {
        display: 'flex',
        overflowX: 'auto',
        gap: '20px',
    };

    const exploreContainer = {
        marginBottom: '40px',
    };

    const exploreStyles = {
        fontSize: '2rem',
        color: '#2c3e50',
        marginBottom: '20px',
    };

    const exploreCardsContainer = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '20px',
        
    };

    const cardStyles = {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        minWidth: '200px',
        minHeight: '150px',
        transition: 'transform 0.3s ease', // Add transition for smooth enlargement
    };

    const cardHoverStyles = {
        transform: 'scale(1.05)', // Slightly enlarge the card on hover
    };

    return (
        <div style={containerStyles}>
            {/* Include the Sidebar component */}
            <div style={sideBarStyles}>
                <Sidebar />
            </div>

            {/* Main content area */}
            <main style={mainContentStyles}>
                <div style={forYouContainer}>
                    <div style={forYouStyles}>For You</div>
                    <div style={forYouCardsContainer}>
                        {forYouCards.map((card, index) => (
                            <div key={index} style={cardStyles} className="card">
                                {card}
                            </div>
                        ))}
                    </div>
                </div>
                <div style={exploreContainer}>
                    <div style={exploreStyles}>Explore</div>
                    <div style={exploreCardsContainer}>
                        {exploreCards.map((card, index) => (
                            <div key={index} style={cardStyles} className="card">
                                {card}
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default DiscoverPage;