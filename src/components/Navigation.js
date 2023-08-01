import React from 'react';

function Navigation({ setCurrentSection }) {
    return (
        <nav>
            {['About Me', 'Portfolio', 'Contact', 'Resume'].map(section => (
                <button
                    key={section}
                    onClick={() => setCurrentSection(section)}
                >
                    {section}
                </button>
            ))}
        </nav>
    );
}

export default Navigation;