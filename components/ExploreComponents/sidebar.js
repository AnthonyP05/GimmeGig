import { useState } from 'react';
import SidebarCard from './sidebarCard';
import Link from 'next/link';

const Sidebar = () => {
    const [hoveredLink, setHoveredLink] = useState(null);

    const sidebar = {
        width: '12vh',
        height: '200vh',
        backgroundColor: '#2c3e50',
        color: 'white',
        padding: '20px',
        boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    };

    const titleContainer = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        textAlign: 'center',
    };

    const titles = {
        fontSize: '1.5rem',
        marginBottom: '20px',
        marginTop: '0px',
        textAlign: 'center', // Align the title to the left
    };

    const boxContainer = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: 'calc(45vh - 100px)', // Adjust height to fit within the sidebar
    };

    const logoutStyles = {
        color: 'white',
        textDecoration: 'none',
        fontSize: '1.1rem',
        textAlign: 'center',
        cursor: 'pointer',
        marginTop: '20px',
    };

    return (
        <div style={sidebar}>
            <div>
                <div style={titleContainer}>
                    <h2 style={titles}>GG</h2>
                </div>
                <div style={boxContainer}>
                    <SidebarCard href="/link1" imageSrc="/money-41-256.png" altText="Finances" title="Finances" />
                    <SidebarCard href="/link2" imageSrc="/ozzy.jpg" altText="Gigs/Artists" title="Gigs/Artists" />
                    <SidebarCard href="/link3" imageSrc="/profile-icon-png-889.png" altText="Profile" title="Profile" />
                </div>
            </div>
            <Link href="/logout">
                <div style={logoutStyles}>Logout</div>
            </Link>
        </div>
    );
};

export default Sidebar;