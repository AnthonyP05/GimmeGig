import React, { useState, useEffect, useRef } from 'react';
import Sidebar from '../components/ExploreComponents/sidebar';
import Card from '../components/ExploreComponents/card';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '700'], // Specify the weights you need
  subsets: ['latin'], // Specify the subsets you need
});

const BookingPage = () => {
    const [forYouCards, setForYouCards] = useState(Array.from({ length: 8 }, (_, i) => `Profile Card ${i + 1}`));
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
        paddingTop: '5vh',
        paddingLeft: '12vh',
        backgroundColor: '#333333',
        height: '100vh',
        overflowY: 'auto',
        marginLeft: '50px', // Add margin to account for the sidebar width
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
        padding: '3vh',
        paddingLeft: '0vh',
    };

    const forYouCardsContainer = {
        display: 'flex',
        overflowX: 'auto',
        gap: '20px',
        scrollbarWidth: 'none', // Hide scrollbar for Firefox
        msOverflowStyle: 'none', // Hide scrollbar for Internet Explorer and Edge
    };

    const siteContainer = {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        flex: 1
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
                    <div className={roboto.className} style={forYouStyles}>Booking Requests</div>
                    <div style={forYouCardsContainer} ref={forYouContainerRef} className="hide-scrollbar">
                        {forYouCards.map((card, index) => (
                            <Card key={index} href={`/profile/${index + 1}`} imageSrc="/venue.jpg" altText={card} line1={"Cool Venue"} column1={"$60"} column2={"Rating ☆"}/>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default BookingPage;