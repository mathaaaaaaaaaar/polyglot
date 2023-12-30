import React from 'react';

import PhraseCard from './PhraseCard';

// const savedPhrasesCardStyle = {
//     border: '1px solid black',
// };

const gridColStyle = {
    gap: '10px',
    display: 'inline-grid',
    border: '1px solid rgba(0,0,0,0.175)',
    padding: '10px',
    borderRadius: '0.375rem',
};

const gridRowStyle = {
    display: 'flex',
    gap: '10px',
};

const SavedPhrasesCard = () => {
    return (
        <div className="grid-container" style={gridColStyle}>
            {[...Array(5)].map((_, rowIndex) => (
                <div key={rowIndex} className="grid-row" style={gridRowStyle}>
                    {[...Array(2)].map((_, colIndex) => (
                        <PhraseCard key={colIndex} />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default SavedPhrasesCard;
