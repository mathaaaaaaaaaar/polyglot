import React from 'react';

const logItemStyle = {
    border: '1px solid rgba(0,0,0,0.175)',
    display: 'inline-flex',
    flexDirection: 'row',
    padding: '5px',
};

const timeStyle = {
    flex: 1,
};

const logLineStyle = {
    textAlign: 'right',
    flex: 5,
};

const LogItemCard = ({ log, time }) => {
    return (
        <div style={logItemStyle}>
            <div style={timeStyle}>{time}:</div>
            <div style={logLineStyle}>{log}</div>
        </div>
    );
};

export default LogItemCard;
