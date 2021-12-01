import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ProjectDetails = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/projectsData.json')
            .then(res => res.json())
            .then(data => setProjects(data));
    }, []);
    // console.log(projects);
    const { projectId } = useParams();
    // console.log(typeof serviceId);
    return (
        <div>
            {/* <h1>Service {serviceId}</h1> */}
            {
                projects.filter(project => project.id === parseInt(projectId)).map(filtered => (
                    < div className="container-fluid bg-black" key={filtered}>
                        <div className="row project-detail-container">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12 d-flex flex-column justify-content-center align-items-center px-5">
                                <hr className="bg-warning" />
                                <h1 className="fw-5 my-3 text-warning">{filtered.name}</h1>
                                {/* <hr className="bg-warning" /> */}
                                <div className="col-lg-12 col-md-12 col-sm-12 col-12 d-flex flex-wrap px-5 mb-5">
                                    <img className="img-fluid border border-secondary rounded m-2" style={{ width: '350px', height: '300px', overflow: 'hidden' }} src={filtered.img1} alt="" />
                                    <img className="img-fluid border border-secondary rounded m-2" style={{ width: '350px', height: '300px', overflow: 'hidden' }} src={filtered.img2} alt="" />
                                    <img className="img-fluid border border-secondary rounded m-2" style={{ width: '350px', height: '300px', overflow: 'hidden' }} src={filtered.img3} alt="" />
                                </div>
                                <div className="">
                                    <a href={filtered.liveSite} target="_blank" rel="noopener noreferrer">
                                        <button className="btn btn-warning mx-5 px-5 py-2 mb-2">Go Live Site</button>

                                    </a>
                                    <a href={filtered.githubClient} target="_blank" rel="noopener noreferrer">
                                        <button className="btn btn-warning mx-5 px-5 py-2 mb-2">GitHub Client</button>

                                    </a>
                                    <a href={filtered.githubServer} target="_blank" rel="noopener noreferrer">
                                        <button className="btn btn-warning mx-5 px-5 py-2 mb-2">GitHub Server</button>

                                    </a>
                                </div>

                                <h6 className="m-3 text-white"><span className="text-warning">Description:</span> {filtered.description}</h6>
                                <p className="fs-5 m-3 text-warning"><span className="text-warning">Technology:</span> {filtered.technologyUsed}</p>
                                {/* <p className="w-50 my-3 fs-5">{filtered.liveSite}</p> */}
                            </div>
                        </div>

                    </div>

                ))
            }
        </div >
    );
};

export default ProjectDetails;