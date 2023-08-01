import React, { useState } from 'react';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';
import SingleProject from './components/SingleProject';
import avatar from './images/Billvatar2.png';
import myTechBlogImage from './images/My_Tech_Blog.png';
import workDaySchedulerImage from './images/WorkDayScheduler.png';
import textEditorImage from './images/TextEditor.png';
import passwordGeneratorImage from './images/Password_Generator.png';
import Resume from './components/Bill_Hamilton_Test_Resume.pdf';

function App() {
  const [currentSection, setCurrentSection] = useState('About Me');

  const projects = [
    { 
      title: 'My Tech Blog', 
      image: myTechBlogImage,
      repoLink: 'https://github.com/billhamilton68/My-Tech-Blog.git',
      deployedLink: 'https://mytechblog-bh-b65c7aa94214.herokuapp.com' 
    },
    { 
      title: 'Work Day Scheduler', 
      image: workDaySchedulerImage, 
      repoLink: 'https://github.com/billhamilton68/work-day-scheduler-tp-api.git', 
      deployedLink: 'https://billhamilton68.github.io/work-day-scheduler-tp-api'
    },
    { 
      title: 'Texty PWA Text Editor',
      image: textEditorImage,
      repoLink: 'https://github.com/billhamilton68/Texty_PWA_Text_Editor.git', 
      deployedLink: 'https://git.heroku.com/texty-pwa-text-editor.git'
    },
    { 
      title: 'Password Generator',
      image: passwordGeneratorImage,
      repoLink: 'https://github.com/billhamilton68/password_generate_challenge.git', 
      deployedLink: 'https://billhamilton68.github.io/password_generate_challenge'
    },
  ];

  return (
    <div className="App">
      <Header setCurrentSection={setCurrentSection} />

      {currentSection === 'About Me' && (
        <section>
          <img src={avatar} alt="Bill Hamilton" className="avatar image" />
          <p>Hello!!! My name is Bill Hamilton. I am an experienced Operations Manager and Full Stack Developer</p>

          <h2>Featured Project</h2>
          <SingleProject {...projects[0]} />
        </section>
      )}

      {currentSection === 'Portfolio' && <Project projects={projects} />}

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
          <a href={Resume} download>Download Resume</a>

          <h2>Front-end Proficiencies</h2>
          <ul>
            <li>HTML</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>GraphQL</li>
            <li>JavaScript</li>
            <li>jQuery</li>
          </ul>
        </section>
      )}

      <Footer />
    </div>
  );
}

export default App;