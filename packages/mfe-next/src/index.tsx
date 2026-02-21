"use client";

import React from 'react';


export interface RootMFEProps {
    title?: string;
}

export const RootMFE: React.FC<RootMFEProps> = ({ title = "Default MFE Title" }) => {
    return (
        <div style={{
            padding: '20px',
            backgroundColor: '#f0f0f0',
            color: '#333',
            borderRadius: '12px',
            border: '1px solid #ccc'
        }}>
            <h3 style={{ color: '#0070f3' }}>{title}</h3>
            <p>This component is living in <code>packages/mfe-next</code>.</p>
            <div style={{ marginTop: '10px', padding: '10px', background: '#fff', borderRadius: '4px' }}>
                <strong>MFE Internal State Demo:</strong>
                <Counter />
            </div>
        </div>
    );
};

const Counter = () => {
    const [count, setCount] = React.useState(0);
    return (
        <div style={{ marginTop: '5px' }}>
            <button
                style={{ padding: '8px 16px', background: '#0070f3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                onClick={() => setCount(c => c + 1)}
            >
                MFE Internal Score: {count}
            </button>
        </div>
    );
};
