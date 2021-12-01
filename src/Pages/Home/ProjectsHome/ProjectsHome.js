import React from 'react';
import { useHistory } from 'react-router-dom';
// import Bicycle from './../../../images/bicycle-emporium-fullHome.png';
// import Tour from './../../../images/tour-de-planet-earth-fullHome.png';
// import sCare from './../../../images/scare-bangladesh-fullHome.png';

const ProjectsHome = ({ project }) => {

    const { id, name, liveSite, img1 } = project;
    const history = useHistory();

    const handleProjectDetails = () => {
        history.push(`/project/${id}`);
    }

    const teamMemberImgStyle = {
        width: '450px',
        height: '300px',
        borderRadius: '15px',
        overflow: 'hidden'
    }

    return (
        <div className="col-lg-4 col-md-12 col-sm-12 col-12 mb-3">
            <div className="card h-100 border border-light shadow-lg teamMember-card-background">
                <div className="card-body teamMember-img">
                    <img className="p-2 img-fluid moveArrow" style={teamMemberImgStyle} src={img1} alt="" />
                    <h4 className="card-title py-3 fs-4 text-black text-center mt-2 fw-bolder">{name}</h4>
                    <div className="d-flex justify-content-center align-items-center">
                        <button onClick={handleProjectDetails} className="btn btn-warning px-3 ms-2"
                        > <span className="">Details</span>
                        </button>
                        <a href={liveSite} target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-warning px-3 mx-3">Live Site</button>
                        </a>
                        {/* <p className="card-details text-center">Designation: {designation}</p> */}
                        {/* <p className="card-details text-center">Email: {email}</p> */}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProjectsHome;