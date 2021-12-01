import React, { useEffect, useState } from 'react';
import { useRef } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Shakhawat from './../../../images/Shakhawat.jpg'
import { useSpring, animated } from 'react-spring'
import ProjectsHome from '../ProjectsHome/ProjectsHome'
import Skills from '../Skills/Skills';

const Home = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/projectsData.json')
            .then(res => res.json())
            .then(data => setProjects(data));
    }, []);
    const n = useRef(0)
    const styles = useSpring({
        loop: () => 3 > n.current++,
        from: { x: 0 },
        to: { x: 100 },
    });

    return (
        <div className="bg-black container-fluid">
            <div className='row mx-5'>
                <div className="col-12 col-sm-12 col-md-12 col-lg-7 gx-5">
                    <h2 className="text-white mt-5 fw-lighter">Hello, I'm</h2>
                    <h2 className="text-white">Md. Shakhawat</h2>
                    <h2 className="text-white mb-3">Hossain Mridha</h2>
                    <h2 style={{ paddingTop: '1rem', margin: 'auto 0', fontWeight: 'normal', color: 'white' }}>
                        I'm {' '}
                        <span style={{ color: 'orange', fontWeight: 'bold' }}>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['MERN Stack Developer', 'Front End Developer']}
                                loop={5}
                                cursor
                                cursorStyle='.'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={2000}
                            // onLoopDone={handleDone}
                            // onType={handleType}
                            />
                        </span>
                    </h2>
                    <h5 className="text-white fw-light mt-3 mb-3">Dedicated and efficient MERN Stack Developer skilled in building web applications using React.js, Express.js,
                        MongoDB, HTML5, CSS3, JQuery, JavaScript, Bootstrap.
                    </h5>
                    <a href="https://drive.google.com/file/d/13afSBh2bawM4v-G_9tj03I2Ql68ijJqG/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-warning">Resume</button>

                    </a>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-5 mt-5">
                    <img style={{ width: '300px', height: '300px' }} className="img-fluid rounded-circle m-3" src={Shakhawat} alt="" />
                </div>

            </div>
            <hr className="bg-warning mt-5" />
            <h1 className="my-3 text-center text-warning">Recent Projects</h1>
            <hr className="bg-warning" />
            {/* projects home  */}
            <div className="container-fluid service-container">
                {/* <h1 className="text-center mt-5 fw-bold">Our <span className="text-primary">Projects</span></h1> */}
                <hr />
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
            <hr className="bg-warning mt-5" />
            <h1 className="my-3 text-center text-warning">My Blogs</h1>

            <hr className="bg-warning" />
            {/* skills home  */}
            {/* <h1 className="my-3 text-center text-white">Coming Soon</h1> */}
            <Skills></Skills>
            <hr className="bg-warning mt-5" />


            {/* <animated.div
                style={{
                    width: 80,
                    height: 80,
                    backgroundColor: '#46e891',
                    borderRadius: 16,
                    ...styles,
                }}
            /> */}
        </div>

    );
};

export default Home;