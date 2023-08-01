import React from 'react';
import Navigation from './Navigation';

function Header({ setCurrentSection }) { 
    return (
        <header className="p-3 bg-dark text-white">
            <h1 className="mb-0">Bill Hamilton</h1>
            <Navigation setCurrentSection={setCurrentSection} /> 
        </header>
    );
}

export default Header;