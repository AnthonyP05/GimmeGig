import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const SidebarCard = ({ href, imageSrc, altText, title }) => {
    const cardStyles = {
        backgroundColor: '#34495e',
        width: '60px',
        height: '60px',
        borderRadius: '5px',
        position: 'relative', // Required for the Image component to fill the card
        cursor: 'pointer', // Add cursor pointer for clickable effect
        overflow: 'hidden', // Ensure the image fits within the card
        margin: '10px auto', // Center the card and add margin
    };

    const imageStyles = {
        objectFit: 'contain',
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <Link href={href}>
                <div style={cardStyles} className="card">
                    <Image src={imageSrc} alt={altText} layout="fill" style={imageStyles} />
                </div>
            </Link>
        </div>
    );
};

export default SidebarCard;
