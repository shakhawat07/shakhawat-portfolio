import React, { useEffect, useState } from 'react';
import ProjectsHome from '../Home/ProjectsHome/ProjectsHome';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/projectsData.json')
            .then(res => res.json())
            .then(data => setProjects(data));
    }, []);
    return (
        <div className="container-fluid bg-black">
            {/* <hr className="bg-warning" /> */}
            <h1 className="pt-5 text-center text-warning">Recent Projects</h1>
            <hr className="bg-warning" />

            <div className="row p-5">
                {
                    projects.map(project =>
                        <ProjectsHome
                            key={project.id}
                            project={project}
                        ></ProjectsHome>
                    )
                }
            </div>
        </div>
    );
};

export default Projects;