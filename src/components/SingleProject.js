function SingleProject({ title, image, repoLink, deployedLink }) {
    return (
        <div className="col-md-6 my-2">  
            <div className="card">
                <img src={image} alt={title} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <a href={deployedLink} className="btn btn-primary mr-2">Deployed App</a>
                    <a href={repoLink} className="btn btn-secondary">GitHub Repo</a>
                </div>
            </div>
        </div>
    );
}

export default SingleProject;