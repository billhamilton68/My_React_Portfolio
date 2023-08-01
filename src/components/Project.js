import React from 'react';
import SingleProject from './SingleProject';

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