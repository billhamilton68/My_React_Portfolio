import React from 'react';


// The Navigation component accepts the prop setCurrentSection() from the App component and uses it to update the current section of the page when a link is clicked.
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