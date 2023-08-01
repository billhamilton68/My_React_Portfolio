import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';

function App() {
  const [currentSection, setCurrentSection] = useState('About Me');

  const projects = [
    { 
      title: 'Project 1', 
      image: '/path/to/image1.jpg', 
      repoLink: 'https://github.com/yourusername/project1', 
      deployedLink: 'https://project1.com' 
    },
    // ... add other projects similarly
  ];

  return (
    <div className="App">
      <Header setCurrentSection={setCurrentSection} />
      
      {currentSection === 'About Me' && (
        <section>
          <img src="/path/to/your/avatar.jpg" alt="Your Avatar" />
          <p>Your bio here...</p>
        </section>
      )}

      {currentSection === 'Portfolio' && (
        <section>
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </section>
      )}

      {currentSection === 'Contact' && (
        <section>
          <form>
            <label>Name:
              <input type="text" required />
            </label>
            <label>Email:
              <input type="email" required />
            </label>
            <label>Message:
              <textarea required></textarea>
            </label>
            <button type="submit">Submit</button>
          </form>
        </section>
      )}

      {currentSection === 'Resume' && (
        <section>
          <a href="/path/to/your/resume.pdf" download>Download Resume</a>
          <ul>
            <li>Proficiency 1</li>
            <li>Proficiency 2</li>
            {/* Add other proficiencies */}
          </ul>
        </section>
      )}

      <Footer />
    </div>
  );
}

export default App;