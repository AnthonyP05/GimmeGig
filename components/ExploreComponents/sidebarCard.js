import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const SidebarCard = ({ href, imageSrc, altText }) => {
    const cardStyles = {
        backgroundColor: '#3E2F59',
        width: '70px', // Increase width
        height: '70px', // Increase height
        borderRadius: '15px',
        position: 'relative', // Required for the Image component to fill the card
        cursor: 'pointer', // Add cursor pointer for clickable effect
        overflow: 'hidden', // Ensure the image fits within the card
        margin: '12px auto', // Center the card and add margin
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2.0rem', // Enlarge text
        color: 'white', // Text color
    };

    const textStyles = {
        textDecoration: 'none',
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <Link href={href} style={textStyles}>
                <div style={cardStyles} className="card">
                    {altText}
                </div>
            </Link>
        </div>
    );
};

export default SidebarCard;
