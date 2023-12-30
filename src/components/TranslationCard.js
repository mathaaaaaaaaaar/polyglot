import React, { useState } from 'react';

import { Button } from 'reactstrap';

const translationCardStyle = {
    gap: '10px',
    border: '1px solid rgba(0,0,0,0.175)',
    borderRadius: '0.375rem',
    display: 'inline-flex',
    flexDirection: 'column',
    padding: '10px',
};

const textBoxStyle = {
    width: '36.625rem',
    height: '200px',
    border: '1px solid rgba(0,0,0,0.175)',
    borderRadius: '0.375rem',
};

const buttonStyle = {
    width: '18rem',
    height: '40px',
    border: '1px solid rgba(0,0,0,0.175)',
    borderRadius: '0.375rem',
}

const TranslationCard = () => {
    const [originalText, setOriginalText] = useState('');
    const [translatedText, setTranslatedText] = useState('');

    const handleTranslation = () => {
        // Perform translation logic here
        // You can use any translation API or library of your choice
        // For example, you can use Google Translate API or i18next library

        // Set the translated text
        setTranslatedText(`"${originalText}" in Spanish`);
        console.log("Text Translated")
    };

    const handlePlayAudio = () => {
        console.log("Audio Played from Translator")
    };

    return (
        <div style={translationCardStyle}>
            <input
                type="text"
                value={originalText}
                onChange={(e) => setOriginalText(e.target.value)}
                placeholder="Enter original text"
                style={textBoxStyle}
            />
            <input
                type="text"
                value={translatedText}
                readOnly
                placeholder="Translation"
                style={textBoxStyle}
            />
            <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                <button style={buttonStyle} onClick={handleTranslation}>Translate</button>
                <Button style={buttonStyle} onClick={handlePlayAudio}>Play</Button>
            </div>
        </div>
    );
};

export default TranslationCard;
