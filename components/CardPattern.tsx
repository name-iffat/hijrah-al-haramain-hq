import React from 'react';

/**
 * CardPattern - Renders the second Islamic SVG pattern at Top-Right and Bottom-Right corners
 * of cards with a fading effect towards the center.
 */
const CardPattern: React.FC = () => (
    <>
        {/* Top-Right Corner Pattern */}
        <div
            className="absolute top-0 right-0 w-64 h-64 bg-pattern-islamic-card bg-contain bg-center bg-no-repeat pointer-events-none z-0"
            style={{
                maskImage: 'linear-gradient(to bottom left, black, transparent 70%)',
                WebkitMaskImage: 'linear-gradient(to bottom left, black, transparent 70%)',
                opacity: 1,
                marginRight: '-6rem',
                marginTop: '-4rem',
            }}
        />
        {/* Bottom-Left Corner Pattern */}
        <div
            className="absolute bottom-0 left-0 w-64 h-64 bg-pattern-islamic-card bg-contain bg-center bg-no-repeat pointer-events-none z-0"
            style={{
                maskImage: 'linear-gradient(to top right, black, transparent 70%)',
                WebkitMaskImage: 'linear-gradient(to top right, black, transparent 80%)',
                opacity: 1,
                marginLeft: '-4rem',
                marginBottom: '-6rem',
            }}
        />
    </>
);

export default CardPattern;
