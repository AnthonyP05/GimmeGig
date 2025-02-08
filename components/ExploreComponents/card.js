import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Card = ({ href, imageSrc, altText }) => {
    const cardStyles = {
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        minWidth: '200px',
        minHeight: '150px',
        transition: 'transform 0.3s ease', // Add transition for smooth enlargement
        cursor: 'pointer', // Add cursor pointer for clickable effect
        marginBottom: '10px',
        overflow: 'hidden', // Ensure the image fits within the card
        position: 'relative', // Required for the Image component to fill the card
    };

    const imageStyles = {
        objectFit: 'cover',
    };

    return (
        <Link href={href}>
            <div style={cardStyles} className="card">
                <Image src={imageSrc} alt={altText} layout="fill" style={imageStyles} />
            </div>
        </Link>
    );
};

export default Card;
