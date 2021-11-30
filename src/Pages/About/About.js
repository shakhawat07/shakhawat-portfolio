import React from 'react';
import './About.css'
import SkDp1 from '../../images/SkDp1.jpg';

const About = () => {
    return (
        <>
            <section className="bg-black">
                <div className="container-fluid">
                    <div className="row d-flex justify-content-start align-items-start h-100 about-container rounded mx-4">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12 d-flex justify-content-center mt-5">
                            <div className="text-start">
                                <h2 className="card-title fw-bold text-white">About Me</h2>
                                <p><span className="text-warning">Name: </span> Md. Shakhawat Hossain Mridha </p>
                                <p><span className="text-warning">Age: </span>28</p>
                                <p><span className="text-warning">Qualification: </span>B.Sc. in C.S.E</p>
                                <p><span className="text-warning">Qualification: </span>B.Sc. in C.S.E</p>
                                <p><span className="text-warning">Post: </span>MERN Stack Developer</p>
                                <p><span className="text-warning">Languages: </span>English, Bangla and Hindi</p>
                                <p><span className="text-warning">Email: </span>shakhawathossainmridha@gmail.com</p>
                                <p><span className="text-warning">GitHub: </span>https://github.com/shakhawat07</p>
                                <p><span className="text-warning">LinkedIn: </span>https://www.linkedin.com/in/shakhawat-hossain-mridha-4450b8219/</p>


                                <a href="https://drive.google.com/file/d/13afSBh2bawM4v-G_9tj03I2Ql68ijJqG/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                    <button className="btn btn-warning">Resume</button>

                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 cl-sm-12 col-12 mt-5 d-flex justify-content-center">
                            <img className="img-fluid p-2" style={{ width: '350px', height: '480px' }} src={SkDp1} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;