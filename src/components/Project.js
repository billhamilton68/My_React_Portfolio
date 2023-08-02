import React from 'react';
import SingleProject from './SingleProject';

// The Project component accepts the prop projects from the App component and uses it to render the project data.
function Project({ projects }) {
    return (
        <section className="container">
            <div className="row">
                {projects.map((project, index) => (
                    <SingleProject key={index} {...project} />
                ))}
            </div>
        </section>
    );
}

export default Project;