import React from 'react';

/**
 * SectionPattern - Renders the Islamic SVG pattern at Top-Right and Bottom-Right corners
 * with a fading effect towards the center of the section.
 */
const SectionPattern: React.FC = () => (
    <>
        {/* Top-Right Corner Pattern */}
        <div
            className="absolute top-0 right-0 w-80 h-80 bg-pattern-islamic-card bg-contain bg-center bg-no-repeat pointer-events-none z-0"
            style={{
                maskImage: 'linear-gradient(to bottom left, black, transparent 70%)',
                WebkitMaskImage: 'linear-gradient(to bottom left, black, transparent 80%)',
                opacity: 1,
                marginRight: '-6rem',
                marginTop: '0rem',
            }}
        />
        {/* Bottom-Left Corner Pattern */}
        <div
            className="absolute bottom-5 left-0 w-80 h-80 bg-pattern-islamic-card bg-contain bg-center bg-no-repeat pointer-events-none z-0"
            style={{
                maskImage: 'linear-gradient(to top right, black, transparent 70%)',
                WebkitMaskImage: 'linear-gradient(to top right, black, transparent 80%)',
                opacity: 1,
                marginLeft: '-4rem',
                marginBottom: '-4rem',
            }}
        />
    </>
);

export default SectionPattern;
