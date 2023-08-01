import React from 'react';

function Navigation({ setCurrentSection }) {
    return (
        <nav className="mt-2">
            {['About Me', 'Portfolio', 'Contact', 'Resume'].map(section => (
                <button
                    key={section}
                    onClick={() => setCurrentSection(section)}
                    className="btn btn-secondary mr-2"
                >
                    {section}
                </button>
            ))}
        </nav>
    );
}

export default Navigation;