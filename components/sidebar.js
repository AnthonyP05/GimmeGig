import Link from 'next/link';
import { useState } from 'react';

const Sidebar = () => {
    const [hoveredLink, setHoveredLink] = useState(null);

    const sidebar = {
        width: '250px',
        height: '100vh',
        backgroundColor: '#2c3e50',
        color: 'white',
        padding: '20px',
        boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        overflowY: 'auto',
    };

    const titleContainer = {
      position: 'fixed',
      top: '1vh',
      left: '1vh'

    }

    const titles = {
      fontSize: '1.5rem',
      marginBottom: '20px',
      marginTop: '0px',
      textAlign: 'left', // Align the title to the left
      paddingLeft: '0px', // Add some padding from the left edge
    };
    
    const menu = {
        listStyle: 'none',
        padding: '0',
    };
    
    const menuItem = {
        margin: '15px 0',
    };
    
    const link = {
        color: 'white',
        textDecoration: 'none',
        fontSize: '1.1rem',
        transition: 'color 0.3s ease',
        
    };
    
    const linkHover = {
        color: '#1abc9c',
    };

    const boxContainer = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: 'calc(100vh - 100px)', // Adjust height to fit within the sidebar
        marginTop: '20px',
    };

    const boxWrapper = {
        textAlign: 'center',
    };

    const box = {
        backgroundColor: '#34495e',
        padding: '50px',
        borderRadius: '5px',
    };

    const boxTitle = {
        fontSize: '1rem',
        marginBottom: '10px',
    };
    
    return (
        <div style={sidebar}>
          <div style={titleContainer}>
            <h2 style={titles}>GimmeGig</h2>
          </div>
            <div style={boxContainer}>
                <div style={boxWrapper}>
                    <div style={boxTitle}>Finances</div>
                    <div style={box}>
                        <Link href="/link1" style={link}>Link 1</Link>
                    </div>
                </div>
                <div style={boxWrapper}>
                    <div style={boxTitle}>Gigs/Artists</div>
                    <div style={box}>
                        <Link href="/link2" style={link}>Link 2</Link>
                    </div>
                </div>
                <div style={boxWrapper}>
                    <div style={boxTitle}>Profile</div>
                    <div style={box}>
                        <Link href="/link3" style={link}>Link 3</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;