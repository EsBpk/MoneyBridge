import React from 'react';
import './Confetti.css';

const CONFETTI_COUNT = 150;

export const Confetti: React.FC = () => {
    return (
        <div className="confetti-container" aria-hidden="true">
            {Array.from({ length: CONFETTI_COUNT }).map((_, i) => (
                <div key={i} className={`confetti-piece piece-${i % 15}`} />
            ))}
        </div>
    );
};
