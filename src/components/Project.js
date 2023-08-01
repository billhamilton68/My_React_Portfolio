import React from 'react';

function Project({ title, image, repoLink, deployedLink }) {
    return (
        <div>
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <a href={deployedLink}>Deployed App</a>
            <a href={repoLink}>GitHub Repo</a>
        </div>
    );
}

export default Project;