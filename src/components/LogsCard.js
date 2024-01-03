import React from 'react';

import LogItemCard from './logItemCard';

const logCardStyle = {
    marginTop: '50px',
    border: '1px solid rgba(0,0,0,0.175)',
    borderRadius: '0.375rem',
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
    width: '38rem',
    height: '250px',
};

const logsHeaderStyle = {
    position: 'sticky',
    top: 0,
};

const logsContentStyle = {
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column-reverse',
};

const LogsCard = () => {
    const logs = [];

    for (let i = 1; i <= 100; i++) {
        logs.push({ log: `Log ${i}`, time: `${i}:00 AM` });
    }

    return (
        <div style={logCardStyle}>
            <h4 style={logsHeaderStyle}>Activity Logs</h4>
            <div style={logsContentStyle}>
                {logs.map((log, index) => (
                    <LogItemCard key={index} log={log.log} time={log.time} />
                ))}
            </div>
        </div>
    );
};

export default LogsCard;
