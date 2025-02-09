import { useState } from 'react';
import SidebarCard from './sidebarCard';
import Link from 'next/link';
import { Russo_One } from 'next/font/google';

const russo = Russo_One({
  weight: ['400'], // Specify the weights you need
  subsets: ['latin'], // Specify the subsets you need
});

const Sidebar = () => {
    const sidebar = {
        width: '10vh',
        height: '100vh',
        backgroundColor: '#6934DF',  // Purple background
        color: 'white',
        padding: '10px 0',
        boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
        position: 'fixed',
        top: 0,
        left: 0,
        overflowY: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between', // Ensure the logout button is at the bottom
    };

    const titleContainer = {
        textAlign: 'center',
        marginBottom: '20px',
        marginTop: '20px', // Move the title slightly lower
    };

    const titles = {
        fontSize: '2rem',
        fontWeight: 'bold',
        margin: 0,
        
    };

    const boxContainer = {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        marginTop: '20px',
        
    };

    const logoutStyles = {
        color: 'white',
        textDecoration: 'none',
        fontSize: '1rem',
        cursor: 'pointer',
        marginBottom: '20px', // Add margin to the bottom
    };

    const verticalLine = {
        width: '0.3vh',
        height: '38vh',
        backgroundColor: '#533588',
        margin: '20px 0',
        
    };

    return (
        <div style={sidebar}>
            <div>
                <div style={titleContainer}>
                    <h2 className={russo.className} style={titles}>GG</h2>
                </div>
                <div className={russo.className} style={boxContainer}>
                    <SidebarCard href="../../profilepage" imageSrc="/money-41-256.png" altText="P" title="Finances" />
                    <SidebarCard href="../../discoverpage" imageSrc="/ozzy.jpg" altText="G" title="Gigs/Artists" />
                    <SidebarCard href="#" imageSrc="/profile-icon-png-889.png" altText="$" title="Profile" />
                </div>
            </div>
            <div style={verticalLine}></div>
            <Link href="/api/auth/logout">
                <div className={russo.className} style={logoutStyles}>Logout</div>
            </Link>
        </div>
    );
};

export default Sidebar;
