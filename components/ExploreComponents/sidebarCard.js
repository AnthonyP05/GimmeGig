import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const SidebarCard = ({ href, imageSrc, altText, title }) => {
    const cardStyles = {
        backgroundColor: '#3E2F59',  // Slightly darker purple for contrast
        width: '6vh',
        height: '6vh',
        borderRadius: '15%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        overflow: 'hidden',
        margin: '10px 0',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s ease',
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <Link href={href}>
                <div style={cardStyles} className="card">
                    {/* Provide explicit width and height */}
                    <Image src={imageSrc} alt={altText} width={40} height={40} />
                </div>
            </Link>
        </div>
    );
};

export default SidebarCard;
