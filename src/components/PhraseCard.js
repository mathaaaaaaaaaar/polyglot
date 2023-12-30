import React from 'react';

import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
} from 'reactstrap';

const PhraseCard = ({ phrase, translation, audioUrl }) => {
    phrase = "Text in English";
    translation = "Text in Spanish";
    const handlePlayAudio = () => {
        console.log("Audio Played")
    };

    return (
        <Card className="phraseCard" style={{ width: '18rem' }}>
            <CardBody className="d-flex justify-content-between align-items-stretch">
                <div>
                    <CardTitle tag={'h5'}>{phrase}</CardTitle>
                    <CardSubtitle className='text-muted' tag={'h6'}>{translation}</CardSubtitle>
                </div>
                <Button onClick={handlePlayAudio}>Play</Button>
            </CardBody>
        </Card>
    );
};

export default PhraseCard;
