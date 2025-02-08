import React, { useState, useEffect, useRef } from 'react';
import Sidebar from '../../components/ExploreComponents/sidebar';
import Card from '../../components/ExploreComponents/card';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '700'], // Specify the weights you need
  subsets: ['latin'], // Specify the subsets you need
});


const DiscoverPage = () => {
    const [recentCards, setRecentCards] = useState(Array.from({ length: 24 }, (_, i) => `Recent Card ${i + 1}`));
    const [forYouCards, setForYouCards] = useState(Array.from({ length: 7 }, (_, i) => `Profile Card ${i + 1}`));
    const mainContainerRef = useRef(null);
    const forYouContainerRef = useRef(null);

    // Function to load more cards for Recent section
    const loadMoreRecentCards = () => {
        setRecentCards(prevCards => [
            ...prevCards,
            ...Array.from({ length: 10 }, (_, i) => `Recent Card ${prevCards.length + i + 1}`)
        ]);
    };

    // Function to load more cards for For You section
    const loadMoreForYouCards = () => {
        setForYouCards(prevCards => [
            ...prevCards,
            ...Array.from({ length: 7 }, (_, i) => `Profile Card ${prevCards.length + i + 1}`)
        ]);
    };

    // Infinite scroll effect for Recent section
    useEffect(() => {
        const handleScroll = () => {
            if (mainContainerRef.current) {
                const { scrollTop, scrollHeight, clientHeight } = mainContainerRef.current;
                if (scrollTop + clientHeight >= scrollHeight) {
                    loadMoreRecentCards();
                }
            }
        };

        const recentContainer = mainContainerRef.current;
        if (recentContainer) {
            recentContainer.addEventListener('scroll', handleScroll);
        }
        return () => {
            if (recentContainer) {
                recentContainer.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    // Infinite scroll effect for For You section
    useEffect(() => {
        const handleScroll = () => {
            if (forYouContainerRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = forYouContainerRef.current;
                if (scrollLeft + clientWidth >= scrollWidth) {
                    loadMoreForYouCards();
                }
            }
        };

        const forYouContainer = forYouContainerRef.current;
        if (forYouContainer) {
            forYouContainer.addEventListener('scroll', handleScroll);
        }
        return () => {
            if (forYouContainer) {
                forYouContainer.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    // Inline styles for the main content area
    const mainContentStyles = {
        flex: 1,
        padding: '20px',
        paddingTop: '3vh',
        paddingLeft: '8vh',
        backgroundColor: '#333333',
        height: '100vh',
        overflowY: 'auto',
        marginLeft: '250px', // Add margin to account for the sidebar width
        scrollbarWidth: 'none', // Hide scrollbar for Firefox
        msOverflowStyle: 'none', // Hide scrollbar for Internet Explorer and Edge
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
        color: '#FFFFFF',
        marginBottom: '20px',
    };

    const forYouCardsContainer = {
        display: 'flex',
        overflowX: 'auto',
        gap: '20px',
        scrollbarWidth: 'none', // Hide scrollbar for Firefox
        msOverflowStyle: 'none', // Hide scrollbar for Internet Explorer and Edge
    };

    const recentContainer = {
        marginBottom: '40px',
    };

    const recentStyles = {
        fontSize: '2rem',
        color: '#FFFFFF',
        marginBottom: '20px',
    };

    const recentCardsContainer = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '20px',
        
    };

    return (
        <div style={containerStyles}>
            {/* Include the Sidebar component */}
            <div style={sideBarStyles}>
                <Sidebar />
            </div>

            {/* Main content area */}
            <main style={mainContentStyles} ref={mainContainerRef} className="hide-scrollbar">
                <div style={forYouContainer}>
                    <div className={roboto.className} style={forYouStyles}>For You</div>
                    <div style={forYouCardsContainer} ref={forYouContainerRef} className="hide-scrollbar">
                        {forYouCards.map((card, index) => (
                            <Card key={index} href={`/profile/${index + 1}`} imageSrc="/ozzy.jpg" altText={card} />
                        ))}
                    </div>
                </div>
                <div style={recentContainer} >
                    <div className={roboto.className} style={recentStyles}>Recent</div>
                    <div style={recentCardsContainer}>
                        {recentCards.map((card, index) => (
                            <Card key={index} href={`/recent/${index + 1}`} imageSrc="/ozzy.jpg" altText={card} />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default DiscoverPage;