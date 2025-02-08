import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import { Russo_One } from 'next/font/google';

const russo = Russo_One({
  weight: ['400'], // Specify the weights you need
  subsets: ['latin'], // Specify the subsets you need
});


const Card = ({ href, imageSrc, altText, line1, column1, column2 }) => {
    const cardStyles = {
        backgroundColor: '#d9d9d9',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        minWidth: '200px',
        minHeight: '200px', // Increase height to accommodate text
        transition: 'transform 0.3s ease', // Add transition for smooth enlargement
        cursor: 'pointer', // Add cursor pointer for clickable effect
        marginBottom: '10px',
        overflow: 'hidden', // Ensure the image fits within the card
        position: 'relative', // Required for the Image component to fill the card
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    };

    const imageContainerStyles = {
        flex: '1 0 auto',
        position: 'relative',
    };

    const imageStyles = {
        padding: '5px',
        borderRadius: '15px',
    };

    const textContainerStyles = {
        padding: '2px',
        textAlign: 'center',
    };

    const textStyles = {
        margin: '2px 0',
        textDecoration: 'none',
        color: 'inherit', // Ensure the text color is inherited and not purple
    };

    const columnContainerStyles = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '5px',
    };

    const columnStyles = {
        flex: '1',
        textAlign: 'center',
        textDecoration: 'none',
        color: 'inherit', // Ensure the text color is inherited and not purple
    };

    const dividerStyles = {
        width: '1px',
        height: '100%',
        backgroundColor: '#fff',
        margin: '0 3px',
    };

    return (
        <Link href={href} style={textStyles}>
            <div style={cardStyles} className="card">
                <div style={imageContainerStyles}>
                    <Image src={imageSrc} alt={altText} style={imageStyles} fill />
                </div>
                <div style={textContainerStyles}>
                        <div  className={russo.className} style={textStyles}>{line1}</div>
                        <div style={columnContainerStyles}>
                            <div className={russo.className} style={columnStyles}>{column1}</div>
                            <div style={dividerStyles}></div>
                            <div className={russo.className} style={columnStyles}>{column2}</div>
                        </div>
                </div>
            </div>
        </Link>
    );
};
// Pleaseworkfor20

export default Card;
