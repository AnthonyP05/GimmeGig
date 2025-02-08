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

    const titles = {
        fontSize: '1.5rem',
        marginBottom: '20px',
        textAlign: 'center',
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
    


  return (
    <div style={sidebar}>
      <h2 style={titles}>Menu</h2>
      <ul style={menu}>
        <li style={menuItem}>
            <Link
                href="/"
                style={{
                ...link,
                ...(hoveredLink === 'home' && linkHover),
                }}
                onMouseEnter={() => setHoveredLink('home')}
                onMouseLeave={() => setHoveredLink(null)}
            >
                Home
            </Link>
          </li>
        <li style={menuItem}>
            <Link
                href="/layout/discoverpage"
                style={{
                ...link,
                ...(hoveredLink === 'discover' && linkHover),
                }}
                onMouseEnter={() => setHoveredLink('discover')}
                onMouseLeave={() => setHoveredLink(null)}
            >
                Discover
            </Link>        
          </li>
        <li style={menuItem}>
            <Link
                href="/about"
                style={{
                ...link,
                ...(hoveredLink === 'about' && linkHover),
                }}
                onMouseEnter={() => setHoveredLink('about')}
                onMouseLeave={() => setHoveredLink(null)}
            >
                About
            </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;